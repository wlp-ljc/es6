# es6

> ​	本项目主要是学习阮一峰老师的[es6课程](http://es6.ruanyifeng.com)的学习笔记。

[TOC]



## let

​	ES6新增的let命令，用来声明变量，只在所在的代码块产生作用。

```javascript
{
	let a = 1;
	var b = 10;
}
a // Uncaught ReferenceError: a is not defined.
b // 1
```

​	let变量只存在块级作用域，因此面试中常见的函数作用域的问题，可以用let解决了。

```javascript
var a = [];
for (let i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[6](); // 6
```

​	let变量声明不会像var变量声明一样进行变量提升。在使用webpack+babel es6转换es5后，实际上是babel将let变量转换var变量，所以两个才会都输出undefined，实际上let变量是不存在变量声明提升的。

```
{
	console.log(foo)
	var foo = 2;

	console.log(bar);
	let bar = 2;
}
```

​	在代码块内，使用`let`命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”（temporal dead zone，简称 TDZ.

​	避免TDZ的情况就是不在变量声明前 使用它。

​	除此之外，块级作用域内，不允许类似{let a=1;let a=10;}的重复声明。

##  块级作用域

​	ES5 规定，函数只能在顶层作用域和函数作用域之中声明，不能在块级作用域声明。

```javascript
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
```

## const

​	`const`声明只读常量，一旦声明，值不可变。

```javascript
const PI = 3.1415;
PI // 3.1415

PI = 3;//SyntaxError: "PI" is read-only
```

​	const变量一旦声明，必须初始化。

```javascript
const foo;//SyntaxError: Unexpected token
```

​	`const`的作用域与`let`命令相同：只在声明所在的块级作用域内有效。

```javascript
if (true) {
  const MAX = 5;
}

MAX;//Uncaught ReferenceError: MAX is not defined
```

​	`const`命令声明的常量也是不提升，同样存在暂时性死区，只能在声明的位置后面使用.

​      const`声明的常量，也与`let`一样不可重复声明。

**本质**

​	本质上，const指向的是内存地址不可变，而不是变量不可变。针对一般的string、bool、number等变量，就保存在变量指向的那个内存地址，因此等同于常量。但对于复合变量，变量指向的内存地址，保存的只是一个指针，`const`只能保证这个指针是固定的，至于它指向的数据结构是不是可变的，就完全不能控制了。因此，将一个对象声明为常量必须非常小心。

```javascript
const foo = {};

foo.prop = 123;
foo.prop // 123

foo = {}; // TypeError: "foo" is read-only
```

​	如果真的想将对象冻结，应该使用`Object.freeze`方法。

```javascript
const foo3 = Object.freeze({});

// 常规模式时，下面一行不起作用；
// 严格模式时，该行会报错
foo3.prop = 123; //Can't add property prop, object is not extensible
```

## 解构赋值

​	ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring).

### 数组解构

​	可以从数组中提取值，按照对应位置，对变量赋值。

```
let [a, b, c] = [1, 2, 3];
```

​	本质上，这种写法属于“模式匹配”，只要等号两边的模式相同，左边的变量就会被赋予对应的值.

​	解构不成功时，解构值为undefined。

```javascript
let [fooFail] = []
let [barS, fooFail2] = [1]
```

​	不完全解构，解构数组的部分值。

```javascript
let [xNoCom, yNoCom] = [1, 2, 3];
let [aNoCom, [bNoCom], dNoCom] = [1, [2, 3], 4];
```

​	当需要解构的数据不是数组时，会解构失败。

```javascript
let [f1] = 1;
let [f2] = false;
let [f3] = NaN;
let [f4] = undefined;
let [f5] = null;
let [f6] = {};
```

​	理论上，只要存在 Iterator 接口，都可以采用数组形式的解构赋值。

​	解构赋值允许指定默认值。

```javascript
let [foo = true] = [];
foo // true
let [x, y = 'b'] = ['a']; // x='a', y='b'
let [x, y = 'b'] = ['a', undefined]; // x='a', y='b'
```

### 对象解构

​	解构不仅可以用于数组，还可以用于对象。

```javascript
let { foo, bar } = { foo: "aaa", bar: "bbb" };
foo // "aaa"
bar // "bbb"
```

### 其他解构

字符串也可以解构赋值。这是因为此时，字符串被转换成了一个类似数组的对象。

```javascript
const [a, b, c, d, e] = 'hello';
a // "h"
b // "e"
c // "l"
d // "l"
e // "o"
```

类似数组的对象都有一个`length`属性，因此还可以对这个属性解构赋值。

```javascript
let {length : len} = 'hello';
len // 5
```

解构赋值时，如果等号右边是数值和布尔值，则会先转为对象。

```javascript
let {toString: s} = 123;
s === Number.prototype.toString // true

let {toString: s} = true;
s === Boolean.prototype.toString // true
```

函数的参数也可以使用解构赋值。

```
function add([x, y]){
  return x + y;
}

add([1, 2]); // 3

```

上面代码中，函数`add`的参数表面上是一个数组，但在传入参数的那一刻，数组参数就被解构成变量`x`和`y`。对于函数内部的代码来说，它们能感受到的参数就是`x`和`y`。

### 圆括号问题

​	解构赋值虽然很方便，但是解析起来并不容易。ES6的规则是，只要有可能导致解构的歧义，就不得使用圆括号。

（1）变量声明语句中，不能带有圆括号。

```javascript
// 全部报错
let [(a)] = [1];

let {x: (c)} = {};
let ({x: c}) = {};
let {(x: c)} = {};
let {(x): c} = {};

let { o: ({ p: p }) } = { o: { p: 2 } };
```

​	（2）函数参数中，模式不能带有圆括号。

函数参数也属于变量声明，因此不能带有圆括号。

```javascript
// 报错
function f([(z)]) { return z; }
```

​	（3）赋值语句中，不能将整个模式，或嵌套模式中的一层，放在圆括号之中。

```javascript
// 全部报错
({ p: a }) = { p: 42 };
([a]) = [5];
```

​	上面代码将整个模式放在圆括号之中，导致报错。

```javascript
// 报错
[({ p: a }), { x: c }] = [{}, {}];
```

​	上面代码将嵌套模式的一层，放在圆括号之中，导致报错。

## string扩展

​	JavaScript允许采用`\uxxxx`形式表示一个字符，其中“xxxx”表示字符的码点。

```javascript
"\u0061"  // "a"
```

ES6 对这一点做出了改进，只要将码点放入大括号，就能正确解读该字符。

```javascript
"\u{20BB7}" // "𠮷"

"\u{41}\u{42}\u{43}"// "ABC"

let hello = 123;
hell\u{6F} // 123

'\u{1F680}' === '\uD83D\uDE80'
// true
```

ES6提供了`codePointAt`方法，能够正确处理4个字节储存的字符，返回一个字符的码点。

```javascript
var s = '𠮷a';

s.codePointAt(0) // 134071
s.codePointAt(1) // 57271

s.codePointAt(2) // 97
```

​	ES5提供`String.fromCharCode`方法，用于从码点返回对应字符，但是这个方法不能识别32位的UTF-16字符（Unicode编号大于`0xFFFF`）。

```javascript
String.fromCharCode(0x20BB7)
// "ஷ"
```

​	上面代码中，`String.fromCharCode`不能识别大于`0xFFFF`的码点，所以`0x20BB7`就发生了溢出，最高位`2`被舍弃了，最后返回码点`U+0BB7`对应的字符，而不是码点`U+20BB7`对应的字符。

​	ES6提供了`String.fromCodePoint`方法，可以识别`0xFFFF`的字符，弥补了`String.fromCharCode`方法的不足。在作用上，正好与`codePointAt`方法相反。

```javascript
String.fromCodePoint(0x20BB7)
// "𠮷"
String.fromCodePoint(0x78, 0x1f680, 0x79) === 'x\uD83D\uDE80y'
// true
```

​	ES6为字符串添加了遍历器接口（详见《Iterator》一章），使得字符串可以被`for...of`循环遍历。

```javascript
for (let codePoint of 'foo') {
  console.log(codePoint)  // f o o
}
```

​	许多欧洲语言有语调符号和重音符号。为了表示它们，Unicode提供了两种方法。一种是直接提供带重音符号的字符，比如`Ǒ`（\u01D1）。另一种是提供合成符号（combining character），即原字符与重音符号的合成，两个字符合成一个字符，比如`O`（\u004F）和`ˇ`（\u030C）合成`Ǒ`（\u004F\u030C）。

​	这两种表示方法，在视觉和语义上都等价，但是JavaScript不能识别。

```javascript
'\u01D1'==='\u004F\u030C' //false

'\u01D1'.length // 1
'\u004F\u030C'.length // 2
```

​	ES6提供字符串实例的`normalize()`方法，用来将字符的不同表示方法统一为同样的形式，这称为Unicode正规化。

```javascript
'\u01D1'.normalize() === '\u004F\u030C'.normalize()
// true
```

​	`normalize`方法可以接受一个参数来指定`normalize`的方式，参数的四个可选值如下。

- `NFC`，默认参数，表示“标准等价合成”（Normalization Form Canonical Composition），返回多个简单字符的合成字符。所谓“标准等价”指的是视觉和语义上的等价。

- `NFD`，表示“标准等价分解”（Normalization Form Canonical Decomposition），即在标准等价的前提下，返回合成字符分解的多个简单字符。

- `NFKC`，表示“兼容等价合成”（Normalization Form Compatibility Composition），返回合成字符。所谓“兼容等价”指的是语义上存在等价，但视觉上不等价，比如“囍”和“喜喜”。（这只是用来举例，`normalize`方法不能识别中文。）

- `NFKD`，表示“兼容等价分解”（Normalization Form Compatibility Decomposition），即在兼容等价的前提下，返回合成字符分解的多个简单字符。

  传统上，JavaScript只有`indexOf`方法，可以用来确定一个字符串是否包含在另一个字符串中。ES6又提供了三种新方法。

- **includes()**：返回布尔值，表示是否找到了参数字符串。

- **startsWith()**：返回布尔值，表示参数字符串是否在源字符串的头部。

- **endsWith()**：返回布尔值，表示参数字符串是否在源字符串的尾部。

```javascript
var s = 'Hello world!';

s.startsWith('Hello') // true
s.endsWith('!') // true
s.includes('o') // true
```

这三个方法都支持第二个参数，表示开始搜索的位置。

```javascript
var s = 'Hello world!';

s.startsWith('world', 6) // true
s.endsWith('Hello', 5) // true
s.includes('Hello', 6) // false
```

上面代码表示，使用第二个参数`n`时，`endsWith`的行为与其他两个方法有所不同。它针对前`n`个字符，而其他两个方法针对从第`n`个位置直到字符串结束。

## 数值扩展

​	ES6 提供了二进制和八进制数值的新的写法，分别用前缀`0b`（或`0B`）和`0o`（或`0O`）表示。

```javascript
0b111110111 === 503 // true
0o767 === 503 // true
```

​	ES6在Number对象上，新提供了`Number.isFinite()`和`Number.isNaN()`两个方法。`Number.isFinite()`用来检查一个数值是否为有限的（finite）。`Number.isNaN()`用来检查一个值是否为`NaN`。

​	ES6将全局方法parseInt()和parseFloat()，移植到Number对象上面，行为完全保持不变。

​	`Number.isInteger()`用来判断一个值是否为整数。需要注意的是，在JavaScript内部，整数和浮点数是同样的储存方法，所以3和3.0被视为同一个值。