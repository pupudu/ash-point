module.exports = {
  extends: ['react-app', 'plugin:prettier/recommended', 'prettier'],
  rules: {
    'no-var': 'error',
    'prefer-const': 'error',
    'prefer-template': 'error',
    'react/prop-types': 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        printWidth: 100,
      },
    ],
  },
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018,
    ecmaFeatures: {
      modules: true,
    },
  },
};
