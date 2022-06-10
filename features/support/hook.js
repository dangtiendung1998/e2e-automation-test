const {browser} = require("protractor");
const {Before,} = require("@cucumber/cucumber");
var {setDefaultTimeout} = require("@cucumber/cucumber");

setDefaultTimeout(12 * 60 * 60 * 1000);
Before(async function (Scenario) {
})