module.exports = {
    root: true,
    env: {browser: true, es2020: true},
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        "@feature-sliced/eslint-config/rules/public-api",
        "@feature-sliced/eslint-config/rules/layers-slices",
        "@feature-sliced/eslint-config/rules/import-order/experimental",
        "prettier"
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    settings: {
        "import/resolver": {
            "typescript": {
                "alwaysTryTypes": true
            }
        }
    },
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json', './tsconfig.node.json'],
        tsconfigRootDir: __dirname,
    },
    plugins: ['react-refresh', 'prettier'],
    rules: {
        'react-refresh/only-export-components': [
            'warn',
            {allowConstantExport: true},
        ],
        'react/display-name': 'off',
        "prettier/prettier": ["error"],
        'import/no-internal-modules': 'off',
        '@typescript-eslint/no-explicit-any': 'off'
    },
}
