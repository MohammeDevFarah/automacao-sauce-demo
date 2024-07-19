class CartPage {
    elements = {
      cartItems: () => cy.get('.cart_item'),
      checkoutButton: () => cy.get('#checkout')
    }
  
    verifyItemsInCart(expectedCount) {
      this.elements.cartItems().should('have.length', expectedCount)
    }
  
    proceedToCheckout() {
      this.elements.checkoutButton().click()
    }
  }
  
  module.exports = new CartPage()
  