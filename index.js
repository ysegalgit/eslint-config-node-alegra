module.exports = {

    globals: {
        MyGlobal: true
    },

    env: {
         "node": true
    },

    //see http://eslint.org/docs/rules/
    rules: {
        //Possible errors
        "no-unsafe-negation" : "error",
        //"no-extra-parens" : "error",  //TODO - enable in the future
        "no-console" : "off",
        "no-constant-condition" : "error",
        //TODO

        //Best Practices
        "complexity" : ["error", 5],
        //TODO

        //Strict Mode
        "strict" : "error",

        //Variables
        "no-unused-vars": ["error", { "varsIgnorePattern": "cl", "args": "none" } ],
        //TODO

        //Node.js and CommonJS
        //TODO

        //Stylistic Issues
        "linebreak-style" : "off",
        "semi": ["error", "always"],
        "quotes": "off",
        "max-len" : ["error" ,{ "ignoreComments": true ,"code" : 200}],
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
