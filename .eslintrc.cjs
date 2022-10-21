module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:functional/recommended',
    'plugin:react-hooks/recommended',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: 'true',
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    'functional',
  ],
  rules: {
  'import/extensions': 0,
  'no-console': 0,
  'functional/no-expression-statement': 0,
  'functional/no-throw-statement': 0,
  },
};
