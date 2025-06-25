# Relatório de Acessibilidade

## Tela de Login  
**3 problemas encontrados:**  

1. **Ausência de landmark principal (`<main>`)**  
   - **Impacto:** Moderado  
   - **Elementos afetados:** `<html>`  
   - **Solução:** Adicionar uma tag `<main>` ao redor do conteúdo principal da página.  

2. **Falta de um cabeçalho de nível 1 (`<h1>`)**  
   - **Impacto:** Moderado  
   - **Elementos afetados:** `<html>`  
   - **Solução:** Adicionar um `<h1>` representando o título principal da página.  

3. **Todo o conteúdo deve estar dentro de landmarks**  
   - **Impacto:** Moderado  
   - **Elementos afetados:**  
     - `.login_logo`  
     - `.form_group:nth-child(1)`  
     - `.form_group:nth-child(2)`  
     - `.login_credentials_wrap`  
   - **Solução:** Garantir que esses elementos estejam contidos dentro de landmarks como `<header>`, `<main>`, `<footer>`.  

---

## Tela de Produtos  
**4 problemas encontrados:**  

1. **Ausência de landmark principal (`<main>`)**  
   - **Impacto:** Moderado  
   - **Elementos afetados:** `<html>`  

2. **Falta de um cabeçalho de nível 1 (`<h1>`)**  
   - **Impacto:** Moderado  
   - **Elementos afetados:** `<html>`  

3. **Todo o conteúdo deve estar dentro de landmarks**  
   - **Impacto:** Moderado  
   - **Elementos afetados:** Vários elementos dentro da lista de produtos e do cabeçalho.  
   - **Solução:** Organizar o HTML utilizando landmarks adequadas.  

4. **Elemento `<select>` sem nome acessível**  
   - **Impacto:** Crítico  
   - **Elementos afetados:** `<select>`  
   - **Solução:** Adicionar um `label` associado ao `<select>` via `for` e `id`, ou um atributo `aria-label`.  

---

## Tela do Carrinho  
**3 problemas encontrados:**  

1. **Ausência de landmark principal (`<main>`)**  
   - **Impacto:** Moderado  
   - **Elementos afetados:** `<html>`  

2. **Falta de um cabeçalho de nível 1 (`<h1>`)**  
   - **Impacto:** Moderado  
   - **Elementos afetados:** `<html>`  

3. **Todo o conteúdo deve estar dentro de landmarks**  
   - **Impacto:** Moderado  
   - **Elementos afetados:**  
     - `.bm-icon`  
     - `.header_label`  
     - `#shopping_cart_container`  
     - `.header_secondary_container`  
     - `.cart_quantity_label`  
     - `.cart_desc_label`  
     - `.cart_quantity`  
     - `#item_4_title_link`  
     - `.inventory_item_desc`  
     - `.inventory_item_price`  
   - **Solução:** Ajustar a estrutura HTML para garantir que esses elementos estejam dentro de landmarks apropriadas.  

---

## Tela de Checkout  
**3 problemas encontrados:**  

1. **Ausência de landmark principal (`<main>`)**  
   - **Impacto:** Moderado  
   - **Elementos afetados:** `<html>`  

2. **Falta de um cabeçalho de nível 1 (`<h1>`)**  
   - **Impacto:** Moderado  
   - **Elementos afetados:** `<html>`  

3. **Todo o conteúdo deve estar dentro de landmarks**  
   - **Impacto:** Moderado  
   - **Elementos afetados:**  
     - `.bm-icon`  
     - `.header_label`  
     - `#shopping_cart_container`  
     - `.header_secondary_container`  
     - `.checkout_info`  
   - **Solução:** Garantir que os elementos estejam organizados dentro de landmarks adequadas, como `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`.  

---

## **Resumo das Melhorias**  
- **Adicionar `<main>` para definir o conteúdo principal.**  
- **Incluir um `<h1>` em cada página para melhorar a navegação.**  
- **Organizar os elementos dentro de landmarks apropriadas (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).**  
- **Garantir que elementos interativos (como `<select>`) tenham rótulos acessíveis (`label`, `aria-label`).**  
