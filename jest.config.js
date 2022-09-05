module.exports = {
  testEnvironment: 'jsdom',
  rootDir: './src',
  cacheDirectory: '../.cache/jest',
  clearMocks: true,
  collectCoverageFrom: ['**/*.{ts,tsx}'],
  coverageDirectory: '../coverage',
  coverageReporters: ['text'],
  reporters: ['default', 'github-actions'],
  // TODO: add asset mocks
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  slowTestThreshold: 5,
}
