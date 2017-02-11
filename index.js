module.exports = {

    globals: {
        MyGlobal: true
    },

    env: {
         "node": true,
         "es6": true
    },

        //see http://eslint.org/docs/rules/
    rules: {
        //---------- Possible errors ---------- DONE!!
        "no-unsafe-negation" : "error",
        //"no-extra-parens" : "error",  //TODO - enable in the future
        "no-console" : "off",
        "no-constant-condition" : "error",

        //---------- Best Practices ----------
        "array-callback-return" : "error",
        "block-scoped-var"      : "off",
        "complexity"            : ["error", 12],
        //"consistent-return"     : "error", //TODO - enable
        "curly"                 : ["error", "multi-or-nest"],
        "default-case"          : "error",
        "dot-location"          : ["error", "property"],
        "dot-notation"          : "error",
        //"eqeqeq"                : ["error","smart"], //TODO - enable in the future
        "no-div-regex"          : "error",
        "no-else-return"        : "error",
        "no-empty-function"     : "error",
        "no-empty-pattern"      : "error",
        "no-eq-null"            : "error",
        "no-eval"               : "error",
        "no-extend-native"      : "error",
        "no-extra-label"        : "error",
        "no-fallthrough"        : "error",
        "no-global-assign"      : "error",
        "no-implicit-coercion"  : "error",

        "no-implicit-globals"   : "error",
        "no-implied-eval"       : "error",
        "no-invalid-this"       : "error",
        "no-lone-blocks"        : "error",
        "no-loop-func"          : "error",
        "no-magic-numbers"      : ["error", { "ignore" : [0,1], "enforceConst": true, "detectObjects": true } ],
        //================================ STOPPEd HERE ==>
        "no-redeclare"  : "off",
        //TODO

        //---------- Strict Mode ----------
        "strict" : "error",

        //---------- Variables ----------
        "no-unused-vars": ["error", { "varsIgnorePattern": "cl", "args": "none" } ],
        //TODO

        //---------- Node.js and CommonJS ----------
        "callback-return"       : "error",
        //"global-require"      : "error",  //TODO - enable in the future
        //"handle-callback-err"   : ["error", "^.*(e|E)rr"],  //TODO - enable in the future
        "no-mixed-requires"     : "error",
        "no-new-require"        : "error",
        //"no-path-concat"        : "error",  //TODO - enable in the future
        //TODO

        //---------- Stylistic Issues ----------
        "linebreak-style" : "off",
        "semi": ["error", "always"],
        "quotes": "off",
        "max-len" : ["error" ,{ "ignoreComments": true ,"code" : 200}],
        "comma-spacing" : "off",
        "space-before-blocks" : ["error" , "never"],
        "indent": ["error", "tab"]
        //TODO

        //---------- ECMAScript 6 ----------
        //TODO

        //---------- Deprecated ----------
        //TODO


    }

};
