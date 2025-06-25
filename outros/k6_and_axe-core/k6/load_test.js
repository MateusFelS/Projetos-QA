import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  thresholds: {
    http_req_duration: ['p(99)<2000'], // 99% das requisições devem ser < 2s
    http_req_failed: ['rate<0.01'], // Menos de 1% das requisições podem falhar
  },
  stages: [
    { duration: '15s', target: 10 },  // Sobe para 10 usuários
    { duration: '15s', target: 50 },  // Sobe para 50 usuários
    { duration: '15s', target: 0 },   // Finaliza o teste
  ],
};

const BASE_URL = 'https://api.openbrewerydb.org/breweries';

function apiTest(endpoint, name, expectedStatus = 200) {
  let res = http.get(endpoint);
  let success = check(res, {
    [`${name} - Status ${expectedStatus}`]: (r) => r.status === expectedStatus,
    [`${name} - Tempo < 2s`]: (r) => r.timings.duration < 2000,
  });

  if (!success) {
    console.error(`⚠ Erro em ${name}: Status ${res.status}, Tempo: ${res.timings.duration}ms`);
  }
}

export default function () {
  apiTest(`${BASE_URL}`, "Listar todas");
  apiTest(`${BASE_URL}?by_state=california`, "Buscar por estado");
  apiTest(`${BASE_URL}?by_name=lagunitas`, "Buscar por nome");
  apiTest(`${BASE_URL}?by_type=micro`, "Buscar por tipo");
  apiTest(`${BASE_URL}/5128df48-79fc-4f0f-8b52-d06be54d0cec`, "Obter detalhes");
  apiTest(`${BASE_URL}?page=2&per_page=10`, "Testar paginação");
  apiTest(`${BASE_URL}?by_city=san_diego`, "Buscar por cidade");
  apiTest(`${BASE_URL}?by_postal=94103`, "Buscar por postal");
  apiTest(`${BASE_URL}/9999999`, "ID inexistente", 404);
  apiTest(`${BASE_URL}?by_state=california&by_type=micro`, "Múltiplos filtros");

  sleep(1);
}
