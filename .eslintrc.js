// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  extends: ['plugin:vue/essential', 'airbnb-base'],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // check if imports actually resolve
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  rules: {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never'
    }],
    'linebreak-style':'off',
    'no-console': 'off',
    'no-alert': 'off',
    'max-len': 'off',
    'quotes': 'off',
    'eqeqeq': 'off',
    'no-param-reassign': 'off',
    'no-undef': 'off',
    'no-var': 'off',
    'no-unused-expressions': 'off',
    'consistent-return': 'off',
    'camelcase': 'off',
    'prefer-template': 'off',
    'prefer-arrow-callback': 'off',
    'no-use-before-define': 'off',
    'object-shorthand': 'off',
    'no-shadow': 'off',
    'vars-on-top': 'off',
    'no-plusplus': 'off',
    'no-extra-boolean-cast': 'off',
    'no-useless-escape': 'off',
    'no-mixed-operators': 'off',
    'quote-props': 'off',
    'no-unused-vars': 'off',
    'arrow-parens': 'off',
    'no-unneeded-ternary': 'off',
    'arrow-body-style': 'off',
    'no-lonely-if': 'off',
    'no-else-return': 'off',
    'no-restricted-syntax': 'off',
    'no-useless-return': 'off',
    'no-unreachable': 'off',
    'no-duplicate-case': 'off',
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    // 'no-param-reassign': ['error', {
    //   props: true,
    //   ignorePropertyModificationsFor: [
    //     'state', // for vuex state
    //     'acc', // for reduce accumulators
    //     'e' // for e.returnvalue
    //   ]
    // }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      optionalDependencies: ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
