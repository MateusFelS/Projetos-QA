# 📋 Plano de Teste - Acessibilidade com Lighthouse  

## 1. **Introdução**  
O objetivo deste plano de teste é avaliar a acessibilidade do site The A11Y Project utilizando o **Google Lighthouse**, garantindo que usuários tenham uma experiência satisfatória.

## 2. **Escopo**  

**Áreas testadas:**  
- **Textos Alternativos (`alt`)** – Imagens devem ter descrições acessíveis.  
- **Navegação por Teclado** – Todos os elementos interativos devem ser acessíveis sem mouse.  
- **Contraste de Cores** – Garantir legibilidade para usuários com baixa visão.  
- **Semântica e Estrutura** – Cabeçalhos e listas devem ser bem estruturados.

## 3. **Tipos de Testes**  
- **Testes Automáticos** (Lighthouse)  
- **Testes Manuais** (Verificação de navegação e leitura com leitores de tela)  

## 4. **Critérios de Aceitação**  
- O site deve atingir **pelo menos 90** na pontuação de **Acessibilidade** do Lighthouse.  
- Imagens informativas devem possuir `alt`.  
- Elementos interativos devem ter rótulos acessíveis.  
- O site deve ser navegável apenas com o teclado.  

## 5. **Ambientes e Ferramentas**  
- **Ambiente:** Produção  
- **Ferramentas Utilizadas:** Google Lighthouse

## 6. **Gerenciamento de Defeitos (Bugs)**  
- **Plataforma utilizada:** Github  
- **Critérios de Prioridade:**  
  - **Alta:** Falhas que impedem a navegação ou dificultam o uso do site.  
  - **Média:** Erros que prejudicam a experiência, mas não impedem o uso.  
  - **Baixa:** Pequenos ajustes visuais ou recomendações de melhoria.  

## 7. **Riscos e Dependências**  
- **Possíveis problemas:** Incompatibilidade com leitores de tela ou falhas na implementação de acessibilidade.  
- **Dependências:** O site deve estar funcional para a execução dos testes.  
