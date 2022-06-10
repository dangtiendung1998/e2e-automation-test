/*
Basic configuration to run your cucumber
feature files and step definitions with protractor.
**/
// test
var path = require('path');
var fs = require('fs');
var reporter = require('cucumber-html-reporter');
var jsonReportFile = path.resolve(__dirname, 'test-reports', 'results', 'report.json');

exports.config = {

    directConnect: true,
    // seleniumAddress: "http://localhost:4444/wd/hub",

    // seleniumAddress: process.env.SELENIUM_ADDRESS,

    // capabilities: {
    //   browserName: 'chrome',
    //   maxinstances: 5,
    //   shardTestFiles: true,
    // chromeOptions: {
    //   w3c: false,
    //   args: ["--no-sandbox", "--disable-dev-shm-usage", "--disable-gpu","--window-size=1920,1080"],
    //   prefs: {
    //     download: {
    //       'prompt_for_download': false,
    //       'directory_upgrade': true,
    //       'default_directory': process.cwd() + '/downloads'
//     }
    //   }
    // },
    // shardTestFiles: true,
    // maxInstances: 10,
    // chromeOptions: {
    //   args: ["--no-sandbox", "--headless", "--disable-dev-shm-usage", "--remote-debugging-port=9222", "--disable-gpu", '--window-size=1920,1080', '--user-agent="Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36"']
    // }
    // chromeOptions: {
    //   args: ['headless', 'window-size=1920,1080']
    // }
    // },

    // capabilities: {
    //   browserName: 'chrome',
    //   // shardTestFiles: true,
    //   // maxInstances: 2
    // },

    multiCapabilities: [
        {
            browserName: "chrome",
            maxInstances: 3,
            shardTestFiles: true,
            maxDuration: 2 * 60 * 60 * 1000,
            commandTimeout: 60 * 1000,
            idleDuration: 3 * 60 * 1000,
            chromeOptions: {
                args: ["--no-sandbox", "--disable-gpu", "--window-size=1920,1080", "--disable-dev-shm-usage"],
                w3c: false,
                prefs: {
                    download: {
                        'prompt_for_download': false,
                        'directory_upgrade': true,
                    }
                }
            },
        }
        // ,{
        //      browserName: 'firefox',
        //      'moz:firefoxOptions': {
        //          args: ["--safe-mode"]
        //      }
        //  }
    ],


    framework: 'custom',  // set to "custom" instead of cucumber.

    frameworkPath: require.resolve('protractor-cucumber-framework'),  // path relative to the current config file

    defaultTimeoutInterval: 10 * 60 * 1000, // default wait timeout to 10 minutes

    allScriptsTimeout: 30 * 60 * 1000,

    jasmineNodeOpts: { defaultTimeoutInterval: 20 * 60 * 1000},

    specs: [
        'features/*.feature'     // Specs here are the cucumber feature files
    ],

    // cucumber command line options
    cucumberOpts: {
        // require step definition files before executing features
        require: [
            'features/step_definitions/*.js',
            'features/support/*.js'
        ],
        tags: [],                           // <string[]> (expression) only execute the features or scenarios with tags matching the expression
        format: `json:${jsonReportFile}`    // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
    },

    beforeLaunch: function() {
        console.log('Test before run.');
    },

    onPrepare: function () {
        console.log('Test preparing.');
    },

    afterLaunch: function() {
        console.log('Test after run.');
    },

    onComplete: () => {
        console.log('Test completed.');
    },

    ignoreUncaughtExceptions: true,
    untrackOutstandingTimeouts: true
};
