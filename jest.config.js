const nextJest = require('next/jest')
const createJestConfig = nextJest({ dir: './' })

const customJestConfig = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^.+\\.(css|scss|sass|less)$': 'identity-obj-proxy',
    '^@/(.*)$': '<rootDir>/$1',
    '^next/link$': '<rootDir>/__mocks__/next-link.js'
  }
}

module.exports = createJestConfig(customJestConfig)
