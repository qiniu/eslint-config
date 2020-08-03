module.exports = {
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/']
      }
    }
  },
  rules: {
    "import/order": ["error", {
      "groups": ["builtin", "external", ["internal", "parent", "sibling"], "unknown"],
      "newlines-between": "always",
      "pathGroups": [
        {
          "pattern": "src/**",
          "group": "internal"
        },
        {
          "pattern": "./*.+(less|png|svg|jpg|jpeg|webm|gif)",
          "group": "unknown"
        },
        {
          "pattern": "../*.+(less|png|svg|jpg|jpeg|webm|gif)",
          "group": "unknown"
        },
        {
          "pattern": "**/*.+(less|png|svg|jpg|jpeg|webm|gif)",
          "group": "unknown"
        }
      ]
    }]
  }
}