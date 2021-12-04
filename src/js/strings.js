"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverseWords = exports.reverseSentence = exports.countDuplicates = exports.isPalindrome = exports.reverseString = void 0;
/**
 * Reverse a given string.
 * @param string
 * @returns Reversed string;
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
 * @returns true or false.
 */
function isPalindrome(string) {
    var reversedString = reverseString(string);
    return reversedString === string;
}
exports.isPalindrome = isPalindrome;
/**
 * Counts the duplicate characters in a string, and returns information about them in an object.
 * @param string
 * @returns duplicate object.
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
/**
 * Reverse the sequence of words in a sentence string.
 * @param string String to be evaluated.
 * @returns reversed sentence.
 */
function reverseSentence(string) {
    var singleWord = '', reversed = '';
    for (var i = 0; i < string.length; i++) {
        if (string[i] === ' ' || i === string.length - 1) {
            reversed = "" + singleWord + (reversed === '' ? reversed : " " + reversed);
            singleWord = '';
        }
        else {
            singleWord += string[i];
        }
    }
    if (string[string.length - 1] === '.')
        reversed += '.';
    return reversed;
}
exports.reverseSentence = reverseSentence;
/**
 * Reverse each word in a sentence string, while maintaining its order.
 * @param string
 * @returns reversed sentence string.
 */
function reverseWords(string) {
    var singleWord = '', reversed = '';
    for (var i = 0; i < string.length; i++) {
        if (string[i] === ' ' || i === string.length - 1) {
            reversed += "" + reverseString(singleWord);
            reversed += "" + (i === string.length - 1 ? '' : ' ');
            singleWord = '';
        }
        else {
            singleWord += string[i];
        }
    }
    if (string[string.length - 1] === '.')
        reversed += '.';
    return reversed;
}
exports.reverseWords = reverseWords;
