// let { foo, bar } = { foo: "aaa", bar: "bbb" };

// console.log('foo', foo)
// console.log('bar', bar)

// let { baz } = { foo: "aaa", bar: "bbb" };
// console.log('baz', baz)

// var { foo: baz } = { foo: 'aaa', bar: 'bbb' };

// console.log('baz',baz);

// let obj = { first: 'hello', last: 'world' };
// let { first: f, last: l } = obj;

// console.log('f', f);
// console.log('l', l);

// 解构不仅可以用于数组，还可以用于对象。

// let foo;
// let {foo} = {foo: 1}; // SyntaxError: Duplicate declaration "foo"

// let baz;
// let {bar: baz} = {bar: 1}; // SyntaxError: Duplicate declaration "baz"

// let foo;
// console.log({foo} = {foo: 1}); // 成功

// let baz;
// console.log({bar: baz} = {bar: 1}); // 成功

// let obj = {
//   p: [
//     'Hello',
//     { y: 'World' }
//   ]
// };

// let { p: [x, { y }] } = obj;
// console.log('x', x);
// console.log('y', y);


// var node = {
//   loc: {
//     start: {
//       line: 1,
//       column: 5
//     }
//   }
// };

// var { loc: { start: { line }} } = node;
// // console.log('loc',loc);
// // console.log('start',start);
// console.log('line',line);


// 嵌套赋值
// let obj = {};
// let arr = [];

// ({ foo: obj.prop, bar: arr[0] } = { foo: 123, bar: true });

// console.log(obj)
// console.log(arr)

// var {x = 3} = {};
// x // 3

// var {x, y = 5} = {x: 1};
// x // 1
// y // 5

// var {x:y = 3} = {};
// y // 3

// var {x:y = 3} = {x: 5};
// y // 5

// var { message: msg = 'Something went wrong' } = {};
// msg // "Something went wrong"