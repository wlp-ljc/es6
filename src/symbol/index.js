// let s  = Symbol()

// console.log(typeof s)

// document.getElementById('root').innerHTML = (typeof s)
// // 不能使用new 否则会报错

// // var far = Symbol('far')
// // var boo = Symbol('boo')

// // console.log(far)
// // console.log(boo)

// // const obj = {
// // 	toString() {
// // 		return 'abcdefghijklmn'
// // 	}
// // }

// // const sym = Symbol(obj)

// // console.log(sym)

// // // 没有参数的情况
// // var s1 = Symbol();
// // var s2 = Symbol();

// // console.log(s1 === s2) // false

// // // 有参数的情况
// // var s1 = Symbol('foo');
// // var s2 = Symbol('foo');

// // console.log(s1 === s2) // false

// // var syme = Symbol('My symbol');

// // // console.log("your symbol is " + syme)
// // // console.log(`your symbol is ${syme}`)

// // var symf = Symbol('My symbol');

// // console.log(String(syme)) // 'Symbol(My symbol)'
// // console.log(symf.toString()) // 'Symbol(My symbol)'

// var mySymbol = Symbol()

// var a = {}
// a[mySymbol] = 'hello!'

// var b = {
// 	[mySymbol]: 'hello'
// }

// var c = {}

// Object.defineProperty(c, mySymbol, { value: 'hello' })

// console.log('a,', a[mySymbol])
// console.log('b,', b[mySymbol])
// console.log('c,', c[mySymbol])

// // Symbol 定义对象属性时， 不能使用.运算符
// var log = {}
// log.levels = {
//   DEBUG: Symbol('debug'),
//   INFO: Symbol('info'),
//   WARN: Symbol('warn')
// };
// console.log(log.levels.DEBUG, 'debug message');
// console.log(log.levels.INFO, 'info message');

// const COLOR_RED    = Symbol();
// const COLOR_GREEN  = Symbol();

// function getComplement(color) {
//   switch (color) {
//     case COLOR_RED:
//       return 'COLOR_GREEN';
//     case COLOR_GREEN:
//       return 'COLOR_RED';
//     default:
//       throw new Error('Undefined color');
//     }
// }

// console.log(getComplement(COLOR_GREEN))

// const TRIANGLE = 'Triangle'

// function  getArea(shape, options) {
// 	var area = 0
// 	switch (shape) {
// 		case TRIANGLE:
// 			area = 0.5 * options.width * options.height
// 			break
// 		default:
// 			return 0
// 	}
// 	return area
// }

// console.log(getArea(TRIANGLE, { width: 100, height: 200 }))


// 	Symbol 作为属性名，该属性不会出现在for...in、for...of循环中，
// 	也不会被Object.keys()、Object.getOwnPropertyNames()、JSON.stringify()返回。
// 	但是，它也不是私有属性，有一个Object.getOwnPropertySymbols方法，
// 	可以获取指定对象的所有 Symbol 属性名。


// var obj = {};
// var a = Symbol('a');
// var b = Symbol('b');

// obj[a] = 'Hello';
// obj[b] = 'World';


// var objectSymbols = Object.getOwnPropertySymbols(obj);

// console.log(objectSymbols)
// // [Symbol(a), Symbol(b)]


// var obj = {};

// var foo = Symbol("foo");

// Object.defineProperty(obj, foo, {
//   value: "foobar",
// });

// for (var i in obj) {
//   console.log(i); // 无输出
// }

// Object.getOwnPropertyNames(obj)
// // []

// Object.getOwnPropertySymbols(obj)
// [Symbol(foo)]

// let obj = {
//   [Symbol('my_key')]: 1,
//   enum: 2,
//   nonEnum: 3
// };

// console.log(Reflect.ownKeys(obj))

// var size = Symbol('size');

// class Collection {
//   constructor() {
//     this[size] = 0;
//   }

//   add(item) {
//     this[this[size]] = item;
//     this[size]++;
//   }

//   static sizeOf(instance) {
//     return instance[size];
//   }
// }

// var x = new Collection();
// Collection.sizeOf(x) // 0

// x.add('foo');
// Collection.sizeOf(x) // 1

// console.log(Object.keys(x)) // ['0']
// console.log(Object.getOwnPropertyNames(x)) // ['0']
// console.log(Object.getOwnPropertySymbols(x)) // [Symbol(size)]

// var s1 = Symbol.for('foo')
// var s2 = Symbol.for('foo')

// console.log(s1 === s2)


// 单例模式
// import a from './singleton'
// console.log(a.foo)

import a from './singleton'
global[Symbol.for('foo')] = 123
console.log(a)

// 缺点 每次执行这个脚本 得到的结果不一样


