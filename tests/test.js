const assert = require('chai').assert;
const myApp = require('../src/main.js');

describe("AritGeo", function() {

    describe("handle valid input", function() {
        it("should return Arithmetic for [2,4,6,8,10,12,14]", function() {
            assert.equal(myApp.aritGeo([2, 4, 6, 8, 10, 12, 14]), 'Arithmetic');
        });
        it("should return Geomtric for [5,10,20,40,80,160]", function() {
            assert.equal(myApp.aritGeo([2, 4, 8, 16, 32, 64]), 'Geometric');
        });
        it("should return -1 for [3,7,4,8,9,10,12]", function() {
            assert.equal(myApp.aritGeo([3, 7, 4, 8, 9, 10, 12]), -1);
        });
        it("should return 0 for [ ]", function() {
            assert.equal(myApp.aritGeo([]), 0);
        });
    })
    describe("handle invalid input", function() {
        it("should return not a sequence for [4]", function() {
            assert.equal(myApp.aritGeo([4]), 'not a sequence');
        });
        it("should return all element should be numbers  for [12,'a','b',13,4]", function() {
            assert.equal(myApp.aritGeo([12, 'a', 'b', 13, 4]), 'numbers only');
        });
        it("should return all element should be numbers  for ['a']", function() {
            assert.equal(myApp.aritGeo(['a']), 'numbers only');
        });
        it("should return all element should be numbers  for [2, 4, 6, 8, 10, 'peter']", function() {
            assert.equal(myApp.aritGeo([2, 4, 6, 8, 10, 'peter']), 'numbers only');
        });
        it("should return all element should be numbers  for [0]", function() {
            assert.equal(myApp.aritGeo([0]), 'array[0] != 0 in geometric sequence');
        });
        it("should return not an array", function() {
            assert.equal(myApp.aritGeo(({ boy: 24 })), 'not an array');
        });
    })
})