import globals from "globals";
import pluginJs from "@eslint/js";

export default [
    {
        files: ["**/*.js"],
        ignores: ["dist/**", "node_modules/**"],
        languageOptions: {
            ecmaVersion: 2021,
            sourceType: "module",
            globals: {
                ...globals.browser,
            },
        },
        plugins: {
            js: pluginJs,
        },
        rules: {
            ...pluginJs.configs.recommended.rules,
            "no-unused-vars": "warn",
            "no-console": "off",
        },
    },
];
