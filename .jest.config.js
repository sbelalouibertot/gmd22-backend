module.exports = {
  testEnvironment: 'node',
  setupFilesAfterEnv: ['jest-extended'],
  modulePaths: ['<rootDir>', 'src', 'node_modules'],
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'd.ts', 'node'],
  transform: {
    '^.+\.(ts|tsx|js)$': 'ts-jest',
  },
}
