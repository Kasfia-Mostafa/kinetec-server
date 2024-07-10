import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
  {
    ignores: ['**/node_modules/', '.dist/'],
    languageOptions: {
      globals: {
        ...globals.browser,
        process: 'readonly',
      },
    },

    rules: {
      // 'no-unused-vars': 'error',
      'no-unused-expressions': 'error',
      'prefer-const': 'error',
      // 'no-console': 'warn',
      'no-undef': 'error',
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "error",
      "no-console": "off",
      "@typescript-eslint/no-var-requires": "error",
      "@typescript-eslint/no-unused-expressions": "error",
      "@typescript-eslint/no-this-alias": "error",
      "@typescript-eslint/no-explicit-any": "error",
      "no-restricted-syntax": [
          "error",
          {
              "selector": "CallExpression[callee.object.name='console'][callee.property.name!=/^(log|warn|error|info|trace)$/]",
              "message": "Unexpected property on console object was called"
          }
      ]
    },
  },

  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
