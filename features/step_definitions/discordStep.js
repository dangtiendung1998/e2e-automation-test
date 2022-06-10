const {Given} = require("@cucumber/cucumber");
const { When, Then } = require('@cucumber/cucumber')
const {browser, $$, $} = require('protractor');
const discordPo = require('../page_objects/discord-po')

Given('Discord login', async function() {
    return browser.waitForAngularEnabled(false).then(() => {
        return browser.get('https://discord.com/login').then(() => {
            return $('input[name="email"]').sendKeys('dung.dangtien@ncc.asia').then(() => {
                return $('input[name="password"]').sendKeys('minhphuak8').then(() => {
                    return $('button[type="submit"]').clickSafe().then(() => {
                        return browser.sleep(10000)
                    })
                })
            })
        });
    });
})

Then('Discord fine channel KOMU', async function() {
    return $('li[role=listitem] a[href="/channels/@me/923959259853639751"]').clickSafe()
})

Then('Discord reply message', async function() {
    return discordPo.replyMessage();
})