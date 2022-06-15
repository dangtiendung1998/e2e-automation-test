import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

Given('Discord login', async function() {
    cy.visit('https://discord.com/login')
    cy.get('input[name="email"]').type('')
    cy.get('input[name="password"]').type('')
    cy.get('button[type="submit"]').click()
    cy.wait(15000)
})

Then('Discord fine channel KOMU', async function() {
    cy.get('li[role=listitem] a[href=""]').click()
})