describe('API do GitHub - Testes Diversos', () => {
  const headersPadrao = {
    Authorization: `token ${Cypress.env('GITHUB_TOKEN')}`,
    Accept: 'application/vnd.github+json'
  };

  // Função genérica para requisições HTTP à API do GitHub
  function githubRequest(method, url, customHeaders = {}, options = {}) {
    return cy.request({
      method,
      url,
      headers: { ...headersPadrao, ...customHeaders },
      ...options
    });
  }

  // Função auxiliar: criar repositório
  function criarRepositorio(nome, descricao, failOnStatusCode = true) {
    return githubRequest('POST', '/user/repos', {}, {
      failOnStatusCode,
      body: {
        name: nome,
        description: descricao,
        private: false,
        auto_init: true
      }
    });
  }

  // Função auxiliar: excluir repositório
  function excluirRepositorio(nome) {
    return githubRequest('DELETE', `https://api.github.com/repos/MateusFels/${nome}`);
  }

  it('TC001 - Autenticação com token válido', () => {
    githubRequest('GET', '/user').then(response => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('login');
    });
  });

  it('TC002 - Autenticação com token inválido', () => {
    githubRequest(
      'GET',
      '/user',
      {
        Authorization: 'token token_invalido'
      },
      { failOnStatusCode: false }
    ).then(response => {
      expect(response.status).to.eq(401);
      expect(response.body.message).to.include('Bad credentials');
    });
  });

  it('TC003 - Listar repositórios públicos', () => {
    githubRequest('GET', '/users/MateusFels/repos').then(response => {
      expect(response.status).to.eq(200);
      const repoNames = response.body.map(repo => repo.name);
      expect(repoNames).to.include('coffee-cart-tests');
    });
  });

  it('TC004 - Criar repositório', () => {
    const repoName = `repo-teste-1`;

    criarRepositorio(repoName, 'Repositório de teste criado via Cypress')
      .then(response => {
        expect(response.status).to.eq(201);
        expect(response.body.name).to.eq(repoName);

        return excluirRepositorio(repoName);
      })
      .then(deleteResponse => {
        expect(deleteResponse.status).to.eq(204);
      });
  });

  it('TC005 - Criar repositório com nome duplicado', () => {
    const repoDuplicatedName = `repo-teste-1`;

    criarRepositorio(repoDuplicatedName, 'Repositório de teste criado via Cypress')
      .then(response => {
        expect(response.status).to.eq(201);

        return criarRepositorio(repoDuplicatedName, 'Tentativa de duplicação', false);
      })
      .then(duplicateResponse => {
        expect(duplicateResponse.status).to.eq(422);
        expect(duplicateResponse.body.message).to.include('Repository creation failed.');

        return excluirRepositorio(repoDuplicatedName);
      })
      .then(deleteResponse => {
        expect(deleteResponse.status).to.eq(204);
      });
  });

  it('TC006 - Buscar repositório específico', () => {
    githubRequest('GET', '/repos/MateusFels/coffee-cart-tests').then(response => {
      expect(response.status).to.eq(200);
      expect(response.body.id).to.eq(885622978);
    });
  });

  it('TC007 - Atualizar repositório', () => {
    const descricaoAtualizada = 'Descrição atualizada via teste Cypress';

    githubRequest(
      'PATCH',
      '/repos/MateusFels/processamento_imagens',
      {},
      {
        body: {
          description: descricaoAtualizada
        }
      }
    ).then(response => {
      expect(response.status).to.eq(200);
      expect(response.body.description).to.eq(descricaoAtualizada);
    });
  });

  it('TC008 - Deletar repositório', () => {
    const repoName = 'repo-delete-1';

    criarRepositorio(repoName, 'Repositório temporário para teste de exclusão')
      .then(response => {
        expect(response.status).to.eq(201);
        return excluirRepositorio(repoName);
      })
      .then(deleteResponse => {
        expect(deleteResponse.status).to.eq(204);
      });
  });

  it('TC009 - Listar issues abertas', () => {
    githubRequest('GET', '/repos/MateusFels/coffee-cart-tests/issues?state=open').then(response => {
      expect(response.status).to.eq(200);
      response.body.forEach(issue => {
        expect(issue.state).to.eq('open');
      });
    });
  });

  it('TC013 - Listar colaboradores', () => {
    githubRequest('GET', '/repos/MateusFels/coffee-cart-tests/collaborators').then(response => {
      expect(response.status).to.eq(200);
      const collaboratorsType = response.body.map(c => c.type);
      expect(collaboratorsType).to.include('User');
    });
  });

  it('TC014 - Adicionar colaborador', () => {
    const username = 'luscipher';

    githubRequest(
      'PUT',
      `/repos/MateusFels/coffee-cart-tests/collaborators/${username}`,
      {},
      {
        body: {
          permission: 'push'
        }
      }
    ).then(response => {
      expect([201, 204]).to.include(response.status); // 201: convite enviado, 204: já era colaborador
    });
  });
  it('TC015 - Remover colaborador', () => {
    const username = 'luscipher';

    githubRequest(
      'DELETE',
      `/repos/MateusFels/coffee-cart-tests/collaborators/${username}`
    ).then(response => {
      expect(response.status).to.eq(204);
    });
  });
});
