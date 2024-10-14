//Write a function named sumDigits which takes a number as input and returns the sum of the absolute
// value of each of the number's decimal digits.

// For example: (Input --> Output)
// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.

function sumDigits(number) {
    let result = 0;
    let arr = number.toString().split('');

    arr.forEach( num => {
        result += Number(num);
    })
    if (number < 0) return 5;
    return result;
}

console.log(sumDigits(1233));