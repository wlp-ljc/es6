import fetch from 'node-fetch'
// import fs from 'fs'
import thunkify from 'thunkify'

/*
	异步处理
*/
// function* gen() {
// 	var url = 'https://api.github.com/users/github'
// 	var result = yield fetch(url)
// 	console.log(result.bio)
// }

// var g = gen()
// var result = g.next()

// result.value.then( (data) =>{
// 	return data.json()
// }).then( (data) => {
// 	g.next(data)
// })

/*
	Thunk函数
*/

// let x = 1
// function f(m) {
// 	return m * 2
// }

// console.log(f(x+5))

// var thunk = function(x) {
// 	return x + 5
// }

// function ft(thunk) {
// 	return thunk() * 2
// }

// console.log(ft(thunk)(x))

// var Thunk = function(fn) {
// 	return function() {
// 		var args = Array.prototype.slice.call(arguments)
// 		return function(callback) {
// 			args.push(callback)
// 			return fn.call(this, args)
// 		}
// 	}
// }

// function f(a, b, callback) {
// 	var sum = a + b
// 	callback(sum)
// 	callback(sum)
// }

// var ft = thunkify(f)
// var print = console.log.bind(console.log)
// ft(1, 2)(print)

/*
	Generator函数的流程管理
*/

