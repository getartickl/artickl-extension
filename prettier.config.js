module.exports = {
  printWidth: 80,
  tabWidth: 2,
  trailingComma: "all",
  singleQuote: false,
  jsxBracketSameLine: false,
  semi: true,
  importOrder: ["^@components/(.*)$", "^@lib/(.*)$", "^@styles/(.*)$", "^@types/(.*)$", "^[./]"],
  importOrderSeparation: true,
  experimentalBabelParserPluginsList: ["jsx", "typescript"],
};
