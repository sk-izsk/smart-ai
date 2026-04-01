import { defineConfig } from "oxlint";

export default defineConfig({
  plugins: ["typescript", "unicorn", "react"],
  categories: {},
  rules: {
    semi: ["error", "never"],
  },
  settings: {
    "jsx-a11y": {
      polymorphicPropName: "as",
      components: {},
      attributes: {},
    },
    next: {
      rootDir: [],
    },
    react: {
      formComponents: [],
      linkComponents: [],
      componentWrapperFunctions: [],
    },
    jsdoc: {
      ignorePrivate: false,
      ignoreInternal: false,
      ignoreReplacesDocs: true,
      overrideReplacesDocs: true,
      augmentsExtendsReplacesDocs: false,
      implementsReplacesDocs: false,
      exemptDestructuredRootsFromChecks: false,
      tagNamePreference: {},
      no_used_vars: "false",
    },
    vitest: {
      typecheck: false,
    },
  },
  env: {
    builtin: true,
  },
  globals: {},
  ignorePatterns: ["dist"],
});
