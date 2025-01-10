// eslint.config.js

import react from 'eslint-plugin-react';
import tseslint from '@typescript-eslint/eslint-plugin';

export default tseslint.config({
  languageOptions: {
    parserOptions: {
      // Your TypeScript config files
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
  settings: {
    // Specify the React version you're using
    react: { version: '18.3' },
  },
  plugins: {
    // Add the TypeScript and React plugins
    '@typescript-eslint': tseslint,
    react,
  },
  rules: {
    // Enable TypeScript recommended rules
    ...tseslint.configs.recommendedTypeChecked.rules,
    // Enable recommended React rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
});
