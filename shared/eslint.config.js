import globals from "globals";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  { languageOptions: { globals: { ...globals.node, ...globals.es2020 } } },
  ...tseslint.configs.recommended,
  {
    files: ["**/*.ts"],
  },
  eslintConfigPrettier,
];
