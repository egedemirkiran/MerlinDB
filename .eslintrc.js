module.exports = {
    'env': {
        'commonjs': true,
        'es2021': true,
        'node': true
    },
    'extends': 'eslint:recommended',
    'overrides': [
    ],
    'parserOptions': {
        'ecmaVersion': 'latest'
    },
    'rules': {
        'indent': [
            'error',
            4
        ],
        'require-jsdoc': 'off',
        'max-len': [ 'error', {'code': 160} ],
        'no-unused-vars': [ 'warn', { 'argsIgnorePattern': '^_' } ],
        'no-var': 'error',
        'object-shorthand': 'error',
        'no-eval': 'error',
        'eqeqeq': 'error',
        'no-empty-function': 'error',
        'no-multi-str': 'error',
        'require-await': 'error',
        'yoda': 'error',
        'no-extra-parens': 'error',
        'implicit-arrow-linebreak': 'error', // not sure about this one yet
        'dot-location': [
            'error',
            'property'
        ],
        'no-multiple-empty-lines': [
            'error',
            { 'max': 1 }
        ],
        'brace-style': [
            'error',
            '1tbs'
            //{ 'allowSingleLine': true }
        ],
        'no-trailing-spaces': [
            'error',
            { 'skipBlankLines': true }
        ],
        'comma-spacing': [
            'error',
            {'before': false, 'after': true }
        ],
        'arrow-body-style': [
            'error',
            'as-needed'
        ],
        'arrow-parens': 'error',
        'array-bracket-spacing': [
            'error',
            'always',
            { singleValue: false, objectsInArrays: true, arraysInArrays: true }
        ],
        'no-undef': 'error',
        'quotes': [
            'error',
            'single'
        ],
        'no-undefined': 'error',
        'no-duplicate-imports': 'error',
        'semi': [
            'error',
            'always'
        ],
        'no-dupe-keys': 'error',
        'no-dupe-args': 'error',
    }
};
