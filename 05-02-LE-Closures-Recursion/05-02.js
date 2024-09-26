// Lexical Environment
// A lexical environment in JavaScript is a data structure that stores variables and functions
// defined in the current scope, along with references to all outer scopes.

// function/class, if/else, loops, try/catch/finally, switch, anonymous code => create the LE

// let globalScope = {
//     outerScope: null,
//     f: "Function",
//     a: 10,
// };
//
// let a = 10;
// function f() {
//     let fScope = {
//         outerScope: globalScope,
//     };
//     console.log(a);
//     // d = 100; инициализация не объявленной переменной приводит к созданию переменной на глобальном уровне
// }
//
// f();
////////////////////////////////////////////////

// let globalScope = {
//     outerScope: null,
//     f: "Function",
//     a: 10,
// };
//
// let a = 10;
// function f() {
//     let fScope = {
//         outerScope: globalScope,
//         i: 100, // undefined, 50, 100
//         inner: "Function",
//     };
//     console.log("a: ", a);
//     var i = 50;
//     function inner() {
//         let innerScope = {
//             outerScope: fScope,
//         };
//         i += 50;
//         console.log("i: ", i);
//         console.log("a: ", a);
//     }
// }
//
// f();
///////////////////////////////////////////////


// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9

// function sum(arg) {
//     return function (arg2) {
//         return arg + arg2;
//     }
// }
//
// console.log(sum(3)(6)); // => 9
///////////////////////////////////////////////

// Recursion

// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050

// function sumTo(num) {
//     let result = 0;
//     for (let i = 1; i <= num; i++) {
//         result += i;
//     }
//     return result;
// }

// function sumTo(num) {
//     if (num <= 0) return num;
//     return num + sumTo(num - 1);
// }
//
// console.log(sumTo(3));
////////////////////////////////////////////


function superSum(num) {
    if (num <= 0) return 0;
    if (num === 1) return (num) => num;

    let outerParams = [];

    function inner(...arg) {
        outerParams = [...outerParams, ...arg];
        if (outerParams.length === num) {
            outerParams.length = num;
            return outerParams.reduce((acc, el) => acc + el)
        } else {
            return inner;
        }
    }
    return inner;
}

console.log(superSum(0));
console.log(superSum(3)(2)(5)(3));
console.log(superSum(3)(2,5,3));
console.log(superSum(3)(2)(5, 3));
console.log(superSum(3)(2, 5)(3));