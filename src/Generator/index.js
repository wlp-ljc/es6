/*
	genrator 参数
*/
// function* helloworld() {
// 	yield 'hello';
// 	yield 'world';
// 	return 'ending'
// }

// var hw = helloworld()

// console.log(hw.next())
// console.log(hw.next())
// console.log(hw.next())
// console.log(hw.next())

// var a = [1, [[2, 3], 4], [5, 6]]
// var flat = function* (a) {
// 	a.forEach(function(item){
// 		if(typeof item != 'number') {
// 			yield* flat(item)
// 		} else {
// 			yield item
// 		}
// 	})
// }

// var flat = function* (a) {
// 	var len = a.length
// 	for(var i = 0; i < len; i++) {
// 		var item = a[i]
// 		if(typeof item !== 'number') {
// 			yield* flat(item)
// 		} else {
// 			yield item
// 		}
// 	}
// }

// for(var f of flat(a)) {
// 	console.log(f)
// }

// console.log('hello' + (yield))

/*
	next方法的参数
*/

// function* f() {
// 	for(var i = 0; true; i++) {
// 		var reset = yield i;
// 		if(reset) {
// 			i = -1
// 		}
// 	}
// }

// var g = f()
// console.log(g.next())
// console.log(g.next())
// console.log(g.next(true))

// function* foo(x) {
// 	var y = 2 * (yield(x + 1))
// 	var z = yield(y/3)
// 	return (x + y + z)
// }

// var a = foo(5)

// console.log(a.next())
// console.log(a.next())
// console.log(a.next())

// var b = foo(5)
// console.log(b.next())
// console.log(b.next(12))
// console.log(b.next(13))

// function warpper(generatorFunction) {
// 	return function(...args) {
// 		let generatorObject = generatorFunction(...args)
// 		generatorObject.next()
// 		return generatorObject
// 	}
// }

// const warpped = warpper(function* () {
// 	console.log(`First input: ${yield}`)
// })

// console.log(warpped().next('hello world'))


// function* dataConsumer() {
// 	console.log('Started')
// 	console.log(`1. ${yield}`)
// 	console.log(`2. ${yield}`)
// 	return 'result'
// }

// var gen = dataConsumer()
// gen.next()
// gen.next('1')
// gen.next('2')
// gen.next('3')

/*
	for of generator
*/
// function* foo() {
// 	yield 1;
// 	yield 2;
// 	yield 3;
// 	yield 4;
// 	yield 5;
// 	yield 6;
// 	yield 7;
// 	return 8;
// }

// for(var v of foo()) {
// 	console.log(v)
// }

// function* fiobonacci() {
// 	let [prev, curr] = [0, 1]
// 	for(;;) {
// 		[prev, curr] = [curr, prev + curr]
// 		yield curr
// 	}
// }

// for(let n of fiobonacci()) {
// 	if(n > 1000) break;
// 	console.log(n)
// }


// function* numbers() {
// 	yield 1 
// 	yield 2
// 	return 3
// 	yield 4
// }

// console.log([...numbers()])
// console.log(Array.from(numbers()))
// let [x, y] = numbers()
// console.log(x, y)

// for(let n of numbers()) {
// 	console.log(n)
// }

/*
	objetc 添加 for of
*/
// function* objectEntries(obj) {
// 	let keys = Reflect.ownKeys(obj);

// 	for(let propKey of keys) {
// 		yield [propKey, obj[propKey]]
// 	}
// }

// let jane = {
// 	first: 'jane',
// 	last: 'one'
// }

// for(let [key, value] of objectEntries(jane)) {
// 	console.log(key + ' : ' + value)
// }


// function* objectEntries2() {
// 	let keys = Object.keys(this);

// 	for(let propKey of keys) {
// 		yield [propKey, this[propKey]]
// 	}
// }

// jane[Symbol.iterator] = objectEntries2
// for(let [key, value] of jane) {
// 	console.log(key + ' : ' + value)
// }

/*
	Genrator throw
*/

// var g = function* () {
// 	while(true) {
// 		try {
// 			yield
// 		} catch(e) {
// 			if( e != 'a' ) throw e;
// 			console.log('内部捕获', e);
// 		}
// 	}
// }

// var i = g()
// i.next()

// try {
// 	i.throw('a')
// 	i.throw('b')
// } catch(e) {
// 	console.log('外部捕获', e);
// }

// try {
// 	throw new Error('a')
// 	throw new Error('b')
// } catch(e) {
// 	console.log('外部捕获', e);
// }

// var g = function* () {
// 	while(true){
// 		yield
// 		console.log('内部捕获', e)
// 	}
// }

// var i = g()
// i.next()
 
// try {
// 	i.throw('a')
// 	i.throw('b')
// } catch(e) {
// 	console.log('外部捕获', e);
// }

// function* g() {
// 	try {
// 		var a = yield foo('a')
// 		var b = yield foo('b')
// 		var c = yield foo('c')
// 	} catch(e) {
// 		console.log(e)
// 	}
// 	console.log(a, b, c)
// }

// function* foo() {
// 	var x = yield 3;
// 	var y = x.toUpperCase();
// 	yield y;
// }

// var it = foo()

// console.log(it.next())

// try {
// 	it.next(42)
// } catch(e) {
// 	console.log(e)
// }

// function* g() {
// 	yield 1;
// 	console.log('throwing an exception')
// 	throw new Error('generator broke')
// 	yield 2;
// 	yield 3;
// }

// function log(generator) {
// 	var v;
// 	console.log('starting generator')
// 	try {
// 		v = generator.next();
// 		console.log('第一次运行next方法', v)
// 	} catch(err) {
// 		console.log('捕获错误', v)
// 	}
// 	try {
// 		v = generator.next();
// 		console.log('第二次运行next方法', v)
// 	} catch(err) {
// 		console.log('捕获错误', v)
// 	}
// 	try {
// 		v = generator.next();
// 		console.log('第三次运行next方法', v)
// 	} catch(err) {
// 		console.log('捕获错误', v)
// 	}
// 	console.log('caller done')
// }
// log(g())

/*
	generator return 方法
*/

// function* gen() {
// 	yield 1;
// 	yield 2;
// 	yield 3;
// }

// var g = gen()

// console.log(g.next())
// console.log(g.return('foo'))
// console.log(g.return())
// console.log(g.next())

// function* numbers() {
// 	yield 1;
// 	try {
// 		yield 2;
// 		yield 3;
// 	} finally {
// 		yield 4;
// 		yield 5;
// 	}
// 	yield 6;
// }

// var g = numbers()

/* 执行finally代码段后，执行return*/
// console.log(g.next())
// console.log(g.next())
// console.log(g.return(7))
// console.log(g.next())
// console.log(g.next())

/*
	yield* 语句
*/

// function* foo() {
// 	yield 'a';
// 	yield 'b';
// }

// function* bar() {
// 	yield 'x';
// 	// foo();	//只会输出 x、y
// 	yield* foo();
// 	yield 'y';
// }

// for(let v of bar()) {
// 	console.log(v)
// }

// function* inner() {
// 	yield 'hello';
// }

// function* outer1() {
// 	yield 'open';
// 	yield inner();
// 	yield 'close';
// }

// var gen = outer1()

// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())

// function* outer2() {
// 	yield 'open';
// 	yield* inner();
// 	yield 'close';
// }

// gen = outer2()

// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())

// let delegatIterator = (function* (){
// 	yield 'hello';
// 	yield 'Bye';
// }())

// let delegatingIterator = (function* (){
// 	yield 'Greetings';
// 	yield* delegatIterator;
// 	yield 'Ok, bye'
// }())

// for(let v of delegatingIterator) {
// 	console.log(v)
// }


// function* concat(iter1, iter2) {
// 	yield* iter1;
// 	yield* iter2;
// }

// function* concat2(iter1, iter2) {
// 	for(var value of iter1) {
// 		yield value
// 	}
// 	for(var value of iter2) {
// 		yield value
// 	}
// }

// function* gen() {
// 	yield* ['a', 'b', 'c']
// }

// console.log(gen().next())

// function* gen2() {
// 	yield ['a', 'b', 'c']
// }

// console.log(gen2().next())

// let read = (function* (){
// 	yield 'hello';
// 	yield* 'hello';
// }())

// console.log(read.next())
// console.log(read.next())

// function* foo() {
// 	yield 2;
// 	yield 3;
// 	return "foo";
// }

// function* bar() {
// 	yield 1;
// 	var v = yield* foo();
// 	console.log('v:' + v)
// 	yield 4;
// }

// var it = bar()
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())

// function* genFuncWithReturn() {
// 	yield 'a';
// 	yield 'b';
// 	return 'The result';
// }

// function* logReturned(genObj) {
// 	let result = yield* genObj;
// 	console.log(result)
// }

// console.log([...logReturned(genFuncWithReturn())])

// function* iterTree(tree) {
// 	if(Array.isArray(tree)) {
// 		for(let i = 0, len = tree.length; i < len; i++) {
// 			yield* iterTree(tree[i])
// 		}
// 	} else {
// 		yield tree
// 	}
// }

// const tree = ['a', ['b', 'c'], ['d', 'e']]

// for(let x of iterTree(tree)) {
// 	console.log(x)
// }

/*
	作为对象属性的generator函数
*/

// let obj = {
// 	* myGenerator() {
// 		yield 1;
// 		yield 2;
// 	}
// }

// let obj2 = {
// 	myGenerator: function* () {
// 		yield 3;
// 		yield 4;
// 	}
// } 

/*
	Generator 函数的 this
*/

// function* g() {

// }

// g.prototype.hello = function() {
// 	return 'hi';
// }

// let obj = g()

// console.log(obj instanceof g)
// console.log(obj.hello())

// function* g() {
// 	this.a = 11
// }

// let obj = g()
// console.log(obj.a)

// function* F() {
// 	yield this.x = 2
// 	yield this.y = 3
// }

// console.log('next' in (new F()))

/*
	Generator 函数推导
*/

// let generator = function* () {
// 	for(let i = 0 ; i < 6;i++) {
// 		yield i;
// 	}
// };

// let squared = (for  ( n of generator() ) n * n );

// console.log(squared)

/*
	Generator 与 状态机
*/

// var ticking = true
// var clock = function() {
// 	if(ticking) {
// 		console.log('Tick!')
// 	} else {
// 		console.log('Tock!')
// 	}
// 	ticking = !ticking
// }

// console.log(clock())
// console.log(clock())

// var clock = function* (_) {
// 	while(true) {
// 		yield _;
// 		console.log('Tick!')
// 		yield _;
// 		console.log('Tock!')
// 	}
// }
// var next = clock()
// console.log(next.next())
// console.log(next.next())

let generator = "lijincai generator learning"
export default generator
