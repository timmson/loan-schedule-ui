module.exports = {
	"env": {
		"browser": true,
		"commonjs": true,
		"es6": true,
		"jest": true
	},
	"parser": "@babel/eslint-parser",
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended"
	],
	"globals": {
		"Atomics": "readonly",
		"SharedArrayBuffer": "readonly"
	},
	"parserOptions": {
		"ecmaVersion": 2018,
		"sourceType": "module"
	},
	"rules": {
		"no-mixed-spaces-and-tabs": 0,
		"indent": [
			"error",
			"tab"
		],
		"linebreak-style": [
			"error",
			"unix"
		],
		"quotes": [
			"error",
			"double"
		],
		"semi": [
			"warn",
			"never"
		]
	}
};