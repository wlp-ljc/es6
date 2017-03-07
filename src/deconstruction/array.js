let [a, b, c] = [1, 2, 3];

let [foo, [[bar], baz]] = [1, [[2], 3]];

let [ , , third] = ["foo", "bar", "baz"];

let [x1, , y1] = [1, 2, 3];

let [head, ...tail] = [1, 2, 3, 4];

let [x, y, ...z] = ['a'];

console.log('a',a)
console.log('b',b)
console.log('c',c)

console.log('foo',foo)
console.log('bar',bar)
console.log('baz',baz)

console.log("third",third)

console.log('x1', x1)
console.log('y1', y1)

console.log(head)
console.log(tail)

console.log('x', x)
console.log('y', y)
console.log('z', z)

// 解构不成功
let [fooFail] = []
let [barS, fooFail2] = [1]
console.log('fooFail',fooFail)
console.log('fooFail2',fooFail2)

// 不完全解构
let [xNoCom, yNoCom] = [1, 2, 3];

let [aNoCom, [bNoCom], dNoCom] = [1, [2, 3], 4];

console.log('xNoCom',xNoCom)
console.log('yNoCom',yNoCom)

console.log('aNoCom',aNoCom)
console.log('bNoCom',bNoCom)
console.log('dNoCom',dNoCom)

// 解构失败
// 报错
// let [f1] = 1;
// let [f2] = false;
// let [f3] = NaN;
// let [f4] = undefined;
// let [f5] = null;
// let [f6] = {};

// set解构
let [xx, yy, zz] = new Set(['a', 'b', 'c']);
console.log('xx',xx)


let [fooS1 = true] = [];
console.log('fooS1',fooS1)

// 数组成员undefined === undefined ，xxx = 1, null === undefined 为false， xxxx = null 
let [xxx = 1] = [undefined];
console.log('xxx',xxx)

let [xxxx = 1] = [null];
console.log('xxxx',xxxx)

// 惰性求值
function fun() {
  console.log('aaa');
}

let [x2 = fun()] = [1];
console.log('x2', x2);

let [x6 = 1, y6 = x6] = [];     // x=1; y=1
let [x7 = 1, y9 = x7] = [2];    // x=2; y=2
let [x8 = 1, y8 = x8] = [1, 2]; // x=1; y=2
// let [x9 = y9, y9 = 1] = [];     // ReferenceError

