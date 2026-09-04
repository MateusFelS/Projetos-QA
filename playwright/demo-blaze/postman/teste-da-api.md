# Testes de API — DemoBlaze

## Objetivo

Realizar testes manuais das principais APIs da aplicação **DemoBlaze**, utilizando o **Postman**, com foco nos fluxos de autenticação, consulta de produtos e gerenciamento do carrinho.

Os testes foram executados considerando cenários de utilização dos endpoints e validação das respostas retornadas pela API.

**Resultado geral: Todos os testes executados foram aprovados.**

---

## 1. Autenticação

### Endpoints testados

| Método | Endpoint  | Cenário                                     |
| ------ | --------- | ------------------------------------------- |
| POST   | `/login`  | Realização de login com credenciais válidas |
| POST   | `/signup` | Cadastro de novo usuário                    |

### Cenários validados

* Envio de requisição de login com usuário e senha.
* Validação da resposta de autenticação.
* Verificação do retorno do `Auth_token` após login realizado com sucesso.
* Envio de requisição para cadastro de novo usuário.
* Validação da resposta retornada pela API.

### Exemplo — Login

**Request:**

```json
{
  "username": "usuario_teste",
  "password": "senha123"
}
```

**Resposta esperada:**

```json
{
  "Auth_token": "token_gerado_aqui"
}
```

### Resultado

✅ **Aprovado**

O endpoint de login retornou a resposta esperada e disponibilizou o token de autenticação.

### Evidência

![Teste de autenticação no Postman](https://github.com/user-attachments/assets/c4334b52-3c0f-4680-9969-ccd945a20ce9)

---

## 2. Produtos

### Endpoint testado

| Método | Endpoint   | Cenário                                   |
| ------ | ---------- | ----------------------------------------- |
| GET    | `/entries` | Consulta da lista de produtos disponíveis |

### Cenários validados

* Envio de requisição para consulta dos produtos.
* Validação do retorno da API.
* Verificação da estrutura da resposta.
* Verificação da presença dos principais atributos dos produtos, como:

  * `id`
  * `title`
  * `price`
  * `cat`
  * `desc`
  * `img`

### Exemplo de resposta

```json
{
  "Items": [
    {
      "cat": "phone",
      "desc": "The Samsung Galaxy S6 is powered by 1.5GHz octa-core Samsung Exynos 7420 processor and it comes with 3GB of RAM.",
      "id": 1,
      "img": "imgs/galaxy_s6.jpg",
      "price": 360.0,
      "title": "Samsung galaxy s6"
    }
  ]
}
```

### Resultado

✅ **Aprovado**

O endpoint retornou a lista de produtos e a estrutura da resposta estava de acordo com o esperado.

### Evidência

![Consulta de produtos no Postman](https://github.com/user-attachments/assets/15a4c49b-b49d-4efd-b586-57582c3021b5)

---

## 3. Carrinho

### Endpoints testados

| Método | Endpoint      | Cenário                                     |
| ------ | ------------- | ------------------------------------------- |
| POST   | `/addtocart`  | Adição de produto ao carrinho               |
| GET    | `/viewcart`   | Consulta dos produtos presentes no carrinho |
| DELETE | `/deletecart` | Remoção de produto do carrinho              |

### Cenários validados

* Adição de um produto ao carrinho.
* Consulta dos itens adicionados.
* Validação da resposta retornada pela API.
* Verificação da identificação do usuário/sessão no carrinho.
* Remoção de produto do carrinho.
* Consulta do carrinho após a remoção.

### Exemplo — Consulta do carrinho

```json
{
  "cookie": "id_sessão_usuário",
  "flag": "true"
}
```

### Exemplo de resposta

```json
{
  "Items": [
    {
      "cookie": "newuser123123312",
      "id": 1,
      "prod_id": 1
    }
  ]
}
```

### Resultado

✅ **Aprovado**

Os endpoints relacionados ao carrinho apresentaram o comportamento esperado nos cenários executados de adição, consulta e remoção de produtos.

### Evidência

![Teste de carrinho no Postman](https://github.com/user-attachments/assets/2874ccdd-5b0a-4dde-85eb-e1665094a27e)

---

# Resumo dos resultados

| Módulo       | Endpoints | Resultado             |
| ------------ | --------: | --------------------- |
| Autenticação |         2 | ✅ Aprovado            |
| Produtos     |         1 | ✅ Aprovado            |
| Carrinho     |         3 | ✅ Aprovado            |
| **Total**    |     **6** | **✅ Todos aprovados** |

## Conclusão

Os endpoints testados apresentaram comportamento esperado nos cenários executados. Foram validados fluxos relacionados à autenticação, consulta de produtos e gerenciamento do carrinho, incluindo operações de adição, consulta e remoção de itens.

**Resultado final: 6 endpoints testados e 6 aprovados.**
