import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

Given('Discord login', async function() {
    cy.visit('https://discord.com/login')
    cy.get('input[name="email"]').type('dung.dangtien@ncc.asia')
    cy.get('input[name="password"]').type('minhphuak8')
    cy.get('button[type="submit"]').click()
    cy.wait(15000)
})

Then('Discord fine channel KOMU', async function() {
    cy.get('li[role=listitem] a[href="/channels/@me/923959259853639751"]').click()
})