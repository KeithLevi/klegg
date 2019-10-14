"use strict";
/* global assert egg*/
describe("parser tests", function () {

    it("remove spaces from code", function () {
        assert.equal(egg.skipSpace("    a string without space in front"), "a string without space in front");
    });


    it("test of parse +(a , 10) expression", function () {
        let parseResult = egg.parse("+(a, 10)");
        // → {type: "apply",
        //    operator: {type: "word", name: "+"},
        //    args: [{type: "word", name: "a"},
        //           {type: "value", value: 10}]}
        assert.equal(parseResult.type, "apply");
        assert.equal(parseResult.operator.type, "word");
        assert.equal(parseResult.args.length, 2);
    });

    it("test of parseExpression +(a, 10)", function() {
        let result = egg.parseExpression("+(a, 10)");
        assert.equal(result.expr.type, "apply");
        assert.equal(result.expr.operator.name, "+");
        assert.equal(result.rest.length, 0);
    });



});