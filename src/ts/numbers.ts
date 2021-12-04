
export const isASquare = (integer: number) => {
    return Math.sqrt(integer)%1===0
}

export const isAPrimeNumber = (integer: number) => {
    let divisor: number = 2;
    while (integer > divisor) {
        if (integer%divisor===0) {
            break;
        } else if (divisor > 2){
            divisor+=2;
        } else if (divisor > 3) {
            divisor+=3;
        } else {
            divisor++;
        }
    }
    return divisor===integer;
}

export const getPrimeFactors = (integer: number) => {
    let pFactors = [];
    let isprime: boolean;
    let divisor = 2;
    while (divisor < integer) {
        if (integer%divisor===0) {
            if (isAPrimeNumber(divisor)){
                pFactors.push(divisor);
            }
        }
            divisor++;
    }
    return pFactors;
}

console.log(getPrimeFactors(210*11))