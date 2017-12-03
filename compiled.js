// set 集合

// const s = new Set()

// let arr = [2, 3, 5, 7, 4, 5, 6]
// arr.map(x => s.add(x))

// for (let i of s) {
// 	console.log(i)
// } 

// var setitem = new Set([2, 3, 5, 6, 7, 8, 11])
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

// let set = new Set()
// let a = NaN
// let b = NaN

// set.add(a)
// set.add(b)

// console.log(set)

// let set = new Set()

// set.add({})
// console.log(set.size)

// set.add({})
// console.log(set.size)

// let s =  new Set()
// s.add(1).add(2).add(2);
// // 注意2被加入了两次

// s.size // 2

// console.log(s.has(1)) // true
// console.log(s.has(2)) // true
// console.log(s.has(3)) // false

// console.log(s.delete(2))
// console.log(s.has(2)) // false

// var m = new Map();
// var o = {p: 'Hello World'};

// m.set(o, 'content')
// console.log(m.get(o)) // "content"

// m.has(o) // true
// m.delete(o) // true
// m.has(o) // false

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


// var m = new Map([
//   [true, 'foo'],
//   ['true', 'bar']
// ]);

// console.log(m.get(true)) // 'foo'
// console.log(m.get('true')) // 'bar'

// console.log(new Map().get('asfddfsasadf'))

// var map = new Map();

// map.set(['a'], 555);
// console.log(map.get(['a'])) // undefined

// let map = new Map();

// map.set(NaN, 123);
// console.log(map.get(NaN)) // 123

// map.set(-0, -2334);
// console.log(map.get(+0)) // 123

let map = new Map();
map.set('foo', true);
map.set('bar', false);

console.log(map.size); // 2
