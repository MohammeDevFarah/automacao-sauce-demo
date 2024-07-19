class ProductsPage {
    elements = {
      productTitle: () => cy.get('.title'),
      addToCartButton: (productName) => cy.contains(productName).parent().find('button')
    }
  
    verifyPageLoaded() {
      this.elements.productTitle().should('have.text', 'Products')
    }
  
    addToCart(productName) {
      this.elements.addToCartButton(productName).click()
    }
  }
  
  module.exports = new ProductsPage()
  