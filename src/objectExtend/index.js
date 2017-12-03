// var foo = 'bar';
// var baz = {foo};

// console.log(baz)
// // 等同于
// var baz2 = {foo: foo};
// console.log(baz2)

// function f(x, y) {
//   return {x, y};
// }

// // 等同于

// function f1(x, y) {
//   return {x: x, y: y};
// }

// f(1, 2) // Object {x: 1, y: 2}

// console.log('es6',f(1,2))
// console.log('es5',f1(1,2))

// var o = {
//   method() {
//     return "Hello!";
//   }
// };

// // 等同于

// var o1 = {
//   method: function() {
//     return "Hello!";
//   }
// };

// console.log('es6',o.method())
// console.log('es5',o1.method())

// var birth = '2000/01/01';

// var Person = {

//   name: '张三',

//   //等同于birth: birth
//   birth,

//   // 等同于hello: function ()...
//   hello() { console.log('我的名字是', this.name); }

// };

// console.log(Person)

// let propKey = 'foo';

// let obj = {
//   [propKey]: true,
//   ['a' + 'bc']: 123
// };


// console.log(obj)

// var lastWord = 'last word';

// var a = {
//   'first word': 'hello',
//   [lastWord]: 'world'
// };

// console.log(a['first word']) // "hello"
// console.log(a[lastWord]) // "world"
// console.log(a['last word']) // "world"

// let obj1 = {
//   ['h' + 'ello']() {
//     return 'hi';
//   }
// };

// console.log(obj1.hello()) // hi

// 正确
// var foo = 'bar';
// var baz = { [foo]: 'abc'};

// console.log(baz)

// object.assign()
// Object.assign方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）

// var target = { a: 1 }

// var source = { b: 2 }
// var source1 = { c: 3 }

// Object.assign(target, source, source1)

// console.log(target)

// var obj = { a: 1, b: 1 }
// var s1 =  { b: 2, c: 2 }
// var s2 = { c: 3 }
// Object.assign(obj, s1, s2)
// console.log(obj)

// var obj = { a: 1 }
// console.log(Object.assign(obj) === obj)

// console.log(typeof Object.assign(2)) // "object"

// // 由于undefined和null无法转成对象，所以如果它们作为参数，就会报错。

// Object.assign(undefined) // 报错
// Object.assign(null) // 报错

// let obj = { a: 1 }
// console.log(Object.assign(obj, undefined) ===  obj)
// console.log(Object.assign(obj, null) === obj)

// var v1 = 'abc';
// var v2 = true;
// var v3 = 10;

// var obj = Object.assign({}, v1, v2, v3);
// console.log(obj); // { "0": "a", "1": "b", "2": "c" }

// var obj = Object.assign({ a: 'b' }, { [Symbol('c')]: 'd' })
// console.log(obj)

// 浅拷贝、深拷贝
// var obj = { 
// 	a : {
// 		b: 1
// 	}
// }

// var obj2 = Object.assign({}, obj)

// console.log(obj)
// // 浅拷贝 拷贝的是obj的对象引用，一旦引用发生改变， 都会反映到目标对象上面。

// var target = { a: { b: 'c', d: 'e' } }
// var source = { a: { b: 'hello' } }
// Object.assign(target, source)
// console.log(target)

// Object.assign可以用来处理数组，但是会把数组视为对象。

// var target = [1, 2, 3]
// Object.assign(target, [4, 5])
// console.log(target)
// 上面代码中，Object.assign把数组视为属性名为0、1、2的对象，因此源数组的0号属性4覆盖了目标数组的0号属性1。


// 对象的每个属性都有一个描述对象（Descriptor），用来控制该属性的行为。
// Object.getOwnPropertyDescriptor方法可以获取该属性的描述对象。
// let obj = { foo: 123 };
// var getOwn = Object.getOwnPropertyDescriptor(obj, 'foo')
// console.log(getOwn)

// /*
// 	描述对象的enumerable属性，
// 	称为”可枚举性“，如果该属性为false，就表示某些操作会忽略当前属性。
// */

// // for...in循环：只遍历对象自身的和继承的**可枚举**的属性
// // Object.keys()：返回对象自身的所有**可枚举**的属性的键名
// // JSON.stringify()：只串行化对象自身的**可枚举**的属性

// var b = Object.getOwnPropertyDescriptor(Object.prototype, 'toString').enumerable
// // false

// var c = Object.getOwnPropertyDescriptor([], 'length').enumerable
// // false

// console.log(b)
// console.log(c

// console.log(Object.getOwnPropertyDescriptor(class {foo() {}}.prototype, 'foo').enumerable)

// ES6一共有5种方法可以遍历对象的属性。

// （1）for...in

// for...in循环遍历对象自身的和继承的可枚举属性（不含Symbol属性）。

// （2）Object.keys(obj)

// Object.keys返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含Symbol属性）。

// （3）Object.getOwnPropertyNames(obj)

// Object.getOwnPropertyNames返回一个数组，包含对象自身的所有属性（不含Symbol属性，但是包括不可枚举属性）。

// （4）Object.getOwnPropertySymbols(obj)

// Object.getOwnPropertySymbols返回一个数组，包含对象自身的所有Symbol属性。

// （5）Reflect.ownKeys(obj)

// Reflect.ownKeys返回一个数组，包含对象自身的所有属性，不管是属性名是Symbol或字符串，也不管是否可枚举。

// 以上的5种方法遍历对象的属性，都遵守同样的属性遍历的次序规则。

// 首先遍历所有属性名为数值的属性，按照数字排序。
// 其次遍历所有属性名为字符串的属性，按照生成时间排序。
// 最后遍历所有属性名为Symbol值的属性，按照生成时间排序。

// console.log(Reflect.ownKeys({ [Symbol()]:0, b:0, 10:0, 2:0, a:0 }))

// // es6的写法
// var obj = {
//   method: function() { 
//   	console.log('es6')
//   }
// };
// obj.__proto__ = someOtherObj;

// // es5的写法
// var obj1 = Object.create(someOtherObj);
// obj1.method = function() { 
// 	console.log('es5')
// };

// console.log(obj.__proto__.method())
// console.log(obj1.__proto__.method())

// Object.setPrototypeOf(object, prototype)
// 设置对象的原型函数
// var o = Object.setPrototypeOf({}, {b : 1})
// console.log(o)

// let proto = {};
// let obj = { x: 10 };
// Object.setPrototypeOf(obj, proto);
// console.log(obj)

// proto.y = 20;
// proto.z = 40;
// console.log(obj)


// var obj = { foo: 'bar', baz: 42 }
// console.log(Object.keys(obj))

// let { keys, values, entries } = Object

// let obj = { a: 1, b: 2, c: 3 }

// for( let key of keys(obj) ) {
// 	console.log(key)
// } 

// for( let value of values(obj) ) {
// 	console.log(value)
// }

// for( let entry of entries(obj) ) {
// 	console.log(entry)
// }

// 对象的扩展运算符
// 1. 解构赋值
// let {x, y, z } = { x: 1, y: 2, z: 3, a: 4, b: 5}
// // bable-core 转码失败
// console.log('x=', x)
// console.log('y=', y)
// console.log('z=', z)

// // 浅拷贝 二层对象无法拷贝
// // 另外，解构赋值不会拷贝继承自原型对象的属性。
// let o1 = { a: 1 }
// let o2 = { b: 2 }
// o2.__proto__ = o1;

// let o3 = { ...o2 }
// console.log(o3)

// const [a, ...b ] = [1, 2, 3, 4]
// console.log(a)
// console.log(b)

// const firstName = message?.body?.user?.firstName || 'default';




// console.log(firstName)
