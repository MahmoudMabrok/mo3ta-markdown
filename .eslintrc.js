  module.exports = {
    globals: {
      console: 'readonly',
    },
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:react-native/all'
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  settings: {
    react: {
      version: require('./package.json').peerDependencies.react,
    },
  }
};
