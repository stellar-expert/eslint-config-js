module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:import/recommended'
    ],
    env: {
        browser: true,
        node: true,
        es6: true
    },
    parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {modules: true},
        ecmaVersion: 'latest'
    },
    plugins: [
        'import',
        'eslint-plugin-jsdoc',
        'eslint-plugin-prefer-arrow'
    ],
    rules: {
        //OFF
        'complexity': 'off',
        'curly': 'off',
        'accessor-pairs': 'off',
        'array-callback-return': ['error', {allowImplicit: true}],
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/prefer-default-export': 'off',
        'linebreak-style': 'off',
        'lines-between-class-members': 'off',
        'no-bitwise': 'off',
        'no-console': 'off',
        'no-invalid-this': 'off',
        'no-undef-init': 'off',
        'no-underscore-dangle': 'off',
        'no-use-before-define': 'off',
        'no-prototype-builtins': 'off',
        'eol-last': 'off',
        'id-denylist': 'off',
        'max-classes-per-file': 'off',
        'prefer-arrow/prefer-arrow-functions': 'off',
        'prefer-destructuring': 'off',

        //WARN
        'eqeqeq': ['warn', 'smart'],
        'prefer-object-spread': 'warn',
        'class-methods-use-this': 'warn',
        'valid-jsdoc': ['warn', {requireReturnDescription: false, requireReturn: false}],
        'prefer-const': 'warn',
        'import/first': 'warn',
        'import/order': 'warn',
        'arrow-body-style': 'warn',
        'dot-notation': ['error', {allowKeywords: true}],
        'dot-location': ['error', 'property'],
        'require-await': 'warn',
        'default-case': 'warn',
        'no-debugger': 'warn',
        'no-unused-vars': 'warn',
        'no-void': ['warn'],
        'one-var': ['warn', 'never'],
        'no-unused-expressions': ['warn', {allowTaggedTemplates: true}],
        'jsdoc/check-indentation': 'warn',
        'max-len': ['warn', {
            code: 140,
            ignoreUrls: true,
            ignoreRegExpLiterals: true,
            ignoreTemplateLiterals: true,
            ignoreStrings: true,
            ignoreTrailingComments: true,
            ignoreComments: true
        }],

        //ERROR
        'indent': ['error', 4],
        'spaced-comment': ['error', 'never', {markers: ['/']}],
        'brace-style': ['error', '1tbs'],
        'comma-dangle': 'error',
        'constructor-super': 'error',
        'guard-for-in': 'error',
        'id-match': 'error',
        'new-parens': 'error',
        'no-caller': 'error',
        'no-cond-assign': 'error',
        'no-empty': 'error',
        'no-eval': 'error',
        'no-fallthrough': 'error',
        'no-multiple-empty-lines': 'error',
        'no-new-wrappers': 'error',
        'no-redeclare': 'error',
        'no-throw-literal': 'error',
        'no-trailing-spaces': 'warn',
        'no-unsafe-finally': 'error',
        'no-unused-labels': 'error',
        'no-var': 'error',
        'object-shorthand': 'error',
        'use-isnan': 'error',
        'valid-typeof': 'error',
        'jsdoc/check-alignment': 'error',
        'radix': 'error'
    }
}