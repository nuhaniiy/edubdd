const {Given, When, Then} = require("@badeball/cypress-cucumber-preprocessor")

Given('I open homepage', () => {
    cy.visit("http://zero.webappsecurity.com/index.html")
})

When('I type Transfer Funds and push button enter', () => {
    cy.get("#searchTerm").type("Transfer Funds{enter}")
})

Then('I should see search result page', () => {
    cy.get('h2').should('contain.text', 'Search Results:')
})