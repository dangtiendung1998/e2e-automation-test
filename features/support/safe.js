const {browser} = require("protractor");
const {ElementFinder} = require("protractor");

ElementFinder.prototype.clickSafe = function () {
    return this.click().then(() => {
        return browser.sleep(1000);
    })
}