import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';

import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';

import reactHooks from 'eslint-plugin-react-hooks';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unusedImports from 'eslint-plugin-unused-imports';
import prettierConfig from 'eslint-config-prettier/flat';
import importPlugin from 'eslint-plugin-import';

export default defineConfig([
  globalIgnores(['.next/**', 'out/**', 'build/**', 'dist', 'node_modules', 'next-env.d.ts']),

  {
    files: ['**/*.{ts,tsx}'],

    plugins: {
      'simple-import-sort': simpleImportSort,
      'unused-imports': unusedImports,
      import: importPlugin,
    },

    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,

      ...nextVitals,
      ...nextTs,

      reactHooks.configs.flat.recommended,
    ],

    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
      ecmaVersion: 2022,
      globals: globals.browser,
      sourceType: 'module',
    },

    rules: {
      '@typescript-eslint/no-explicit-any': 'off',

      // remove unused imports
      'unused-imports/no-unused-imports': 'warn',

      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],

      // import sorting
      'simple-import-sort/imports': [
        'warn',
        {
          groups: [
            ['^\\u0000'],
            ['^react', '^next', '^@?\\w'],
            ['^@/'],
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
            ['^\\./(?=.*/)', '^\\.(?!/?$)', '^\\./?$'],
            ['^.+\\.(css|scss|sass)$'],
          ],
        },
      ],

      'simple-import-sort/exports': 'warn',

      'import/newline-after-import': ['warn', { count: 1 }],
    },
  },

  prettierConfig,
]);
