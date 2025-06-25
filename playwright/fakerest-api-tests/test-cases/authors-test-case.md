### 👩‍💻 Authors - Casos de Teste

| **ID** | **Descrição do Caso de Teste**                                 | **Método** | **Endpoint**                             | **Dados de Entrada**                                                                                          | **Resposta Esperada**                                                |
|--------|----------------------------------------------------------------|------------|------------------------------------------|--------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| A01    | Obter todos os autores                                         | `GET`      | `/api/v1/Authors`                       | -                                                                                                            | Status `200`. Lista de autores retornada.                              |
| A02    | Criar um novo autor                                            | `POST`     | `/api/v1/Authors`                       | `{ "id": 101, "idBook": 1, "firstName": "John", "lastName": "Doe" }`                                         | Status `200`. Autor criado com os dados fornecidos.                    |
| A03    | Atualizar um autor existente                                   | `PUT`      | `/api/v1/Authors/101`                   | `{ "id": 101, "idBook": 1, "firstName": "Updated John", "lastName": "Updated Doe" }`                         | Status `200`. Autor atualizado com os dados fornecidos.                |
| A04    | Deletar um autor existente                                     | `DELETE`   | `/api/v1/Authors/101`                   | -                                                                                                            | Status `200`. Autor removido com sucesso.                              |

---
