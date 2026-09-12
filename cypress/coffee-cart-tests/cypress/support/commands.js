Cypress.Commands.add('getAPI', (urlParam) => {
    cy.request({
        method: 'GET',
        url: urlParam,
    })
})

Cypress.Commands.add('postAPI', (urlParam, body) => {
    cy.request({
        method: 'POST',
        url: urlParam,
        body: body,
    })
})

Cypress.Commands.add('putAPI', (urlParam, body) => {
    cy.request({
        method: 'PUT',
        url: urlParam,
        body: body,
    })
})

Cypress.Commands.add('deleteAPI', (urlParam) => {
    cy.request({
        method: 'DELETE',
        url: urlParam,
    })
})
