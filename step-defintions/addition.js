const assert = require('cucumber-assert');
const { Before, Given, When, Then } = require('cucumber');
const Calculator = require('../src/calculator');

let calculator;

Given('the numbers are {int} and {int}', function (x, y) {
    calculator = new Calculator(x, y);
});

When('they are added together', function () {
  calculator.add();
});

Then('the result should be {int}', function (expected) {
   assert.equal(calculator.getResult(), expected)
});