module.exports = {
  root: true,
  extends: '@react-native-community',
};
module.exports = {
  plugins: ['prettier', 'react-native', 'react'],
  env: {
    es6: true,
    browser: true,
  },
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier', 'prettier/react', 'plugin:react-native/all'],
  rules: {
    'no-underscore-dangle': 0,
    'react/jsx-props-no-spreading': 1,
    eqeqeq: 'error',
    'require-await': 'error',
    'no-await-in-loop': 'error',
    'no-return-await': 'error',
    'no-self-compare': 'warn',
    'object-curly-spacing': ['error', 'always'],
    'arrow-spacing': ['error', {before: true, after: true}],
    'import/no-unresolved': 'off',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 1,
    'react-native/no-color-literals': 2,
    'react-native/no-raw-text': 1,
    'space-before-function-paren': 0,
    'no-use-before-define': 0,
    'no-plusplus': 0,
    'react/require-default-props': 2,
    'no-restricted-syntax': 0,
    'react/display-name': 0,
    'guard-for-in': 0,
    'operator-linebreak': 0,
    'react/forbid-prop-types': [
      2,
      {
        forbid: ['object'],
        checkContextTypes: true,
        checkChildContextTypes: true,
      },
    ],
    'prettier/prettier': 'error',
  },
};
