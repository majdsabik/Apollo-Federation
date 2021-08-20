module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ["only-error",
    "eslint-plugin-import",
    "eslint-plugin-jsdoc",
    "eslint-plugin-prefer-arrow"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking"
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  rules: {
    "@typescript-eslint/array-type": "off",
    "complexity": "off",
    "@typescript-eslint/consistent-type-assertions": "error",
    "constructor-super": "error",
    "@typescript-eslint/dot-notation": "error",
    "eqeqeq": [
      "error",
      "smart"
    ],
    "@typescript-eslint/explicit-member-accessibility": "off",
    "guard-for-in": "error",
    "id-blacklist": [
      "error",
      "any",
      "Number",
      "number",
      "String",
      "string",
      "Boolean",
      "boolean",
      "Undefined",
      "undefined"
    ],
    "id-match": "error",
    "import/no-deprecated": "warn",
    "@typescript-eslint/interface-name-prefix": "off",
    "jsdoc/newline-after-description": "error",
    "jsdoc/no-types": "error",
    "max-classes-per-file": "off",
    "@typescript-eslint/naming-convention": "error",
    "no-bitwise": "error",
    "no-caller": "error",
    "no-cond-assign": "error",
    "no-debugger": "error",
    "no-empty": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "no-eval": "error",
    "no-fallthrough": "error",
    "@typescript-eslint/no-inferrable-types": [
      "error",
      {
        "ignoreParameters": true
      }
    ],
    "no-invalid-this": "off",
    "no-new-wrappers": "error",
    "@typescript-eslint/no-shadow": [
      "error",
      {
        "hoist": "all"
      }
    ],
    "@typescript-eslint/no-parameter-properties": "off",
    "no-throw-literal": "error",
    "no-undef-init": "error",
    "no-underscore-dangle": "error",
    "no-unsafe-finally": "error",
    "@typescript-eslint/no-unused-expressions": "error",
    "no-unused-labels": "error",
    "no-var": "error",
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/prefer-function-type": "error",
    "object-shorthand": "error",
    "one-var": [
      "error",
      "never"
    ],
    "prefer-arrow/prefer-arrow-functions": "error",
    "prefer-const": "error",
    "radix": "error",
    "sort-keys": "off",
    "@typescript-eslint/unified-signatures": "error",
    "use-isnan": "error",
    "valid-typeof": "off",
    "arrow-body-style": "error",
    "arrow-parens": "off",
    "comma-dangle": "off",
    "curly": "error",
    "eol-last": "error",
    "jsdoc/check-alignment": "error",
    "max-len": [
      "error",
      {
        "code": 140
      }
    ],
    "new-parens": "error",
    "no-multiple-empty-lines": "off",
    "no-trailing-spaces": "error",
    "quote-props": [
      "error",
      "as-needed"
    ],
    "space-before-function-paren": [
      "error",
      {
        "anonymous": "never",
        "asyncArrow": "always",
        "named": "never"
      }
    ],
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        "multiline": {
          "delimiter": "semi",
          "requireLast": true
        },
        "singleline": {
          "delimiter": "semi",
          "requireLast": false
        }
      }
    ],
    "quotes": "off",
    "@typescript-eslint/quotes": [
      "error",
      "single",
      {
        "allowTemplateLiterals": true
      }
    ],
    "@typescript-eslint/semi": [
      "error",
      "always"
    ],
    "@typescript-eslint/type-annotation-spacing": "error"
  },
};