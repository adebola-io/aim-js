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


/**
 * Returns an multidimensional array containing the pairs of values in a given array that add up to a specifc number.
 * @param sum The final sum to check for.
 * @param arr The array to check within.
 * @returns A multidimensional array.
 */
export function getSumPairs(sum:number, arr: Array<number>) {
    let pairs: Array<number[]>=[], hashMap= {}, i: number = 0;
    while (i < arr.length) {
        if (hashMap[arr[i]] !== undefined){
            pairs.push([arr[i], sum-arr[i]]);
        } else {
            hashMap[sum-arr[i]] = arr[i];
        }
        i++;
    }
    return pairs;
}

/**
 * Returns an multidimensional array containing the pairs of values in a given array that yield a specifc number when multiplied.
 * @param sum The final product to check for.
 * @param arr The array to check within.
 * @returns A multidimensional array.
 */
export function getProductPairs(product: number, arr: Array<number>) {
    let pairs: Array<number[]>=[], hashMap= {}, i: number = 0;
    while (i < arr.length) {
        if (hashMap[arr[i]] !== undefined){
            pairs.push([arr[i], product/arr[i]]);
        } else {
            hashMap[product/arr[i]] = arr[i];
        }
        i++;
    }
    return pairs;
}

console.log(getProductPairs(24, [1, 2, 3, 4, 5, 6, 12, 8, 9]))