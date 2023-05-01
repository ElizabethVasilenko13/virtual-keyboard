module.exports = {
  extends: [
    'eslint-config-airbnb',
  ],
  env: {
    browser: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'import/extensions': ['error', 'always'],
  },
};
