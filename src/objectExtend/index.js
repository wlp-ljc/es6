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
var foo = 'bar';
var baz = { [foo]: 'abc'};

console.log(baz)
