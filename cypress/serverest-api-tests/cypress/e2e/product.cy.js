// Funções utilitárias para gerar dados aleatórios
const generateRandomEmail = (domain = "qa.com") => `fulaninho${Math.floor(Math.random() * 10000)}@${domain}`;
const generateRandomName = () => `Produto ${Math.floor(Math.random() * 10000)}`;

// Corpos de requisição para testes
const postUserBody = {
    nome: "Usuário Teste",
    email: generateRandomEmail(),
    password: "123321",
    administrador: 'true',
};

const postLoginBody = {
    email: postUserBody.email,
    password: postUserBody.password,
};

const createProductBody = () => ({
    nome: generateRandomName(),
    preco: 500,
    quantidade: 20,
    descricao: "Produto para teste",
});

const editProductBody = {
    ...createProductBody(),
    descricao: "Produto editado"
};

// Variáveis globais para ID e token
let userId;
let productId;
let bearerToken;

// Função para validar resposta com status e statusText
const validateResponse = (response, expectedStatus, expectedStatusText) => {
    expect(response.status).to.eq(expectedStatus);
    expect(response.statusText).to.eq(expectedStatusText);
};

// Descrição dos testes
describe('Product Requests', () => {
    it('Create User', () => {
        cy.postAPI('/usuarios', postUserBody).then((response) => {
            validateResponse(response, 201, 'Created');
            userId = response.body._id;
            cy.log('Usuário criado:', JSON.stringify(response.body, null, 2));
        });
    });

    it('Login', () => {
        cy.postAPI('/login', postLoginBody).then((response) => {

            // Login usando post, então código era pra ser 201
            validateResponse(response, 200, 'OK');
            bearerToken = response.body.authorization;
        });
    });

    it('Get Products', () => {
        cy.getAPI('/produtos').then((response) => {
            validateResponse(response, 200, 'OK');
            cy.log('Lista de Produtos:', JSON.stringify(response.body, null, 2));
        });
    });

    it('Create Product', () => {
        cy.postAPI('/produtos', createProductBody(), bearerToken).then((response) => {

            validateResponse(response, 201, 'Created');
            productId = response.body._id;
            cy.log('Produto criado:', JSON.stringify(response.body, null, 2));
        });
    });

    it('Get Created Product', () => {
        cy.getAPI(`/produtos/${productId}`).then((response) => {
            validateResponse(response, 200, 'OK');
            cy.log('Produto recuperado:', JSON.stringify(response.body, null, 2));
        });
    });

    it('Edit Product', () => {
        cy.putAPI(`/produtos/${productId}`, editProductBody, bearerToken).then((response) => {
            validateResponse(response, 200, 'OK');
            cy.log('Produto editado:', JSON.stringify(response.body, null, 2));
        });
    });

    it('Delete Product', () => {
        cy.deleteAPI(`/produtos/${productId}`, bearerToken).then((response) => {
            validateResponse(response, 200, 'OK');
            cy.log('Produto deletado:', JSON.stringify(response.body, null, 2));
        });
    });
});
