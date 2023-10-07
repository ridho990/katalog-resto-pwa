module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: "google",
	overrides: [
		{
			env: {
				node: true,
			},
			files: [".eslintrc.{js,cjs}"],
			parserOptions: {
				sourceType: "script",
			},
		},
	],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	rules: {},
	quotes: [
		"error",
		"single",
		{
			avoidEscape: true,
			allowTemplateLiterals: true,
		},
	],
};
