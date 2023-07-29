module.exports = {
  root: true,
  extends: ['@react-native'],
  plugins: ['unused-imports'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/ban-ts-comment': 'warn',
    'no-console': ['error', {allow: ['warn', 'error']}],
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'sort-imports': [
      'error',
      {
        ignoreDeclarationSort: true,
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'react-native-gesture-handler',
            importNames: ['TouchableOpacity'],
            message: 'Import TouchableOpacity from react-native instead',
          },
        ],
      },
    ],
  },
};
