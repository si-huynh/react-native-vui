module.exports = {
    extends: '@react-native-community',
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'typescript-sort-keys'],
    root: true,
    rules: {
        '@typescript-eslint/explicit-function-return-type': 'error',
        '@typescript-eslint/no-shadow': 'error',
        'max-len': ['warn', { code: 150, ignoreComments: true }],
        'no-shadow': 'off',
        'no-undef': 'off',
        'object-curly-spacing': ['error', 'always'],
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx'] }],
        semi: ['error', 'never'],
        'sort-keys': ['error', 'asc', { caseSensitive: true, minKeys: 2, natural: false }],
        'typescript-sort-keys/interface': 2,
        'typescript-sort-keys/string-enum': 2,
    },
}
