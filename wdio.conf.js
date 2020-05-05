var browsers = require('./browsers-config');
const defaultTimeoutInterval = process.env.DEBUG ? 60 * 60 * 500 : 90000;

// check if the optional `target_browser` parameter is present in the CLI options
let browserConfig = null;
let browserArg = process.argv.find(function(arg) {
  return /target_browser/.test(arg);
});

if (browserArg) {
  browserConfig = browsers[browserArg.split('=')[1]];
}
if (!browserConfig) {
  browserConfig = browsers['firefox'];
}

exports.config = {
  runner: 'local',
  specs: ['features/*.feature'],
  maxInstances: 1,
  capabilities: [browserConfig],
  logLevel: 'silent',
  sync: true,
  bail: 0,
  baseUrl: process.env.appEnv,
  waitforTimeout: 90000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  reporters: [
    [
      'allure',
      {
        outputDir: './allure-results/',
        disableWebdriverStepsReporting: false,
        useCucumberStepReporter: true,
      },
    ],
  ],
  screenshotPath: './allure-results/',
  disableWebdriverScreenshotsReporting: false,
  framework: 'cucumber',
  cucumberOpts: {
    requireModule: [
      [
        '@babel/register',
        {
          ignore: [
            filepath =>
              filepath.includes('node_modules')
          ],
        },
      ],
    ],
    require: ['./step-defintions/*.js'],
    backtrace: true,
    failAmbiguousDefinitions: true,
    dryRun: false,
    failFast: false,
    format: ['pretty'],
    colors: true,
    snippets: true,
    source: true,
    profile: [],
    strict: false,
    tagExpression: process.env.tag,
    timeout: defaultTimeoutInterval,
    ignoreUndefinedDefinitions: false,
    tagsInTitle: false,
  },
  services: ['selenium-standalone'],
  coloredLogs: true,
  afterScenario: function(uri, feature, scenario, result, sourceLocation) {
    if (result.status === 'failed') {
      browser.takeScreenshot();
    }
  },
};
