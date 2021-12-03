"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateFibonacciSequence = void 0;
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
