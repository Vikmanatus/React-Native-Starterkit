module.exports = {
  root: true,
  extends: [
    '@react-native',
    'plugin:storybook/recommended',
    'plugin:react-hooks/recommended',
  ],
  plugins: ['unused-imports', 'eslint-plugin-tsdoc', 'jsdoc'],
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
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
    'react/jsx-sort-props': [
      'warn',
      {
        callbacksLast: true,
        shorthandFirst: false,
        shorthandLast: false,
        reservedFirst: true,
      },
    ],
    'padding-line-between-statements': [
      'warn',
      {blankLine: 'always', prev: 'function', next: 'function'},
      {blankLine: 'always', prev: 'function', next: '*'},
    ],
    '@typescript-eslint/prefer-optional-chain': 'warn',
    'react/jsx-handler-names': [
      'warn',
      {
        checkLocalVariables: true,
        eventHandlerPrefix: false,
        eventHandlerPropPrefix: 'on',
        checkInlineFunction: true,
      },
    ],
    'tsdoc/syntax': 'warn',
    'jsdoc/require-jsdoc': [
      'warn',
      {
        publicOnly: {
          cjs: true,
          esm: true,
          window: true,
        },
        require: {
          ArrowFunctionExpression: true,
          ClassDeclaration: true,
          ClassExpression: true,
          FunctionDeclaration: true,
          FunctionExpression: true,
          MethodDefinition: true,
        },
        contexts: [
          'TSInterfaceDeclaration',
          'TSTypeAliasDeclaration',
          'TSEnumDeclaration',
          'TSPropertySignature',
        ],
      },
    ],
  },
};
