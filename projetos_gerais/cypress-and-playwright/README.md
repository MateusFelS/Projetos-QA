# Estudo de Testes com Cypress e Playwright - Fluxo de Checkout

Este projeto foi desenvolvido como um exercício prático para aprender e comparar as ferramentas de automação de testes **Cypress** e **Playwright**. Os testes cobrem o fluxo de checkout de um sistema de e-commerce.

## Índice

- [Objetivo](#objetivo)
- [Funcionalidades Testadas](#funcionalidades-testadas)
- [Comparação Entre Cypress e Playwright](#comparação-entre-cypress-e-playwright)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Considerações Finais](#considerações-finais)

## Objetivo

O objetivo deste projeto é comparar as ferramentas Cypress e Playwright na automação de um fluxo de checkout. A intenção é explorar as diferenças na configuração, sintaxe, recursos e experiência geral de desenvolvimento com cada framework.

## Funcionalidades Testadas

- **Navegar até a home page.**
- **Adicionar um produto ao carrinho.**
- **Selecionar atributos do produto** (como tamanho e cor).
- **Verificar o subtotal do carrinho.**
- **Preencher formulário de checkout.**
- **Verificar sucesso da compra.**
  
## Comparação Entre Cypress e Playwright

### 🛠 **Cypress**:
- **Interface amigável**: A apresentação dos testes em execução é visualmente mais agradável.
- **Configuração inicial**: Simples e direta, ideal para iniciantes.
- **Gravação de erros e capturas de tela automáticas**: Em caso de falha, o Cypress gera vídeos e prints automaticamente.
- **Comunidade ativa**: Grande quantidade de exemplos, plugins e suporte.

### 🎥 **Playwright**:
- **Gravação de vídeo automática**: Registra todo o teste em execução, um recurso útil para análise de execuções.
- **Gravação de scripts**: Permite gravar interações no navegador e gerar código automaticamente. No entanto, criar scripts manualmente é recomendado para aprendizado e controle.
- **Multinavegador**: Oferece suporte nativo a múltiplos navegadores (Chromium, Firefox e WebKit).
- **Flexibilidade avançada**: Recurso de selectors mais robusto e opções avançadas de configuração.

## Tecnologias Utilizadas
- **Cypress**: Framework de automação de testes end-to-end.
- **Playwright**: Ferramenta de automação de navegadores moderna.
- **JavaScript/TypeScript**: Linguagem principal para escrita dos testes.

## Considerações Finais
- Ambas as ferramentas são poderosas para automação de testes, mas possuem abordagens distintas. O Cypress se destaca pela facilidade de uso e interface amigável, enquanto o Playwright oferece recursos avançados e flexibilidade. Escolher entre eles depende das necessidades específicas do projeto e da preferência pessoal.
