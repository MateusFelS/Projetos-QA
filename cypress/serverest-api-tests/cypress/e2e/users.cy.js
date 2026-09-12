// Função para gerar emails aleatórios
const generateRandomEmail = (domain = "qa.com") => `fulaninho${Math.floor(Math.random() * 10000)}@${domain}`;

// Função para gerar corpo de requisição de criação de usuário com dados dinâmicos
const createUserBody = () => ({
  nome: "Usuário Teste",
  email: generateRandomEmail(),
  password: "123321",
  administrador: 'true',
});

// Função para gerar corpo de requisição de edição de usuário com dados dinâmicos
const editUserBody = () => ({
  nome: "Usuário Editado",
  email: generateRandomEmail(),
  password: "123321",
  administrador: 'true',
});

// Função auxiliar para validar resposta
const validateResponse = (response, expectedStatus, expectedStatusText) => {
  expect(response.status).to.eq(expectedStatus);
  expect(response.statusText).to.eq(expectedStatusText);
};

// Variável global para armazenar _id do usuário criado
let userId;

describe('Users Requests', () => {
  it('Get Users', () => {
    cy.getAPI('/usuarios').then((response) => {
      validateResponse(response, 200, 'OK');
      cy.log('Lista de Usuários:', JSON.stringify(response.body, null, 2));
    });
  });

  it('Create User', () => {
    cy.postAPI('/usuarios', createUserBody()).then((response) => {
      validateResponse(response, 201, 'Created');
      cy.log('Usuário criado:', JSON.stringify(response.body, null, 2));
      
      // Armazena o ID do usuário para testes futuros
      userId = response.body._id;
    });
  });

  it('Get Created User', () => {
    cy.getAPI(`/usuarios/${userId}`).then((response) => {
      validateResponse(response, 200, 'OK');
      cy.log('Usuário encontrado:', JSON.stringify(response.body, null, 2));
    });
  });

  it('Edit User', () => {
    cy.putAPI(`/usuarios/${userId}`, editUserBody()).then((response) => {
      validateResponse(response, 200, 'OK');
      cy.log('Usuário editado:', JSON.stringify(response.body, null, 2));
    });
  });

  it('Delete User', () => {
    cy.deleteAPI(`/usuarios/${userId}`).then((response) => {
      validateResponse(response, 200, 'OK');
      cy.log('Usuário deletado:', JSON.stringify(response.body, null, 2));
    });
  });
});
