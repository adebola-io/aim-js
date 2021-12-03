/**
 * Reverse a given string.
 * @param string 
 * @returns {string} Reversed string;
 */
export function reverseString (string: String) {
    let reversedString = '';
    for (let i = 0; i < string.length; i++) {
        reversedString += string[string.length-(i+1)]
    }
    return reversedString;
}

/**
 * Checks whether a given string is a palindrome.
 * @param string 
 * @returns {boolean} true or false.
 */
export function isPalindrome (string: String) {
    let reversedString = reverseString(string);
    return reversedString === string;
}

/**
 * Counts the duplicate characters in a string, and returns information about them in an object.
 * @param string 
 * @returns {Object} duplicate object.
 */
export function countDuplicates (string: String) {
    let hashmap: Object = {}, resultObject: Object = {};
    for (let i = 0; i < string.length; i++) {
        if (hashmap[string[i]] !== undefined) {
            resultObject[string[i]] = ++hashmap[string[i]];
        } else {
            hashmap[string[i]] = 1;
        }
    };
    return resultObject;
}