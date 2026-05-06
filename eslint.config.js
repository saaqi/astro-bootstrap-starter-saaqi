import eslintPluginAstro from 'eslint-plugin-astro';
import jsxA11y from 'eslint-plugin-jsx-a11y';

export default [
  // add more generic rule sets here, such as:
  // js.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    files: ['src/**/*.{js,ts,astro,svelte,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
    plugins: {
      'jsx-a11y': jsxA11y,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      // override/add rules settings here, such as:
      // "astro/no-set-html-directive": "error"
      'jsx-a11y/alt-text': 'error',
    },
  },
];
