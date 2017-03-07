// 二进制和八进制表示法
// 8进制
// console.log(0b111110111 === 503)
// console.log(0o767 === 503)

// 非严格模式
// (function(){
//   console.log(0o11 === 011);
// })() // true

// // 严格模式
// (function(){
//   'use strict';
//   console.log(0o11 === 011);
// })() // Uncaught SyntaxError: Octal literals are not allowed in strict mode.

// console.log(Number('0b111'))  // 7
// console.log(Number('0o10'))  // 8)

// Number.isFinite()用来检查一个数值是否为有限的（finite）。
// console.log(Number.isFinite(15)); // true
// console.log(Number.isFinite(0.8)); // true
// console.log(Number.isFinite(NaN)); // false
// console.log(Number.isFinite(Infinity)); // false
// console.log(Number.isFinite(-Infinity)); // false
// console.log(Number.isFinite('foo')); // false
// console.log(Number.isFinite('15')); // false
// console.log(Number.isFinite(true)); // false

// console.log(Number.isNaN(NaN)) // true
// console.log(Number.isNaN(15)) // false
// console.log(Number.isNaN('15')) // false
// console.log(Number.isNaN(true)) // false
// console.log(Number.isNaN(9/NaN))// true
// console.log(Number.isNaN('true'/0)) // true
// console.log(Number.isNaN('true'/'true'))// true

// // ES5的写法
// parseInt('12.34') // 12
// parseFloat('123.45#') // 123.45

// // ES6的写法
// console.log(Number.parseInt('12.34')) // 12
// console.log(Number.parseFloat('123.45#')) // 123.45

// console.log(Number.isInteger(25)) // true
// console.log(Number.isInteger(25.0)) // true
// console.log(Number.isInteger(25.1)) // false
// console.log(Number.isInteger("15")) // false
// console.log(Number.isInteger(true)) // false

// console.log(Number.EPSILON)
// console.log(Number.EPSILON.toFixed(20))

// console.log(0.1 + 0.2)
// // 0.30000000000000004

// console.log(0.1 + 0.2 - 0.3)
// // 5.551115123125783e-17

// console.log(5.551115123125783e-17.toFixed(20))
// // '0.00000000000000005551'

// function withinErrorMargin (left, right) {
//   return Math.abs(left - right) < Number.EPSILON;
// }

// console.log(withinErrorMargin(0.1 + 0.2, 0.3))
// // true
// console.log(withinErrorMargin(0.2 + 0.2, 0.3))
// // false

// console.log(Number.MAX_SAFE_INTEGER === Math.pow(2, 53) - 1)
// // true
// console.log(Number.MAX_SAFE_INTEGER === 9007199254740991)
// // true

// console.log(Number.MIN_SAFE_INTEGER === -Number.MAX_SAFE_INTEGER)
// // true
// console.log(Number.MIN_SAFE_INTEGER === -9007199254740991)
// // true

// console.log('Number.MAX_SAFE_INTEGER',Number.MAX_SAFE_INTEGER)
// console.log('Number.MIN_SAFE_INTEGER',Number.MIN_SAFE_INTEGER)

// console.log(Number.isSafeInteger('a')) // false
// console.log(Number.isSafeInteger(null)) // false
// console.log(Number.isSafeInteger(NaN)) // false
// console.log(Number.isSafeInteger(Infinity))// false
// console.log(Number.isSafeInteger(-Infinity))// false

// console.log(Number.isSafeInteger(3)) // true
// console.log(Number.isSafeInteger(1.2)) // false
// console.log(Number.isSafeInteger(9007199254740990))// true
// console.log(Number.isSafeInteger(9007199254740992)) // false

// console.log(Number.isSafeInteger(Number.MIN_SAFE_INTEGER - 1)) // false
// console.log(Number.isSafeInteger(Number.MIN_SAFE_INTEGER)) // true
// console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER) )// true
// console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1) )// false

// function trusty (left, right, result) {
//   if (
//     Number.isSafeInteger(left) &&
//     Number.isSafeInteger(right) &&
//     Number.isSafeInteger(result)
//   ) {
//     return result;
//   }
//   throw new RangeError('Operation cannot be trusted!');
// }

// trusty(9007199254740993, 990, 9007199254740993 - 990)
// // RangeError: Operation cannot be trusted!

// trusty(1, 2, 3)
// // 3

// 去除小数
// console.log(Math.trunc(4.1)) // 4
// console.log(Math.trunc(4.9)) // 4
// console.log(Math.trunc(-4.1)) // -4
// console.log(Math.trunc(-4.9))// -4
// console.log(Math.trunc(-0.1234))// -0

// // Math.sign方法用来判断一个数到底是正数、负数、还是零
// console.log(Math.sign(-5)) // -1
// console.log(Math.sign(5)) // +1
// console.log(Math.sign(0))// +0
// console.log(Math.sign(-0))// -0
// console.log(Math.sign(NaN))// NaN
// console.log(Math.sign('foo')); // NaN
// console.log(Math.sign());      // NaN

// Math.cbrt方法用于计算一个数的立方根。
// console.log(Math.cbrt(-1))// -1
// console.log(Math.cbrt(0)) // 0
// console.log(Math.cbrt(1))  // 1
// console.log(Math.cbrt(2))  // 1.2599210498948734
// console.log(Math.cbrt('8')) // 2
// console.log(Math.cbrt('hello')) // NaN

// Math.clz32(0) // 32
// Math.clz32(1) // 31
// Math.clz32(1000) // 22
// Math.clz32(0b01000000000000000000000000000000) // 1
// Math.clz32(0b00100000000000000000000000000000) // 2

console.log( 2 ** 4)

let a = 2;
console.log(a **= 2);
// 等同于 a = a * a;

let b = 3;
b **= 3;
// 等同于 b = b * b * b;