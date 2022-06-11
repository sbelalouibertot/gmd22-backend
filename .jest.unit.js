module.exports = Object.assign({}, require('./.jest.config'), {
  testRegex: ['/test/unit/(.*).test.(j|t)s$', '(.*)\\.test.(j|t)s'],
  testPathIgnorePatterns: [
    '/dist/',
    '/generated/',
    '/node_modules/',
    '/integration/',
    '/__snapshots__/',
  ],
  testEnvironment: 'node',
  verbose: true,
  restoreMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.js', 'src/**/*.ts'],
  coverageDirectory: 'coverage',
  coverageReporters: ['html'],
})
