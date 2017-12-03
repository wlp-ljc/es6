// Array.from方法用于将两类对象转为真正的数组
// let arrayLike = {
// 	'0': 'a',
// 	'1': 'b',
// 	'2': 'c',
// 	length: 3
// }

// var arr2 = Array.from(arrayLike);
// var arr3 = [].slice.call(arrayLike);

// console.log('es5',arr3)
// console.log('es6',arr2)

// // NodeList对象
// let ps = document.querySelectorAll('p');
// Array.from(ps).forEach(function (p) {
//   console.log(p);
// });

// // arguments对象
// function foo() {
//   var args = Array.from(arguments);
//   console.log(args)
//   // ...
// }

// console.log(foo('1', 2, 3, 4, 5, 6))

// console.log(Array.from('hello'))
// // ['h', 'e', 'l', 'l', 'o']

// let namesSet = new Set(['a', 'b'])
// console.log(Array.from(namesSet)) // ['a', 'b']

// // Array.from方法则是还支持类似数组的对象。所谓类似数组的对象，
// //本质特征只有一点，即必须有length属性。因此，任何有length属性的对象，都可以通过Array.from方法转为数组，而此时扩展运算符就无法转换。
// console.log(Array.from([1, 2, 3], (x) => x * x))

// let spans = document.querySelectorAll('span.name');

// // map()
// let names1 = Array.prototype.map.call(spans, s => s.textContent);

// // Array.from()
// let names2 = Array.from(spans, s => s.textContent)

// console.log(Array.from([1, , 2, , 3], (n) => n || 0))

// function typesOf () {
//   return Array.from(arguments, value => typeof value)
// }
// console.log(typesOf(null, [], NaN))

// console.log(Array.of(3, 11, 8)) // [3,11,8]
// console.log(Array.of(3)) // [3]
// console.log(Array.of(3).length) // 1

// console.log(Array.of()) // []
// console.log(Array.of(undefined)) // [undefined]
// console.log(Array.of(1)) // [1]
// console.log(Array.of(1, 2)) // [1, 2]

// 数组实例的copyWithin方法，在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组。也就是说，使用这个方法，会修改当前数组。
// console.log([1, 2, 3, 4, 5].copyWithin(0, 3))
// 将3号位复制到0号位
// console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4))
// // [4, 2, 3, 4, 5]

// // -2相当于3号位，-1相当于4号位
// console.log([1, 2, 3, 4, 5].copyWithin(0, -2, -1))
// // [4, 2, 3, 4, 5]

// // 将3号位复制到0号位)
// console.log([].copyWithin.call({length: 5, 3: 1}, 0, 3))
// // {0: 1, 3: 1, length: 5}

// // 将2号位到数组结束，复制到0号位
// var i32a = new Int32Array([1, 2, 3, 4, 5]);
// console.log(i32a.copyWithin(0, 2));
// // Int32Array [3, 4, 5, 4, 5]

// // 对于没有部署TypedArray的copyWithin方法的平台
// // 需要采用下面的写法
// console.log([].copyWithin.call(new Int32Array([1, 2, 3, 4, 5]), 0, 3, 4));
// // Int32Array [4, 2, 3, 4, 5]

// console.log([1, 4, -5, 10].find((n) => n < 0))

// console.log([1, 5, 10, 15].find(function(value, index, arr) {
//   return value > 9;
// }));

// console.log([1, 5, 10, 15].findIndex(function(value, index, arr) {
//   return value > 9;
// }))

// console.log([NaN].indexOf(NaN));
// // -1

// console.log([NaN].findIndex(y => Object.is(NaN, y)))
// 0

// console.log(['a', 'b', 'c'].fill(7))
// console.log(new Array(3).fill(7))
// console.log(['a', 'b', 'c'].fill(7, 1, 2))

// // ES6提供三个新的方法——entries()，keys()和values()——用于遍历数组

// // 唯一的区别是keys()是对键名的遍历、values()是对键值的遍历，entries()是对键值对的遍历。
// for (let index of ['a', 'b'].keys()) {
//   console.log(index);
// }

// for (let elem of ['a', 'b'].values()) {
//   console.log(elem);
// }

// for (let [index, elem] of ['a', 'b'].entries()) {
//   console.log(index, elem);
// }

// let letter = ['a', 'b', 'c'];
// let entries = letter.entries();
// console.log(entries.next().value); // [0, 'a']
// console.log(entries.next().value); // [1, 'b']
// console.log(entries.next().value); // [2, 'c']


// console.log([1, 2, 3].includes(2));     // true
// console.log([1, 2, 3].includes(4));     // false
// console.log([1, 2, NaN].includes(NaN)); // true
// console.log([1, 2, 3].includes(3, 3));  // false
// console.log([1, 2, 3].includes(3, -1)); // true

// console.log([NaN].includes(NaN))

// console.log(0 in [undefined, undefined, undefined]) // true
// console.log(0 in [, , ,]) // false

// // forEach方法
// [,'a'].forEach((x,i) => console.log(i)); // 1

// // filter方法
// ['a',,'b'].filter(x => true) // ['a','b']

// // every方法
// [,'a'].every(x => x==='a') // true

// // some方法
// [,'a'].some(x => x !== 'a') // false

// // map方法
// [,'a'].map(x => 1) // [,1]

// // join方法
// [,'a',undefined,null].join('#') // "#a##"

// // toString方法
// [,'a',undefined,null].toString() // ",a,,"

// var a1 = [1, 2, 3, 4]

// var a2 = [for (i of a1) i * 2]
// console.log(a2)
