### ⚡ Activity - Casos de Teste

| **ID** | **Descrição do Caso de Teste**                                 | **Método** | **Endpoint**                             | **Dados de Entrada**                                                                                          | **Resposta Esperada**                                                |
|--------|----------------------------------------------------------------|------------|------------------------------------------|--------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| ACT01  | Obter todas as atividades                                      | `GET`      | `/api/v1/Activities`                    | -                                                                                                            | Status `200`. Lista de atividades retornada.                           |
| ACT02  | Criar uma nova atividade                                       | `POST`     | `/api/v1/Activities`                    | `{ "id": 101, "title": "New Activity", "dueDate": "2025-01-10T00:00:00", "completed": false }`               | Status `200`. Atividade criada com os dados fornecidos.                |
| ACT03  | Atualizar uma atividade existente                              | `PUT`      | `/api/v1/Activities/1`                  | `{ "id": 1, "title": "Update Activity", "dueDate": "2025-01-10T00:00:00", "completed": true }`               | Status `200`. Atividade atualizada com os dados fornecidos.            |
| ACT04  | Deletar uma atividade existente                                | `DELETE`   | `/api/v1/Activities/1`                  | -                                                                                                            | Status `200`. Atividade removida com sucesso.                          |

---
