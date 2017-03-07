// JavaScript允许采用\uxxxx形式表示一个字符，其中“xxxx”表示字符的码点。

// unit16字节  2字节
// let un = "\u0061";
// console.log(un)

// let un2 = "\uD842\uDFB7";
// console.log(un2);

// let un3 = "\u20BB7"
// console.log(un3);

// let un4 = "\u{20BB7}"

// "\u{20BB7}"
// // "𠮷"

// "\u{41}\u{42}\u{43}"
// // "ABC"

// let hello = 123;
// hell\u{6F} // 123

// '\u{1F680}' === '\uD83D\uDE80'
// // true

// '\z' === 'z'  // true
// '\172' === 'z' // true
// '\x7A' === 'z' // true
// '\u007A' === 'z' // true
// '\u{7A}' === 'z' // true


// var s = "𠮷";

// console.log(s.length) // 2
// console.log(s.charAt(0)) // ''
// console.log(s.charAt(1)) // ''
// console.log(s.charCodeAt(0)) // 55362
// console.log(s.charCodeAt(1)) // 57271

// var s = '𠮷a';

// console.log(s.codePointAt(0)) // 134071
// console.log(s.codePointAt(1)) // 57271

// console.log(s.codePointAt(2)) // 97


// console.log(s.codePointAt(0).toString(16)) // "20bb7"
// console.log(s.codePointAt(2).toString(16)) // "61"

// var s = '𠮷a';
// for (let ch of s) {
//   console.log(ch.codePointAt(0).toString(16));
// }

// function is32Bit(c) {
//   return c.codePointAt(0) > 0xFFFF;
// }

// console.log(is32Bit("𠮷")) // true
// console.log(is32Bit("a")) // false

// // 16进制转换字符 不能转码大于2字节
// console.log(String.fromCharCode(0x20BB7))

// // 可转换32位
// console.log(String.fromCodePoint(0x20BB7))
// // "𠮷"
// console.log(String.fromCodePoint(0x78, 0x1f680, 0x79) === 'x\uD83D\uDE80y')
// // true


// for (let codePoint of 'for') {
//   console.log(codePoint)
// }

// var text = String.fromCodePoint(0x20BB7);

// for (let i = 0; i < text.length; i++) {
//   console.log(text[i]);
// }

// // 可以识别大于0xFFFF的码点
// for (let i of text) {
//   console.log(i);
// }

// ES5对字符串对象提供charAt方法，返回字符串给定位置的字符。该方法不能识别码点大于0xFFFF的字符。

// console.log('abc'.charAt(0)) // "a"
// console.log('𠮷'.charAt(0)) // "\uD842"
// 上面代码中，charAt方法返回的是UTF-16编码的第一个字节，实际上是无法显示的。

// console.log('abc'.at(0)) // "a"
// console.log('𠮷'.at(0)) 

// console.log('\u01D1'==='\u004F\u030C'); //false

// console.log('\u01D1'.length); // 1
// console.log('\u004F\u030C'.length); // 2

// var s = 'Hello world!';

// console.log(s.startsWith('Hello')); // true
// console.log(s.endsWith('!')); // true
// console.log(s.includes('o')); // true

// var s = 'Hello world!';

// console.log(s.startsWith('world', 6)) // true
// console.log(s.endsWith('Hello', 5)) // true
// console.log(s.includes('Hello', 6)) // false

// console.log('x'.repeat(3)) // "xxx"
// console.log('hello'.repeat(2)) // "hellohello"
// console.log('na'.repeat(0)) // ""
// console.log('na'.repeat(2.9)) // "nana"

// console.log('na'.repeat(Infinity))
// console.log('na'.repeat(-1))

// console.log('na'.repeat(-0.9)) // ""
// console.log('na'.repeat(NaN)) // ""

// console.log('na'.repeat('na')) // ""
// console.log('na'.repeat('3')) // "nanana")

// if (!String.prototype.padStart) {
//     String.prototype.padStart = function padStart(targetLength,padString) {
//         targetLength = targetLength>>0; //floor if number or convert non-number to 0;
//         padString = String(padString || ' ');
//         if (this.length > targetLength) {
//             return String(this);
//         }
//         else {
//             targetLength = targetLength-this.length;
//             if (targetLength > padString.length) {
//                 padString += padString.repeat(targetLength/padString.length); //append to original to ensure we are longer than needed
//             }
//             return padString.slice(0,targetLength) + String(this);
//         }
//     };
// }

// if (!String.prototype.padEnd) {
//     String.prototype.padEnd = function padEnd(targetLength,padString) {
//         targetLength = targetLength>>0; //floor if number or convert non-number to 0;
//         padString = String(padString || ' ');
//         if (this.length > targetLength) {
//             return String(this);
//         }
//         else {
//             targetLength = targetLength-this.length;
//             if (targetLength > padString.length) {
//                 padString += padString.repeat(targetLength/padString.length); //append to original to ensure we are longer than needed
//             }
//             return String(this) + padString.slice(0,targetLength);
//         }
//     };
// }

// console.log('x'.padStart(5, 'ab')) // 'ababx'
// console.log('x'.padStart(4, 'ab')) // 'abax'

// console.log('x'.padEnd(5, 'ab'))// 'xabab'
// console.log('x'.padEnd(4, 'ab')) // 'xaba'

// console.log('xxx'.padStart(2, 'ab')) // 'xxx'
// console.log('xxx'.padEnd(2, 'ab')) // 'xxx')

// console.log('abc'.padStart(10, '0123456789'));

// console.log('x'.padStart(4))
// console.log('x'.padEnd(4))
// console.log('1'.padStart(10, '0')) // "0000000001"
// console.log('12'.padStart(10, '0')) // "0000000012"
// console.log('123456'.padStart(10, '0')) // "0000123456")

// console.log('12'.padStart(10, 'YYYY-MM-DD')) // "YYYY-MM-12"
// console.log('09-12'.padStart(10, 'YYYY-MM-DD')) // "YYYY-09-12")

// 模板字符串
// let basket = {
// 	count: 5,
// 	onSale: true
// }
// console.log(`
// 	There are <b>${basket.count}</b> items
//    		in your basket, <em>${basket.onSale}</em>
//   	are on sale!
// `)

// // 普通字符串
// console.log(`In JavaScript '\n' is a line-feed.`)

// // 多行字符串
// console.log(`In JavaScript this is
//  not legal.`)

// console.log(`string text line 1
// string text line 2`);

// // 字符串中嵌入变量
// var name = "Bob", time = "today";
// console.log(`Hello ${name}, how are you ${time}?`)

// var greeting = `\`Yo\` World!`;
// console.log(greeting)

// var x = 1;
// var y = 2;

// console.log(`${x} + ${y} = ${x + y}`)

// console.log(`${x} + ${y * 2} = ${x + y * 2}`)

// var obj = {x: 1, y: 2};
// console.log(`${obj.x + obj.y}`)

// function fn() {
//   return "Hello World";
// }

// console.log(`foo ${fn()} bar`)

// // 变量place没有声明
// // var msg = `Hello, ${place}`;

// const tmpl = addrs => `
//   <table>
//   ${addrs.map(addr => `
//     <tr><td>${addr.first}</td></tr>
//     <tr><td>${addr.last}</td></tr>
//   `).join('')}
//   </table>
// `;
// const data = [
//     { first: '<Jane>', last: 'Bond' },
//     { first: 'Lars', last: '<Croft>' },
// ];

// console.log(tmpl(data));

// // 写法一
// let str = 'return ' + '`Hello ${name}!`';
// let func = new Function('name', str);
// console.log(func('Jack')) // "Hello Jack!"

// // 写法二
// let str2 = '(name) => `Hello ${name}!`';
// let func2 = eval.call(null, str2);
// console.log(func2('Jack')) // "Hello Jack!"

// console.log`234`
// alert`124`
// var a = 5;
// var b = 10;

// function tag(s, v1, v2) {
//   console.log(s[0]);
//   console.log(s[1]);
//   console.log(s[2]);
//   console.log(v1);
//   console.log(v2);

//   return "OK";
// }

// tag`Hello ${ a + b } world ${ a * b}!!!`;
// var total = 30;
// var msg = passthru`The total is ${total} (${total*1.05} with tax)`;

// function passthru(literals) {
//   var result = '';
//   var i = 0;

//   while (i < literals.length) {
//     result += literals[i++];
//     if (i < arguments.length) {
//       result += arguments[i];
//     }
//   }

//   return result;
// }

// console.log(msg) // "The total is 30 (31.5 with tax)"

var sender = '<script>alert("abc")</script>'; // 恶意代码
var message =
  SaferHTML`<p>${sender} has sent you a message.</p>`;

function SaferHTML(templateData) {
  var s = templateData[0];
  for (var i = 1; i < arguments.length; i++) {
    var arg = String(arguments[i]);

    // Escape special characters in the substitution.
    s += arg.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");

    // Don't escape special characters in the template.
    s += templateData[i];
  }
  return s;
}

console.log(message)