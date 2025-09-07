module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  moduleFileExtensions: ['js'],
  testMatch: ['**/test/**/*.test.js'],
  collectCoverageFrom: [
    'js/**/*.js',
    '!js/main.js' // メインファイルは除外
  ]
};