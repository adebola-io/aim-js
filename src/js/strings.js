"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countDuplicates = exports.isPalindrome = exports.reverseString = void 0;
/**
 * Reverse a given string.
 * @param string
 * @returns {string} Reversed string;
 */
function reverseString(string) {
    var reversedString = '';
    for (var i = 0; i < string.length; i++) {
        reversedString += string[string.length - (i + 1)];
    }
    return reversedString;
}
exports.reverseString = reverseString;
/**
 * Checks whether a given string is a palindrome.
 * @param string
 * @returns {boolean} true or false.
 */
function isPalindrome(string) {
    var reversedString = reverseString(string);
    return reversedString === string;
}
exports.isPalindrome = isPalindrome;
/**
 * Counts the duplicate characters in a string, and returns information about them in an object.
 * @param string
 * @returns {Object} duplicate object.
 */
function countDuplicates(string) {
    var hashmap = {}, resultObject = {};
    for (var i = 0; i < string.length; i++) {
        if (hashmap[string[i]] !== undefined) {
            resultObject[string[i]] = ++hashmap[string[i]];
        }
        else {
            hashmap[string[i]] = 1;
        }
    }
    ;
    return resultObject;
}
exports.countDuplicates = countDuplicates;
