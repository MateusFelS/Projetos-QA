# Resultados Teste de Segurança - DemoBlaze

## Analisando os Principais Problemas
- CSP (Content Security Policy) Header Not Set
  - Impacto: Sem CSP, a aplicação pode ser vulnerável a ataques XSS (Cross-Site Scripting).
  - Solução: Configurar um CSP Header no servidor para restringir fontes externas de scripts.

- Missing Anti-clickjacking Header
  - Impacto: A aplicação pode ser incorporada em iframes maliciosos, permitindo ataques de clickjacking.
  - Solução: Adicionar o header X-Frame-Options: DENY ou Content-Security-Policy: frame-ancestors 'none';.

- Vulnerable JS Library
  - Impacto: Algumas bibliotecas JavaScript usadas podem ter vulnerabilidades conhecidas.
  - Solução: Atualizar todas as bibliotecas JS para as versões mais recentes.

- Strict-Transport-Security Header Not Set
  - Impacto: Sem esse header, a aplicação pode permitir conexões HTTP não seguras, abrindo portas para ataques MITM (Man-in-the-Middle).
  - Solução: Adicionar Strict-Transport-Security: max-age=31536000; includeSubDomains; preload.

- X-Content-Type-Options Header Missing
  - Impacto: Pode permitir que navegadores interpretem arquivos de forma incorreta, facilitando ataques MIME sniffing.
  - Solução: Adicionar X-Content-Type-Options: nosniff no servidor.

## Resumo dos Alertas

| Nível de Risco | Número de Alertas |
|---------------|------------------|
| 🔴 **Alto**   | 0                |
| 🟠 **Médio**  | 3                |
| 🟢 **Baixo**  | 2                |
| 🔵 **Informativo** | 4           |

### Imagem do Gráfico

<img src="https://github.com/user-attachments/assets/46f71167-284b-4b8b-8ae8-852b2f820abb" width="500">

## Alertas Detalhados

| Nome                                                        | Nível de Risco | Número de Instâncias |
|-------------------------------------------------------------|----------------|----------------------|
| Content Security Policy (CSP) Header Not Set                | 🟠 Médio       | 5                   |
| Missing Anti-clickjacking Header                            | 🟠 Médio       | 3                   |
| Vulnerable JS Library                                       | 🟠 Médio       | 1                   |
| Strict-Transport-Security Header Not Set                    | 🟢 Baixo       | 26                  |
| X-Content-Type-Options Header Missing                       | 🟢 Baixo       | 24                  |
| Divulgação de Informações – Comentários Suspeitos           | 🔵 Informativo | 11                  |
| Modern Web Application                                      | 🔵 Informativo | 3                   |
| Re-examine Cache-control Directives                         | 🔵 Informativo | 4                   |
| Retrieved from Cache                                        | 🔵 Informativo | 126                 |

### Imagem da Tabela

<img src="https://github.com/user-attachments/assets/dd2ff7a3-5e88-4c91-913e-8f4c5e9ab9ed" width="500">

## Conclusão
- Prioridade: Resolver os alertas médios primeiro.
- Melhorias: Ajustar os alertas baixos e informativos para fortalecer a segurança.
- Próximos Passos: Aplicar as correções sugeridas e refazer os testes com o OWASP ZAP para validar as mudanças.
