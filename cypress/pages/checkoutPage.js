class CheckoutPage {
    elements = {
      firstNameInput: () => cy.get('#first-name'),
      lastNameInput: () => cy.get('#last-name'),
      postalCodeInput: () => cy.get('#postal-code'),
      continueButton: () => cy.get('#continue'),
      finishButton: () => cy.get('#finish')
    }
  
    fillCheckoutForm(firstName, lastName, postalCode) {
      this.elements.firstNameInput().type(firstName)
      this.elements.lastNameInput().type(lastName)
      this.elements.postalCodeInput().type(postalCode)
      this.elements.continueButton().click()
    }
  
    completePurchase() {
      this.elements.finishButton().click()
    }
  }
  
  module.exports = new CheckoutPage()