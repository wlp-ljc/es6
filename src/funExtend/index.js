// function log(x, y) {
//   y = y || 'World';
//   console.log(x, y);
// }

// log('Hello') // Hello World
// log('Hello', 'China') // Hello China
// log('Hello', '') // Hello World

// function log(x, y = 'World') {
//   console.log(x, y);
// }

// log('Hello') // Hello World
// log('Hello', 'China') // Hello China
// log('Hello', '') // Hello

// function Point(x = 0, y = 0) {
//   this.x = x;
//   this.y = y;
// }

// var p = new Point();
// console.log(p)

// function foo(x = 5) {
//   let x = 1; // error
//   const x = 2; // error
// }

// function foo(x, x, y = 1) {
//   // ...
// }
// // SyntaxError: Duplicate parameter name not allowed in this context

// let x = 99;
// function foo(p = x + 1) {
//   console.log(p);
// }

// console.log(foo()) // 100

// x = 100;
// console.log(foo()) // 101

// 与解构赋值默认值结合使用
// function foo({x, y = 5}) {
//   console.log(x, y);
// }

// foo({}) // undefined, 5
// foo({x: 1}) // 1, 5
// foo({x: 1, y: 2}) // 1, 2
// foo() // TypeError: Cannot read property 'x' of undefined

// function fetch(url, { body = '', method = 'GET', headers = {} }) {
//   console.log(method);
// }

// fetch('http://example.com', {})
// "GET"

// fetch('http://example.com')
// 报错

// function fetch(url, { method = 'GET' } = {}) {
//   console.log(method);
// }

// fetch('http://example.com')
// // "GET"

// // 写法一
// function m1({x = 0, y = 0} = {}) {
//   return [x, y];
// }

// // 写法二
// function m2({x, y} = { x: 0, y: 0 }) {
//   return [x, y];
// }

// // 函数没有参数的情况
// console.log(m1()) // [0, 0]
// console.log(m2()) // [0, 0]

// // x和y都有值的情况
// console.log(m1({x: 3, y: 8}))// [3, 8]
// console.log(m2({x: 3, y: 8})) // [3, 8]

// // x有值，y无值的情况
// console.log(m1({x: 3})) // [3, 0]
// console.log(m2({x: 3})) // [3, undefined]

// // x和y都无值的情况
// console.log(m1({})) // [0, 0];
// console.log(m2({})) // [undefined, undefined]

// console.log(m1({z: 3})) // [0, 0]
// console.log(m2({z: 3})) // [undefined, undefined]

// 例一
// function f(x = 1, y) {
//   return [x, y];
// }

// console.log(f()) // [1, undefined]
// console.log(f(2)) // [2, undefined])
// // console.log(f(, 1)) // 报错
// console.log(f(undefined, 1)) // [1, 1]

// // 例二
// function f1(x, y = 5, z) {
//   return [x, y, z];
// }

// console.log(f1()) // [undefined, 5, undefined]
// console.log(f1(1)) // [1, 5, undefined]
// // console.log(f(1, ,2)) // 报错
// console.log(f1(1, undefined, 2)) // [1, 5, 2]

// let foo = 'outer';

// function bar(func = x => foo) {
//   let foo = 'inner';
//   console.log(func()); // outer
// }

// bar();

// var f1 = 'outer';

// // 参数形成单独的封闭作用域
// function bar2(func = x => f1) {
//   var f1 = 'inner';
//   console.log(func()); // outer
// }

// bar2();

// rest参数
// function add(...values) {
//   let sum = 0;

//   for (var val of values) {
//     sum += val;
//   }

//   return sum;
// }

// console.log(add(2, 5, 3)) // 10

// const sortNumbers = (...numbers) => numbers.sort();

// console.log(sortNumbers(2, 4, 3, 7, 6, 5))

// function push(array, ...items) {
//   items.forEach(function(item) {
//     array.push(item);
//     console.log(item);
//   });
// }

// var a = [];
// push(a, 1, 2, 3)
// console.log(a)

// function f(a, ...b, c) {
//   // ...
// }

// console.log((function(a) {}).length)  // 1
// console.log((function(...a) {}).length)  // 0
// console.log((function(a, ...b) {}).length)  // 1

// console.log(...[1, 2, 3])
// // 1 2 3

// console.log(1, ...[2, 3, 4], 5)
// // 1 2 3 4 5

// // [...document.querySelectorAll('div')]
// // [<div>, <div>, <div>]

// function push(array, ...items) {
//   array.push(...items);
// }

// function add(x, y) {
//   return x + y;
// }

// var numbers = [4, 38];
// console.log(add(...numbers)) // 42

// function f(v, w, x, y, z) { }
// var args = [0, 1];
// f(-1, ...args, 2, ...[3]);

// ES5的写法
// function f(x, y, z) {
//   // ...
// }
// var args = [0, 1, 2];
// f.apply(null, args);

// // ES6的写法
// function f(x, y, z) {
//   // ...
// }
// var args = [0, 1, 2];
// f(...args);

// ES5的写法
// console.log(Math.max.apply(null, [14, 3, 77]));

// // ES6的写法
// console.log(Math.max(...[14, 3, 77]));

// // 等同于
// console.log(Math.max(14, 3, 77));

// // ES5的写法
// var arr1 = [0, 1, 2];
// var arr2 = [3, 4, 5];
// Array.prototype.push.apply(arr1, arr2);

// // ES6的写法
// var arr1 = [0, 1, 2];
// var arr2 = [3, 4, 5];
// arr1.push(...arr2);
// console.log(arr1);

// console.log(new Date(...[2020, 1, 1]));

// 扩展运算符的应用
// var more = [3, 4, 9];
// // ES5
// console.log([1, 2].concat(more));
// // ES6
// console.log([1, 2, ...more])

// var arr1 = ['a', 'b'];
// var arr2 = ['c'];
// var arr3 = ['d', 'e'];

// // ES5的合并数组
// var arr4 = arr1.concat(arr2, arr3);

// // ES6的合并数组
// var arr5 = [...arr1, ...arr2, ...arr3]

// console.log('es5',arr4);
// console.log('es6', arr5);

// 与解构赋值结合
// var list = [1, 2, 3, '24', true];
// // ES5
// let a = list[0], rest = list.slice(1)
// // ES6
// let [a1, ...rest1] = list

// console.log('es5 a', a, ' rest ', rest);
// console.log('es6 a', a1, ' rest ', rest1);

// const [first, ...rest] = [1, 2, 3, 4, 5];
// console.log(first) // 1
// console.log(rest)  // [2, 3, 4, 5]

// const [first1, ...rest1] = [];
// console.log(first1) // undefined
// console.log(rest1)  // []:

// const [first2, ...rest2] = ["foo"];
// console.log(first2)  // "foo"
// console.log(rest2)   // []

// let map = new Map([
//   [1, 'one'],
//   [2, 'two'],
//   [3, 'three'],
// ]);

// let arr = [...map.keys()]; // [1, 2, 3]
// let val = [...map.values()]; 
// console.log(arr)
// console.log(val)

// var go = function*(){
//   yield 1;
//   yield 2;
//   yield 3;
// };

// var goArr = [...go()] // [1, 2, 3]

// console.log(goArr)

// 箭头函数
/*
	a => b => a+b
	function(a) {
		return function(b) {
			return a + b
		}
	}
*/
// var f = v => v+2;
// console.log(f(23))

// var f2 = (n1=23, n2=23) => (n1 + n2 + 34)
// console.log(f2(23))
// console.log(f2(23,45))

// var f3 = (n1, n2) => {
// 	n1 = n1 * n1
// 	return n1 + n2
// }

// console.log(f3(2, 6))


// var f4 = id => ({ id: id, name: "Temp" });

// console.log(f4(234))

const f5 = ({ first, last }) => first + ' ' + last;

console.log(f5({first: 22, last: 23}))

console.log(f5('234'))

