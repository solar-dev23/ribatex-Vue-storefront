describe('add to compare', () => {
  it('Two products should be added to comparison table', () => {
    cy.visit('/c/jackets-23')
    cy.get(':nth-child(1) > .product > .no-underline > .product-image > img').click()
    cy.get('.py40 > :nth-child(2) > .p0').click()
    cy.scrollTo(0, 0)
    cy.get('.row > .middle-xs > div > .inline-flex').click()
    cy.wait(500)
    cy.get(':nth-child(2) > .product > .no-underline > .product-image > img').click()
    cy.get('.py40 > :nth-child(2) > .p0').click()
    cy.scrollTo(0, 0)
    cy.get('.compare-icon').click()
    cy.get(':nth-child(1) > .compare__top-info')
    cy.get(':nth-child(2) > .compare__top-info')
  })
})
