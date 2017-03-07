// const [a, b, c, d, e] = 'hello';

// let {length : len} = 'hello';

// console.log('a', a);
// console.log('b', b);
// console.log('c', c);
// console.log('d', d);
// console.log('e', e);
// console.log('len', len);


// let { toString: s}  = 123;
// console.log(s === Number.prototype.toString)
// console.log('s', s);


// let {toString: s1} = true

// console.log(s1 === Boolean.prototype.toString)
// console.log('s1', s1);

// let { prop: x } = undefined; // TypeError
// let { prop: y } = null; // TypeError


// 函数参数的解构赋值
// function add([x, y]){
//   return x + y;
// }

// console.log(add([1, 2])); // 3

// var b = [[1, 2], [3, 4]].map(([a, b]) => a + b);
// console.log(b)

// function move({x = 0, y = 0} = {}) {
//   return [x, y];
// }

// console.log(move({x: 3, y: 8})); // [3, 8]
// console.log(move({x: 3})); // [3, 0]
// console.log(move({})); // [0, 0]
// console.log(move()); // [0, 0]

// var c = [1, undefined, 3].map((x = 'yes') => x);
// console.log(c);

// 全部报错
// let [(a)] = [1];

// let {x: (c)} = {};
// let ({x: c}) = {};
// let {(x: c)} = {};
// let {(x): c} = {};

// let { o: ({ p: p }) } = { o: { p: 2 } };

// 变换变量的值
// let x = 1;
// let y = 2;

// [x, y] = [y, x];

// console.log('x',x)

// console.log('y',y)

// // 从函数返回多个值
// // 返回一个数组
// function example() {
//   return [1, 2, 3];
// }
// let [a, b, c] = example();

// console.log('a',a)

// console.log('b',b)

// console.log('c',c)

// // 返回一个对象
// function example1() {
//   return {
//     foo: 1,
//     bar: 2
//   };
// }
// let { foo, bar } = example1();
// console.log('foo', foo);
// console.log('bar', bar);

// 函数参数定义
// function f([x,y,z]) {
// 	console.log('x+y+z',x,y,z)
// }
// f([1,2,3]);

// function f1({x,y,z}) {
// 	console.log('x+y+z',x,y,z)
// }
// f1({z:3, y:2, x:1});

// 提取JSON数据
// let jsonData = {
// 	id: 42,
// 	status: 'ok',
// 	data: [867, 5309]
// }


// let {id, status, data:number} = jsonData;
// console.log(id, status, number);

// // 函数默认值
// let jquery.ajax = function (url, {
// 	async = true,
// 	beforeSend = function () {},
// 	cache = true,
// 	complete = function () {},
// 	crossDomain = false,
// 	global = true,
// }) {

// }

// 遍历MAP 结构
// var map = new Map();
// map.set('first', 'hello');
// map.set('second', 'world');
// for (let [key, value] of map) {
//   console.log(key + " is " + value);
// }

// // 获取键名
// for (let [key] of map) {
//   // ...
// }

// // 获取键值
// for (let [,value] of map) {
//   // ...
// }

// 指定模块的指定方法
// const { SourceMapConsumer, SourceNode } = require("source-map");
// 或者
// import { SourceMapConsumer, SourceNode }  from "source-map";