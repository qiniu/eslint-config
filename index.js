module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    /**
     * 之所以我们安装了eslint-config-airbnb，但是 extends 的是 airbnb-base，
     * 是因为，eslint-config-airbnb 默认依赖于 eslint-plugin-jsx-a11y。
     * 这个插件目前不是我们需要支持。
     */
    'airbnb-base',
    'airbnb/rules/react',
    'airbnb/rules/react-hooks',
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      impliedStrict: true
    },
    project: './tsconfig.json',
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'react-hooks'
  ],
  settings: {
    "react": {
      "pragma": "React",
      "version": "detect"
    },
    "linkComponents": [
      { "name": "Link", "linkAttribute": "to" }
    ],
    "import/resolver": {
      typescript: {}
    }
  },
  rules: {
    "semi": ["error", "never"],
    "eol-last": ["error", "always"],
    "comma-dangle": ["error", "never"],
    "max-classes-per-file": "off",
    "max-len": ["error", 120, { "ignoreUrls": true, "ignoreStrings": true, "ignoreTemplateLiterals": true, "ignoreRegExpLiterals": true }],
    "func-names": ["error", "as-needed"],
    "multiline-ternary": ["error", "always-multiline"],
    "no-mixed-operators": "off",
    "arrow-parens": ["error", "as-needed"],
    "arrow-body-style": ["error", "as-needed"],
    "space-before-function-paren": ["error", {
      "anonymous": "never",
      "asyncArrow": "always",
      "named": "never"
    }],
    "consistent-return": "off",
    "camelcase": "off",
    "no-param-reassign": "off",
    "prefer-template": "off",
    "prefer-promise-reject-errors": "off",
    "prefer-destructuring": "off",
    "no-script-url": "off",
    "object-curly-newline": "off",
    "prefer-arrow-callback": "off",
    "no-plusplus": "off",
    "padded-blocks": "off",
    "lines-between-class-members": "off",
    "no-restricted-syntax": "off",
    "no-underscore-dangle": ["error", { "allowAfterThis": true }],
    "no-throw-literal": "off",
    "class-methods-use-this": "off",
    "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 1 }],
    "no-multi-spaces": ["error", { ignoreEOLComments: true }],
    "no-nested-ternary": "warn",
    "no-continue": "off",
    "no-use-before-define": "off",
    "no-shadow": "off", // 会误报，比如 enum，禁用掉，开启 @typescript-eslint/no-shadow 即可

    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": "off",
    "import/no-named-as-default-member": "off",
    "import/extensions": ["error", "ignorePackages", {
      "js": "never",
      "jsx": "never",
      "ts": "never",
      "tsx": "never"
    }],
    // TODO: REMOVE ME: eslint 应该可以排除类型的循环 import 才对
    // -> https://github.com/benmosher/eslint-plugin-import/issues/1453
    "import/no-cycle": "off",
    "import/named": "off",
    "import/order": ["error", {
      "groups": ["builtin", "external", ["internal", "parent", "sibling", "index"]],
      "newlines-between": "always-and-inside-groups"
    }],

    "react/jsx-wrap-multilines": ["error",
      {
        "declaration": "parens-new-line",
        "assignment": "parens-new-line",
        "return": "parens-new-line",
        "arrow": "ignore",
        "condition": "ignore",
        "logical": "ignore",
        "prop": "ignore"
      }
    ],
    "react/jsx-filename-extension": "off",
    "react/jsx-closing-tag-location": "off",
    "react/jsx-closing-bracket-location": ["error", { selfClosing: false }],
    "react/prop-types": "off",
    "react/button-has-type": "warn",
    "react/jsx-tag-spacing": ["error", {"beforeSelfClosing": "always"}],
    "react/jsx-one-expression-per-line": "off",
    "react/destructuring-assignment": "off",
    "react/jsx-first-prop-new-line": "off",
    "react/jsx-props-no-spreading": "off",
    "react/static-property-placement": "off",
    "react/state-in-constructor": ["warn", "never"],
    "react/self-closing-comp": ["error", {
      "component": true,
      "html": false
    }],
    "react/sort-comp": "off",
    "react/jsx-max-props-per-line": ["error", { "maximum": 1, "when": "multiline" }],
    "react/no-array-index-key": "off",
    "react/prefer-stateless-function": "warn",
    "react/jsx-no-target-blank": ["error", { "allowReferrer": true }],

    "react-hooks/exhaustive-deps": "warn",

    "indent": "off",
    "react/jsx-indent": ["error", 2, {
      "indentLogicalExpressions": true
    }],
    "@typescript-eslint/indent": ["error", 2, {
      "ignoredNodes": ["ConditionalExpression", "TSTypeParameterInstantiation"],
      "SwitchCase": 1,
      // "ObjectExpression": 1,
      // "MemberExpression": "off",
      // "flatTernaryExpressions": true,
      // "FunctionDeclaration": {"body": 1, "parameters": 0}
    }],

    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-non-null-assertion": "off", // allow foo.bar!.fn()
    "@typescript-eslint/no-use-before-define": ["error", { "functions": false, "classes": false, "typedefs": false }],
    "@typescript-eslint/member-delimiter-style": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/array-type": ["error", { "default": "array-simple" }],
    "@typescript-eslint/explicit-module-boundary-types": "off",

    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_", "ignoreRestSiblings": true }],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-useless-constructor.md#rule-changes
    "no-useless-constructor": "off",
    "@typescript-eslint/no-useless-constructor": "error",
    "@typescript-eslint/no-shadow": ["error"]
  },
  "overrides": [{
    "files": ["*.spec.ts", "*.spec.tsx"],
    "rules": {
      "dot-notation": "off",
      "no-console": "off",
      "prefer-promise-reject-errors": "off",
      "import/first": "off",
      "react/prefer-stateless-function": "off",
      "react/jsx-max-props-per-line": "off",
      "react/self-closing-comp": "off",
      "react/display-name": "off",
      "react/button-has-type": "off",
      "@typescript-eslint/no-empty-function": "off"
    }
  }]
}
