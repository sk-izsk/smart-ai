import { defineConfig } from "oxfmt";

export default defineConfig({
  semi: false,
  singleQuote: true,
  trailingComma: "all",
  printWidth: 100,
  ignorePatterns: ["dist"],
});
