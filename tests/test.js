const assert = require('chai').assert;
const myApp = require('../src/main.js');

describe("AritGeo", function() {

    describe("handle valid input", function() {
        it("should return Arithmetic for [2,4,6,8,10,12,14]", function() {
            assert.equal(myApp.aritGeo([2, 4, 6, 8, 10, 12, 14]), 'Arithmetic');
        });
        it("should return Geomtric for [2,4,8,16,32,64]", function() {
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
        it("should return undefined as aritGeo for [a,b]", function() {
            assert.equal(myApp.aritGeo([a, b]), 'undefined');
        });
    })
})