// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true
  },
  globals: {
    weex: true
  },
  extends: [
    'plugin:vue/essential',
    'standard'
  ],
  plugins: [
    'vue'
  ],
  rules: {
    'vue/no-parsing-error':  [2, {
      "x-invalid-end-tag": false
    }],
    'generator-star-spacing': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "indent": ["off", 2],
    "camelcase": [1, {"properties":"never"}],
    "semi" : 0,
    "curly": 0,
    "no-use-before-define" : 0,
    "strict" : 0 ,
    "no-var" : 2,
    "no-unused-expressions" : 0,
    "no-shadow" : 0,
    "no-underscore-dangle" : 0,
    "space-before-function-paren" :0
  }
}
