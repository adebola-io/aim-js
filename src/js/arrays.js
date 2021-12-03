"use strict";
// OLD ALGORITHM
// 
// export function findSumPairs(sum: number, arr: Array<number>) {
//     let pairs: Array<number[]> =[], i: number = 0, a:number = 0;
//     while (i < arr.length) {
//         a = i + 1;
//         while (arr[i]+arr[a] != sum && a < arr.length) {
//             a++;
//         }
//         if (arr[a]) pairs.push([arr[i], arr[a]]);
//         i++;
//     }
//     return pairs;
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.shiftAllZeros = exports.getMaxProduct = exports.getProductPairs = exports.getSumPairs = void 0;
var testArray = [0, 9, 0, 14];
/**
 * Returns an multidimensional array containing the pairs of values in a given array that add up to a specifc number.
 * @param sum The final sum to check for.
 * @param arr The array to check within.
 * @returns A multidimensional array.
 */
function getSumPairs(sum, arr) {
    var pairs = [], hashMap = {}, i = 0;
    while (i < arr.length) {
        if (hashMap[arr[i]] !== undefined) {
            pairs.push([arr[i], sum - arr[i]]);
        }
        else {
            hashMap[sum - arr[i]] = arr[i];
        }
        i++;
    }
    return pairs;
}
exports.getSumPairs = getSumPairs;
/**
 * Returns an multidimensional array containing the pairs of values in a given array that yield a specifc number when multiplied.
 * @param sum The final product to check for.
 * @param arr The array to check within.
 * @returns A multidimensional array.
 */
function getProductPairs(product, arr) {
    var pairs = [], hashMap = {}, i = 0;
    while (i < arr.length) {
        if (hashMap[arr[i]] !== undefined) {
            pairs.push([arr[i], product / arr[i]]);
        }
        else {
            hashMap[product / arr[i]] = arr[i];
        }
        i++;
    }
    return pairs;
}
exports.getProductPairs = getProductPairs;
/**
 * Returns a number that represents the highest value that can be gotten from multiplying any two numbers in the array.
 * @param arr Array to be evaluated.
 * @returns {number} Maximum product
 */
function getMaxProduct(arr) {
    var sortedArray = arr.sort(function (a, b) { return a - b; });
    return sortedArray[sortedArray.length - 1] * sortedArray[sortedArray.length - 2];
}
exports.getMaxProduct = getMaxProduct;
/**
 * Moves all the zeroes in an array towards the end.
 * @param arr Array to be evaluted
 * @returns {Array} Resulting array.
 */
function shiftAllZeros(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            arr.splice(i, 1);
            arr.push(0);
        }
    }
    return arr;
}
exports.shiftAllZeros = shiftAllZeros;
