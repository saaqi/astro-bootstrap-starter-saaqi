// .prettierrc.mjs
/** @type {import(prettier).Config} */
export default {
  useTabs: false,
  singleQuote: true,
  trailingComma: 'none',
  bracketSameLine: false,
  htmlWhitespaceSensitivity: 'ignore',
  printWidth: 120,
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro'
      }
    }
  ]
};
