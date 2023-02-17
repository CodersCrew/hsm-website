const TSCONFIG_PROJECTS = ['tsconfig.eslint.json'];

module.exports = {
    root: true,
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    parserOptions: {
        ecmaVersion: 2022, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
        project: TSCONFIG_PROJECTS,
        tsconfigRootDir: __dirname,
    },
    plugins: ['@typescript-eslint', 'simple-import-sort'],
    extends: [
        'next/core-web-vitals',
        'eslint:recommended',
        'airbnb',
        'airbnb-typescript',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'prettier',
    ],
    rules: {
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'off',
        'import/no-unresolved': 'off',
        'react/button-has-type': 'off',
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
    },
    settings: {
        react: {
            version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
        },
        'import/resolver': {
            node: {
                paths: ['src'],
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
};
