"use strict";
const {browser} = require("protractor");
const {$$} = require("protractor");
const {$} = require("protractor");

module.exports = {
    locator : {
        buttonReply: $$('main[class^="chatContent"] ol[data-list-id="chat-messages"] li:last-of-type div[id^=message-accessories] div[class^=container]')
    },

    replyMessage: function() {
        return this.locator.buttonReply.isPresent().then((isPresent) => {
            console.log('file: discord-po.js ~ newMessage: ', isPresent)
            if(isPresent) {
                console.log('reply')
                return this.locator.buttonReply.first().$$('button').count().then((count) => {
                    return this.locator.buttonReply.first().$$('button').get(Math.floor(Math.random() * (count-1))).clickSafe()
                })
            }
            console.log('recheck')
            return browser.sleep(5*60*1000).then(() => {
                console.log('sleep wait')
                return this.replyMessage();
            })
        })
    }
}