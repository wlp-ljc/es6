// set 集合
// const s = new Set()
// let arr = [2, 3, 5, 7, 4, 5, 6]
// arr.map(x => s.add(x))
// for (let i of s) {
// 	console.log(i)
// } 

// var setitem = new Set([1, 1, 2, 2, 3, 3, 5, 6, 7, 8, 11])
// console.log([...setitem])

// var item1 = new Set([1, 2, 3, 4, 6, 7])
// console.log(item1.size)

// var array = [1, 3, 4, 5, 6, 7, 1, 3, 4, 5 ]
// console.log([...new Set(array)])

/*
	向Set加入值的时候，不会发生类型转换，所以5和"5"是两个不同的值。
	Set内部判断两个值是否不同，使用的算法叫做“Same-value equality”，
	它类似于精确相等运算符（===），主要的区别是NaN等于自身，而精确相等运算符认为NaN不等于自身。
*/

/*两个NaN是相等的*/
// let set = new Set()
// let a = NaN
// let b = NaN

// set.add(a)
// set.add(b)

// console.log(set)

// set.add({})
// console.log(set.size)
// console.log(set)

// set.add({})
// console.log(set.size)
// console.log(set)

// let s =  new Set()
// s.add(1).add(2).add(2);
// console.log(s)
// 注意2被加入了两次

// console.log(s.has(1)) // true
// console.log(s.has(2)) // true
// console.log(s.has(3)) // false

// console.log(s.delete(2))
// console.log(s.has(2)) // false

// var proper = {
// 	"width": 1,
// 	"height": 1
// }

// if(proper['width']) {
// 	console.log('object success')
// }

// var properSet = new Set()

// properSet.add("width")
// properSet.add("height")

// if(properSet.has("width")) {
// 	console.log('set success')
// }

// 去除重复数组元素
// var items = new Set([1, 1, 2, 3, 4, 5, 5])
// var array = Array.from(items)
// console.log(array)

// function dedupe(array) {
// 	return Array.from(new Set(array))
// }
// console.log(dedupe([1, 1, 1, 2, 3, 3, 4, 5]))

// 遍历操作
// let set = new Set(['red', 'green', 'blue'])

// for(let item of set.keys()) {
// 	console.log(item)
// }

// for(let item of set.values()) {
// 	console.log(item)
// }

// for(let item of set.entries()) {
// 	console.log(item)
// }

// 迭代器实际上使用values
// console.log(Set.prototype[Symbol.iterator] === Set.prototype.values)
// 修改迭代器
// Set.prototype[Symbol.iterator] = Set.prototype.entries
// for(let item of set) {
// 	console.log(item)
// }

/*
	扩展运算符(...) 内部使用for of循环
*/

// let unique = [...set]
// console.log(unique)

// let arr = [3, 4, 2, 2, 2, 3, 5]
// unique = [...new Set(arr)]
// console.log(unique)

/*
	map filter 方法可以应用于set
*/

// let arr = [1, 2, 3, 4]
// arr = new Set([...arr].map( x => x * 2))
// console.log(arr)
// arr = new Set([...arr].filter( x => x % 4 == 0))
// console.log(arr)

/*
	set 实现集合并集、交集和差集
*/

// let a = new Set([1, 2, 3, 4])
// let b = new Set([3, 4, 5, 6])

// let union = new Set([...a, ...b])
// let intersect = new Set([...a].filter(x => b.has(x)))
// var difference = new Set([...a].filter(x => !b.has(x)))

// console.log(union)
// console.log(intersect)
// console.log(difference)

/*
	set foreach 函数对每个成员执行某种操作
*/

// let set = new Set([1, 2, 3])
// set.forEach((value, key, set) => console.log(value, key, set))

/*
	运行中改变set结构
*/

// let set = new Set([1, 2, 3])
// set = new Set([...set].map(val => val*2))

// let setArray = new Set([2, 3, 4])
// setArray = new Set(Array.from(set, val => val * 2))

// console.log(set)
// console.log(setArray)

/*
	weakset
	1. weakset的成员只能是对象
	2. 弱引用，垃圾回收自动回收对象所占内存
*/
 
var ws = new WeakSet()  // 接收数组或类似数组的对象作为参数

// ws.add(1) 			// Uncaught TypeError: Invalid value used in weak set

// ws.add(Symbol()) 	// Uncaught TypeError: Invalid value used in weak set

// ws = new WeakSet([[1, 2], [3, 4]])
// console.log(ws)

// var obj = {}
// var foo = {}

// ws.add(window)
// ws.add(obj)

// console.log(ws)
// console.log(ws.has(window))
// console.log(ws.has(foo))

// ws.delete(window)
// console.log(ws.has(window))

// console.log(ws.size)
// console.log(ws.forEach)

// const foos = new WeakSet()
// class Foo {
// 	constructor () {
// 		foos.add(this)
// 	}
// 	method () {
// 		if (!foos.has(this)) {
// 			throw new TypeError('Foo.prototype.method 只能在Foo 的实例上调用')
// 		}
// 	}
// }

/*
	Map 
	键值对
*/

// var m = new Map();
// var o = {p: 'Hello World'};

// m.set(o, 'content')
// console.log(m.get(o)) 

// console.log(m.has(o))
// console.log(m.delete(o)) 
// console.log(m.has(o))

// var map = new Map([
//   ['name', '张三'],
//   ['title', 'Author']
// ]);

// console.log(map.size) // 2
// console.log(map.has('name')) // true
// console.log(map.get('name')) // "张三"
// console.log(map.has('title')) // true
// console.log(map.get('title')) // "Author"

// var items = [
//   ['name', '张三'],
//   ['title', 'Author']
// ];
// var map = new Map();
// items.forEach(([key, value]) => map.set(key, value));
// console.log(map)

/*
	同一个键多次设置
	key值 实际上是内存地址
*/

// let  map = new Map()
// map.set(1, 'aaa').set(1, 'bbb')
// console.log(map)
// console.log(map.get('fjaslas'))

// var mp = new Map()
// map.set(['a'], 555)
// console.log(map.get(['a']))

/*
	键值 
*/
// var map = new Map()

// var k1 = ['a']
// var k2 = ['b']

// map.set(k1, 111).set(k2, 222)

// console.log(map.get(k1))
// console.log(map.get(k2))

/*
	内存地址为键值 
	0 和 -0 NaN 和 NaN 相同
*/

// let map = new Map()
// map.set(NaN, 123)
// map.set(-0, 123)

// console.log(map.get(NaN))
// console.log(map.get(-0))

/*
	实例 属性和操作方法
*/
// size and set
// let map = new Map()

// var hello = function(){
// 	console.log('hello')
// }

// map.set('foo',true)
//    .set('bar', false)
//    .set('edition', 2)
//    .set(262, 'standard')
//    .set(undefined, "nash")
//    .set(hello, "Hello ES6")

// console.log(map.size)

// // get
// console.log(map.get(undefined))
// console.log(map.get(hello))

// /// has
// console.log(map.has("edition"))
// console.log(map.has(hello))
// console.log(map.has('foo'))
// console.log(map.has('4242'))

// // delete
// console.log(map.has(262))
// console.log(map.delete(262))
// console.log(map.has(262))
// console.log(map.delete(262))

// // clear
// console.log(map.size)
// console.log(map.clear())
// console.log(map.size)

/*
	遍历方法
	keys
	values
	entries
	forEach
*/

// let map = new Map([
// 	['F', 'no'],
// 	['T', 'yes']
// ])

// for(let key of  map.keys()) {
// 	console.log(key)
// }
 
// for(let value of  map.values()) {
// 	console.log(value)
// }

// for(let entries of  map.entries()) {
// 	console.log(entries)
// }

// for(let [key, value] of  map.entries()) {
// 	console.log(key, value)
// }

// console.log(map[Symbol.iterator] === map.entries)

/*
	map to array
*/

// let m2= new Map([
// 	[1, 'one'],
// 	[2, 'two'],
// 	[3, 'three']
// ])

// console.log([...m2.keys()])
// console.log([...m2.values()])
// console.log([...m2.entries()])
// console.log([...m2])

/*
	map
	fliter
*/

// let map0 = new Map().set(1, 'a').set(2, 'b').set(3, 'c')

// let m2 = [...map0]
// console.log(m2.fliter(([k, v]) => k < 3))

// console.log([...map0])
// console.log([...map0].fliter(([k, v]) => k < 3))

// let map1 = new Map(
// 	[...map0].fliter(([k, v]) => k < 3)
// )
// let map2 = new Map(
// 	[...map0].map( ([k, v]) => ([k * 2, '_' + v]))
// )

// console.log(map1)
// console.log(map2)
	
// let map = new Map().set(1, 'one').set(2, 'two').set(3, 'three')			
// map.forEach(function(key, value, map) {
// 	console.log('key: %s, Value: %s', key, value)
// })

/*
	与其他结构的转换
*/
// let map = new Map().set(true, 7).set({foo:3}, ['abc'])

// console.log([...map].map( ([k, v]) => ([k*2, '-'+v])))
// console.log([...map].filter( ([k, v]) => ( k == true)))

// let arrayToMap = new Map([
// 	[true, 7],
// 	[{ foo: 3 }, ['abc']]
// ])

// console.log(arrayToMap)

// function strMapToObj(strMap) {
// 	let obj = Object.create(null);
// 	for(let [k, v] of strMap) {
// 		obj[k] = v
// 	}
// 	return obj
// }
// let mapToObject = new Map().set('yes', true).set('no', false)

// let obj = strMapToObj(mapToObject)
// console.log(obj)

// function objToStrMap(obj) {
// 	let strMap = new Map()
// 	for(let k of Object.keys(obj)) {
// 		strMap.set(k, obj[k])
// 	}
// 	return strMap
// }

// let objToMap = objToStrMap({yes: true, no: false})
// console.log(objToMap)

// // map 转 JSON
// function strMapToJson(strMap) {
// 	return JSON.stringify(strMapToObj(strMap))
// }

// let myMap = new Map().set('yes', true).set('no',false)
// console.log(strMapToJson(myMap))

// function strMapToArrayJson(map) {
// 	return JSON.stringify([...map])
// }

// let arrMap = new Map().set(true, 7).set({foo:3}, ['abc'])
// console.log(strMapToArrayJson(arrMap))

// // json to map
// function jsonToStrMap(jsonStr) {
// 	return objToStrMap(JSON.parse(jsonStr))
// }
// console.log(jsonToStrMap("{yes:true, no:false}"))

/*
	WeakMap
	无遍历方法
	无法清空 size clear无法使用
*/

// var weakmap = new WeakMap()

// // weakmap.set(1, 2)
// // weakmap.set(Symbol(), 2)

// var wm = new WeakMap()

// console.log(wm.size)
// console.log(wm.forEach)

// let myElement = document.getElementById('logo')
// let myWeakMap = new WeakMap()

// myWeakMap.set(myElement, { timesClicked: 0})
// myElement.addEventListener('click', function(){
// 	let logoData = myWeakMap.get(myElement)
// 	logoData.timesClicked++
// 	console.log(logoData)
// 	myWeakMap.set(myWeakMap, logoData)
// }, false)

// let _counter = new WeakMap()
// let _action = new WeakMap()

// class CountDown {
// 	constructor(counter, action) {
// 		_counter.set(this, counter)
// 		_action.set(this, action)
// 	}
// 	dec() {
// 		let counter = _counter.get(this)
// 		if(counter < 1) return

// 		counter--
// 		_counter.set(this, counter)
// 		if(counter === 0) {
// 			_action.get(this)();
// 		}
// 	}
// }

// let c = new CountDown(2, () => console.log('DONE'))

// c.dec()
// c.dec()
// c.dec()

let setmap = 'lijincai set weakset map weakmap learning'
export default setmap