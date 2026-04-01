describe('template spec', () => {

  beforeEach(() => {
     cy.visit('https://vesteproposital.pro/')
    })

  it('Compra no carrinho com erro no E-mail e CEP ', () => {
   cy.get('.swiper-slide-next > .js-item-product > .js-product-container > .js-item-description > .item-link > .js-item-name').click()
   cy.get('.js-prod-submit-form').click()
   cy.get('[name="go_to_checkout"]').click()
   Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})
   cy.get('[data-testid="email"]').type("qatestes5412gmail.com")
   cy.get('[data-testid="shippingAddress_zipcode"]').type("81561691")
   cy.get('[data-testid="btnSubmitZipcode"]').click()
   cy.get('.alert > span').should('have.text','Digite o e-mail em um formato válido')
   cy.get(':nth-child(2) > .form-group > .error > .alert > span').should('have.text','Digite um CEP válido')


  })


 it('Compra com sucesso', () => {
   cy.get('.swiper-slide-next > .js-item-product > .js-product-container > .js-item-description > .item-link > .js-item-name').click()
   cy.get('.js-prod-submit-form').click()
   cy.get('[name="go_to_checkout"]').click()
   Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})
   cy.get('[data-testid="email"]').type("qatestes541@gmail.com")
   cy.get('[data-testid="shippingAddress_zipcode"]').type("65607-480")
   cy.get('[data-testid="btnSubmitZipcode"]').click()
   cy.get('[data-testid^="radio-option-ne-correios-sedex"]').click()
})


 it('Dados para entrega com campos vazios', () => {
   cy.get('.swiper-slide-next > .js-item-product > .js-product-container > .js-item-description > .item-link > .js-item-name').click()
   cy.get('.js-prod-submit-form').click()
   cy.get('[name="go_to_checkout"]').click()
   Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})
   cy.get('[data-testid="email"]').type("qatestes541@gmail.com")
   cy.get('[data-testid="shippingAddress_zipcode"]').type("65607-480")
   cy.get('[data-testid="btnSubmitZipcode"]').click()
   cy.get('[data-testid^="radio-option-ne-correios-sedex"]').click()
   cy.get('form > .text-uppercase').click()
   cy.get('#address-form-section > :nth-child(2) > .error > .alert > span').should('have.text','Este campo deve ser preenchido')
   cy.get(':nth-child(3) > .error > .alert > span').should('have.text','Este campo deve ser preenchido')
   cy.get(':nth-child(4) > .error > .alert > span').should('have.text','Este campo deve ser preenchido')
   cy.get('.col-md-5 > .error > .alert > span').should('have.text','Este campo deve ser preenchido')
   cy.get(':nth-child(4) > .form-group-error > :nth-child(2) > .alert > span').should('have.text','Digite um número de CPF ou CNPJ válido')
 
  })


 it('Dados para entrega com número e CPF invalidos', () => {
   cy.get('.swiper-slide-next > .js-item-product > .js-product-container > .js-item-description > .item-link > .js-item-name').click()
   cy.get('.js-prod-submit-form').click()
   cy.get('[name="go_to_checkout"]').click()
   Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})
   cy.get('[data-testid="email"]').type("qatestes541@gmail.com")
   cy.get('[data-testid="shippingAddress_zipcode"]').type("65607-480")
   cy.get('[data-testid="btnSubmitZipcode"]').click()
   cy.get('[data-testid^="radio-option-ne-correios-sedex"]').click()
   cy.get('form > .text-uppercase').click()
   cy.get('[data-testid="shipping_first_name"]').type("dsvfcsdfd")
   cy.get('[data-testid="shipping_last_name"]').type("dbdfbddrr")
   cy.get('[data-testid="shipping_phone"]').type("8185546")
   cy.get('[data-testid="shipping_number"]').type("700")
   cy.get('[name="billingAddress.id_number"]').type("45278257400")
   cy.get('.form-group-error > :nth-child(2) > .alert > span').should('have.text','Digite um número de CPF ou CNPJ válido')
  })


 it('Dados para entrega com número e CPF validos', () => {
   cy.get('.swiper-slide-next > .js-item-product > .js-product-container > .js-item-description > .item-link > .js-item-name').click()
   cy.get('.js-prod-submit-form').click()
   cy.get('[name="go_to_checkout"]').click()
   Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})
   cy.get('[data-testid="email"]').type("qatestes541@gmail.com")
   cy.get('[data-testid="shippingAddress_zipcode"]').type("65607-480")
   cy.get('[data-testid="btnSubmitZipcode"]').click()
   cy.get('[data-testid^="radio-option-ne-correios-sedex"]').click()
   cy.get('form > .text-uppercase').click()
   cy.get('[data-testid="shipping_first_name"]').type("dsvfcsdfd")
   cy.get('[data-testid="shipping_last_name"]').type("dbdfbddrr")
   cy.get('[data-testid="shipping_phone"]').type("8185546552")
   cy.get('[data-testid="shipping_number"]').type("700")
   cy.get('[name="billingAddress.id_number"]').type("693.408.090-41")
   cy.get('form > .text-uppercase').click()
 
  })


})