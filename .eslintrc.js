module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": ["plugin:react/recommended", "eslint:recommended"],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        // "react-hooks"
    ],
    "rules": {
        "indent": [
            "error", 2,
            { "SwitchCase": 1 }
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        // "react-hooks/rules-of-hooks": "error",
        "brace-style": [
            "error",
            "stroustrup"
        ],
        "max-len": [
            "error",
            { "code": 135 }
        ]
    }
};