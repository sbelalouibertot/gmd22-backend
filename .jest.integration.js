module.exports = Object.assign({}, require('./.jest.config'), {
  testRegex: ['/integration/(.*)\\.test\\.(j|t)s$'],
  globalSetup: '<rootDir>/test/integration/jestGlobalSetup.js',
  globalTeardown: '<rootDir>/test/integration/jestGlobalTeardown.js',
  setupFilesAfterEnv: ['<rootDir>/test/integration/jestSetupTest.js'],
  verbose: true,
})
