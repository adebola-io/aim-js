"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrimeFactors = exports.isAPrimeNumber = exports.isASquare = void 0;
var isASquare = function (integer) {
    return Math.sqrt(integer) % 1 === 0;
};
exports.isASquare = isASquare;
var isAPrimeNumber = function (integer) {
    var divisor = 2;
    while (integer > divisor) {
        if (integer % divisor === 0) {
            break;
        }
        else if (divisor > 2) {
            divisor += 2;
        }
        else if (divisor > 3) {
            divisor += 3;
        }
        else {
            divisor++;
        }
    }
    return divisor === integer;
};
exports.isAPrimeNumber = isAPrimeNumber;
var getPrimeFactors = function (integer) {
    var pFactors = [];
    var isprime;
    var divisor = 2;
    while (divisor < integer) {
        if (integer % divisor === 0) {
            if (exports.isAPrimeNumber(divisor)) {
                pFactors.push(divisor);
            }
        }
        divisor++;
    }
    return pFactors;
};
exports.getPrimeFactors = getPrimeFactors;
console.log(exports.getPrimeFactors(210 * 11));
