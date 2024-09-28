const {Given, When, Then} = require("@badeball/cypress-cucumber-preprocessor")

Given("I open login page", () => {
    cy.visit("http://zero.webappsecurity.com/login.html")
})

When("I submit login", () => {
    cy.get("#user_login").type("username")
    cy.get("#user_password").type("password")
    cy.get("#user_remember_me").click()
    cy.get(".btn").click()
})

Then("I should see homepage", () => {
    cy.get("#account_summary_tab").should("be.visible")
    cy.get("#account_activity_tab").should("be.visible")
    cy.get("#transfer_funds_tab").should("be.visible")
    cy.get("#pay_bills_tab").should("be.visible")
    cy.get("#money_map_tab").should("be.visible")
    cy.get("#online_statements_tab").should("be.visible")
})
