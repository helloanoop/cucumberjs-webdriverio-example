module.exports = {
  chrome: {
    browserName: 'chrome',
    maxInstances: 5,
  },
  firefox: {
    browserName: 'firefox',
    maxInstances: 5,
  },
  safari: {
    browserName: 'safari',
    maxInstances: 5,
  },
  ie: {
    browserName: 'internet explorer',
    platform: '',
    version: '',
    acceptUntrustedCertificates: true,
    ignoreProtectedModeSettings: true,
    ignoreZoomSetting: true,
    ensureCleanSession: true,
    maxInstances: 5,
  },
  phantomjs: {
    browserName: 'phantomjs',
    platform: '',
    version: '',
    maxInstances: 5,
  },
};
