"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateFibonacciNumber = exports.generateFibonacciSequence = void 0;
/**
 * Generates a Fibonacci Sequenced array of a specified length, with the values starting at 0 and 1.
 * @param length
 * The length of the sequence to be generated.
 * @returns array
 */
var generateFibonacciSequence = function (length) {
    switch (length) {
        case 1:
            return [0];
        case 2:
            return [0, 1];
        default:
            var arr = exports.generateFibonacciSequence(2);
            while (arr.length < length) {
                arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
            }
            return arr;
    }
};
exports.generateFibonacciSequence = generateFibonacciSequence;
/**
 * Returns the value at the nth position of a Fibonacci sequence.
 * @param position
 * @param firstNumber The first value in the sequence. The default value is 0.
 * @param secondNumber The second value in the sequence. The default value is 1.
 * @returns Generated number.
 */
var generateFibonacciNumber = function (position, firstNumber, secondNumber) {
    var n = 1, a = firstNumber !== undefined ? firstNumber : 0, b = secondNumber !== undefined ? secondNumber : 1;
    if (position === 1) {
        return a;
    }
    else if (position === 2) {
        return b;
    }
    else {
        while (n < position - 1) {
            a = a + b, b = a + b, n += 2;
        }
    }
    if (n >= position) {
        return a;
    }
    else {
        return b;
    }
};
exports.generateFibonacciNumber = generateFibonacciNumber;
