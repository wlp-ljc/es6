// let 块变量声明
{
	let a = 10;
	var b = 1;
}
// console.log('a', a);
// console.log('b', b);

var a = [];
for (let i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i)
  }
}

a[6]()

// 结果不太对 问题未知
for (let i = 0; i < 3; console.log(i),i++) {
  let i = 'abc';
  console.log(i);
}

// 不存在变量提升
{
	console.log(foo)
	var foo = 2;

	console.log(bar);
	let bar = 2;
}

// 暂时性死区
var tmp = 3;

if(true) {
	tmp = 'abc';
	console.log(tmp)
	let tmp;
}

if (true) {
  // TDZ开始
  tmp = 'abc'; // ReferenceError
  console.log(tmp); // ReferenceError

  let tmp; // TDZ结束
  console.log(tmp); // undefined

  tmp = 123;
  console.log(tmp); // 123
}

if(true){
	console.log(typeof x);
	let x;

	console.log(typeof undeclared_variable); // "undefined"

}

// 不允许重复声明
{
	let a = 10;
	var a = 1;
}

{
  let a = 10;
  // let a = 1;
}

// 情况一
if (true) {
  function f() {}
}

// 情况二
try {
  function f() {}
} catch(e) {
  // ...
}

function f() { console.log('I am outside!'); }
(function () {
  f();
}());