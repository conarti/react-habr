module.exports = {
	env: {
		browser: true,
		es2021: true,
		jest: true,
	},
	extends: [
		'plugin:react/recommended',
		'airbnb',
		'plugin:i18next/recommended',
		'plugin:storybook/recommended',
		'plugin:conarti-fsd/all',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: [
		'react',
		'@typescript-eslint',
		'i18next',
		'react-hooks',
		'conarti-fsd',
	],
	rules: {
		'react/jsx-indent': [2, 'tab'],
		'react/jsx-indent-props': [2, 'tab'],
		indent: [2, 'tab'],
		'react/jsx-filename-extension': [
			2,
			{ extensions: ['.js', '.jsx', '.tsx'] },
		],
		'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
		'import/no-unresolved': 'off',
		'import/prefer-default-export': 'off',
		'no-unused-vars': 'off',
		'react/require-default-props': 'off',
		'react/react-in-jsx-scope': 'off',
		'react/jsx-props-no-spreading': 'off',
		'react/function-component-definition': 'off',
		'no-shadow': 'off',
		'import/extensions': 'off',
		'import/no-extraneous-dependencies': 'off',
		'no-underscore-dangle': 'off',
		'@typescript-eslint/no-unused-vars': 'error',
		'no-tabs': 'off',
		'react/jsx-max-props-per-line': [2, { maximum: 1 }],
		'max-len': 'off',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'error',
		'jsx-a11y/click-events-have-key-events': 'off',
		'jsx-a11y/no-static-element-interactions': 'off',
		'no-param-reassign': 'off',
		'no-undef': 'off',
		'no-console': 'error',
		'no-restricted-imports': 'off',
		'@typescript-eslint/no-restricted-imports': [
			'error',
			{
				name: 'react-redux',
				importNames: ['useDispatch'], // TODO: 'useSelector'
				message: 'Use typed hook `useAppDispatch` instead.',
			},
		],
		'react/jsx-key': 'error',
		'no-restricted-syntax': [
			'error',
			{
				selector: 'ImportDeclaration[source.value=/.*\\.module\\.s?(a|c)ss$/] ImportDefaultSpecifier[local.name!="styles"]',
				message: 'Use "styles" to name css imports',
			},
			{
				selector: '*[value=FunctionExpression][key!=Identifier],VariableDeclarator > FunctionExpression',
				message: 'Using "FunctionExpression" is not allowed',
			},
			{
				selector: 'FunctionDeclaration',
				message: 'Using "FunctionDeclaration" is not allowed',
			},
		],
	},
	globals: {
		__IS_DEV__: true,
	},
	overrides: [
		{
			files: ['*.test.{tsx,ts}'],
			rules: {
				'i18next/no-literal-string': 'off',
				'prefer-promise-reject-errors': 'warn',
			},
		},
	],
};
