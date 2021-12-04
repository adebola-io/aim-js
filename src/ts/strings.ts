/**
 * Reverse a given string.
 * @param string 
 * @returns Reversed string;
 */
export function reverseString (string: String) {
    let reversedString: String = '';
    for (let i = 0; i < string.length; i++) {
        reversedString += string[string.length-(i+1)]
    }
    return reversedString;
}

/**
 * Checks whether a given string is a palindrome.
 * @param string 
 * @returns true or false.
 */
export function isPalindrome (string: String) {
    let reversedString: String = reverseString(string);
    return reversedString === string;
}

/**
 * Counts the duplicate characters in a string, and returns information about them in an object.
 * @param string 
 * @returns duplicate object.
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

/**
 * Reverse the sequence of words in a sentence string.
 * @param string String to be evaluated.
 * @returns reversed sentence.
 */
export function reverseSentence (string: String) {
    let singleWord: String = '', reversed: String = '';
    for (let i = 0; i < string.length; i++) {
        if (string[i] === ' ' || i===string.length-1){
            reversed = `${singleWord}${reversed===''?reversed:` ${reversed}`}`;
            singleWord = '';
        } else {
            singleWord += string[i]
        }
    }
    if (string[string.length-1] === '.') reversed += '.';
    return reversed;
}

/**
 * Reverse each word in a sentence string, while maintaining its order.
 * @param string 
 * @returns reversed sentence string.
 */
export function reverseWords (string: String) {
    let singleWord: String = '', reversed: String = '';
    for (let i = 0; i < string.length; i++) {
        if (string[i] === ' ' || i===string.length-1){
            reversed += `${reverseString(singleWord)}`;
            reversed += `${i===string.length-1?'':' '}`;
            singleWord = '';
        } else {
            singleWord += string[i]
        }
    }
    if (string[string.length-1] === '.') reversed += '.';
    return reversed;
}