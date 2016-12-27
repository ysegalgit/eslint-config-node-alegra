module.exports = {

    globals: {
        MyGlobal: true
    },

    env: {
         "node": true
    },

    rules: {
        //Possible errors
        "no-unsafe-negation" : "error",
        "no-extra-parens" : "error",
        "no-console" : "off",
        "no-constant-condition" : "error",
        //TODO

        //Best Practices
        "complexity" : ["error", 3],
        //TODO

        //Strict Mode
        "strict" : "error",

        //Variables
        "no-unused-vars": ["error", { "varsIgnorePattern": "cl" }],
        //TODO

        //Node.js and CommonJS
        //TODO

        //Stylistic Issues
        "linebreak-style" : "off",
        "semi": ["error", "always"],
        "quotes": "off",
        "max-len" : ["error" ,{ "ignoreComments": true ,"code" : 120}],
        "comma-spacing" : "off",
        "space-before-blocks" : ["error" , "never"],
        "indent": ["error", "tab"]
        //TODO

        //ECMAScript 6
        //TODO

        //Deprecated
        //TODO


    }

};
