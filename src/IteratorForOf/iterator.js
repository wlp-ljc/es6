/*
	iterator 迭代器
	迭代访问类数组元素
*/

// var makeIterator = function(array) {
// 	var nextIndex = 0
// 	return {
// 		next: function() {
// 			return nextIndex < array.length ? 
// 				{ value: array[nextIndex++], done: false} :
// 				{ value: undefined, done: true} 
// 		}
// 	}
// }

// var it = makeIterator(['a', 'b'])

// console.log(it.next())
// console.log(it.next())
// console.log(it.next())


/*
	部署了Symbol.iterator 属性
	数组
	类似数组的对象
	set map对象
*/

// let arr = ['li', 'jin', 'cai']

// console.log(Symbol.iterator)

// let iter = arr[Symbol.iterator]()
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())

/*
	未部署iterator接口的东西
	* -> 线性结构 才能使用迭代器
*/

// class RangeInterator {
// 	constructor(start, stop) {
// 		this.value = start
// 		this.stop = stop
// 	}

// 	[Symbol.iterator]() { return this }

// 	next() {
// 		var value = this.value 
// 		if(value < this.stop) {
// 			this.value++
// 			return { done: false, value: value}
// 		} else {
// 			return { done: true, value: undefined }
// 		}
// 	}
// }

// function range(start, stop) {
// 	return new RangeInterator(start, stop)
// }

// for(var value of range(0, 3)) {
// 	console.log(value)
// }

// function ObjIterator(value) {
// 	this.value = value
// 	this.nexnt = null
// }

// ObjIterator.prototype[Symbol.iterator] = function() {
// 	var iterator = {
// 		next: next
// 	}

// 	var current = this

// 	function next() {
// 		if(current) {
// 			var value = current.value
// 			var done = current == null
// 			current = current.next
			
// 		} else {
// 			return {
// 				done: true,
// 			}
// 		}
// 	}

// 	return iterator
// }

// var one = new ObjIterator(1)
// var two  = new ObjIterator(2)
// var three = new ObjIterator(3)

// one.next = two
// two.next = three

// for(var i of one) {
// 	console.log(i)
// }

// let obj = {
// 	data: ['hello', 'world'],
// 	[Symbol.iterator]() {
// 		const self = this
// 		let index = 0
// 		return {
// 			next() {
// 				if(index < self.data.length) {
// 					return {
// 						value: self.data[index],
// 						done: false
// 					}
// 				} else {
// 					return {
// 						value: undefined,
// 						done: true
// 					}
// 				}
// 			}
// 		}
// 	}
// }

// for(var i of obj) {
// 	console.log(i)
// }

/*
	类似数组的对象
*/
// NodeList.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator]

// NodeList.prototype[Symbol.iterator] = [][Symbol.iterator]

// let iteratorArray = {
// 	'0': 1,
// 	'1': 2,
// 	'2': 3,
// 	length: 3,
// 	[Symbol.iterator]: Array.prototype[Symbol.iterator]
// }

// for(var item of iteratorArray) {
// 	console.log(item)
// }

/*
	Symbol.iterarot 非遍历器生成函数，提示报错
*/

// var obj = {}
// obj[Symbol.iterator] = () => 1

/*
	适用于迭代器的场景
	解构赋值
	扩展运算符
	yield
	其他场合
		for ... of
		Array.from()
		Map\Set\WeakSet\WeakMap
		Promise.all
		Promise.race
*/

// let set = new Set().add('a').add('b').add('c')

// let [x, y] = set
// let [first, ...reset] = set

// console.log(x, y)
// console.log(first, reset)

// var str = 'hello'
// console.log([...str])

// let arr = ['b', 'c']
// console.log(['a', ...arr, 'd'])

// let generator = function* () {
// 	yield 1;
// 	yield* [2, 3, 4];
// 	yield 5;
// }

// var iterator = generator()

// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())

/*
	字符串的iterator接口
*/

// var someString = 'hello world'

// console.log(typeof someString[Symbol.iterator])

// var iterator = someString[Symbol.iterator]()
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())

// var str = new String('Hello')

// console.log([...str ])
// str[Symbol.iterator] = function() {
// 	return {
// 		next: function() {
// 			if(this._first) {
// 				this._first = false
// 				return {
// 					value: 'bye',
// 					done: false
// 				}
// 			} else {
// 				return {
// 					value: undefined,
// 					done: true
// 				}
// 			}
// 		},
// 		_first: true
// 	}
// }

// console.log([...str])

/*
	iterator 与 generator 函数
*/

// var myIterable = {};

// myIterable[Symbol.iterator] = function* () {
// 	yield 1,
// 	yield 2,
// 	yield 3
// }

// console.log([...myIterable])

// let obj = {
// 	*[Symbol.iterator]() {
// 		yield 'hello',
// 		yield 'world'
// 	}
// }

// for(let x of obj) {
// 	console.log(x)
// }

/*
	for of
*/

// const arr = ['red', 'green', 'blue']

// let iterator = arr[Symbol.iterator]()

// for(let v of arr) {
// 	console.log(v)
// }

// for(let v of iterator) {
// 	console.log(v)
// }

// arr.forEach(function(element, index) {
// 	console.log(element)
// 	console.log(index)
// })

// let arr = ['a', 'v', 'i', 'd']

// for(let a in arr) {
// 	console.log(a)
// }

// for(let a of arr) {
// 	console.log(a)
// }

// let arr = [3, 5, 7]
// arr.foo = 'hello'

// for(let i in arr) {
// 	console.log(i)
// }

// for(let i of arr) {
// 	console.log(i)
// }

/*
	set 和 map 结构
*/
// var engines = new Set(['Gecko', 'Trident', 'Webkit', 'Webkit'])

// for(var e of engines) {
// 	console.log(e)
// }

// var es6 = new Map()

// es6.set('edition', 6)
// es6.set('committee', "TC39")
// es6.set('standard', 'ECMA-262')

// for(let e of es6) {
// 	console.log(e)
// }

// for(let [name, value] of es6) {
// 	console.log(name + ' : ' + value)
// }


let iterof = "lijincai iterator learning"
export default iterof