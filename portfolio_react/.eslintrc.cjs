module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true, // This allows Node.js global variables and Node.js scoping.
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect the version of React
    },
  },
  plugins: [
    'react-refresh',
  ],
  rules: {
    'react-refresh/only-export-components': 'warn',
  },
}
