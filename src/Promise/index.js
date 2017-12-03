// var promise = new Promise(function(resolve, reject){
// 	let flag = true
// 	if(flag) {
// 		resolve('hello world')
// 	} else {
// 		reject('hello bug')
// 	}
// })

// let newPromise = promise.then( (value) => {
// 	console.log(value)
// }, (value) => {
// 	alert(value)
// })

// function timeout (ms) {
// 	return new Promise( (resolve, reject) => {
// 		setTimeout(resolve, ms, 'done', 'helloworld')
// 	})
// }

// timeout(100).then( (value) => {
// 	console.log(value)
// })

// let promise = new Promise( (resolve, reject) => {
// 	console.log('Promise')
// 	resolve()
// })

// promise.then( function() {
// 	console.log('Resolved')
// })

// console.log('HI!')

// function getFoo() {
// 	return new Promise( (resolve, reject) => {
// 		resolve('foo')
// 	})
// }

// var g = function* () {
// 	try {
// 		var foo = yield getFoo()
// 		console.log(foo)
// 	} catch(e) {
// 		console.log(e)
// 	}
// }

// function run(generator) {
// 	var it = generator()

// 	function go(result) {
// 		if(result.done) return result.value;

// 		return result.value.then( (value) => {
// 			return go(it.next(value))
// 		}, (error) => {
// 			return go(it.throw(error))
// 		})
// 	}

// 	go(it.next())
// }

// console.log(run(g))

let promiser = "lijincai promise learning"
export default promiser