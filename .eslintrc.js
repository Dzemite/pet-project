module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:i18next/recommended',
    'plugin:storybook/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json']
  },
  plugins: [
      'react',
    '@typescript-eslint',
    'i18next',
    'react-hooks',
  ],
  rules: {
    'react/jsx-indent': [2, 4],
    'react/jsx-indent-props': [2, 4],
    indent: [2, 4],
    'react/jsx-filename-extension': [2, {
      extensions: ['.js', '.jsx', '.tsx']
    }],
    // "@typescript-eslint/consistent-type-imports": [
    //   "error",
    //   {
    //     "prefer": "no-type-imports",
    //   }
    // ],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'warn',
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'react/function-component-definition': 'off',
    'no-shadow': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-underscore-dangle': 'off',
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/no-floating-promises': 'warn',
    '@typescript-eslint/naming-convention': 'off',
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "no-param-reassign": "off",
    'i18next/no-literal-string': ['error', {
      markupOnly: true,
      ignoreAttribute: ['data-testid', 'to']
    }],
    'max-len': ['error', {
      ignoreComments: true,
      code: 120
    }]
  },
  globals: {
    __IS_DEV__: true
  },
  overrides: [
      {
        files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
        rules: {
          'i18next/no-literal-string': 'off',
          '@typescript-eslint/no-unsafe-assignment': 'off',
          'max-len': 'off',
        }
      },
    {
      files: ['**/src/**/*.stories.{ts,tsx}'],
      rules: {
        "@typescript-eslint/no-unsafe-assignment": "off"
      }
    }
  ]
};