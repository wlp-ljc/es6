const PI = 3.1415;
PI // 3.1415

// PI = 3;

const foo = 2;

if (true) {
  const MAX = 5;
}

// MAX // Uncaught ReferenceError: MAX is not defined

const foo2 = {};

// 为 foo 添加一个属性，可以成功
foo2.prop = 123;
foo2.prop // 123

// 将 foo 指向另一个对象，就会报错
// foo2 = {}; // TypeError: "foo" is read-only

const a = [];
a.push('Hello'); // 可执行
a.length = 0;    // 可执行
// a = ['Dave'];    // 报错

const foo3 = Object.freeze({});

// 常规模式时，下面一行不起作用；
// 严格模式时，该行会报错
//foo3.prop = 123; //Can't add property prop, object is not extensible

var constantize = (obj) => {
  Object.freeze(obj);
  Object.keys(obj).forEach( (key, value) => {
    if ( typeof obj[key] === 'object' ) {
      constantize( obj[key] );
    }
  });
};
