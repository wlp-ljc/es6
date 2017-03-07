// Array.from方法用于将两类对象转为真正的数组
let arrayLike = {
	'0': 'a',
	'1': 'b',
	'2': 'c',
	length: 3
}

var arr2 = Array.from(arrayLike);
var arr3 = [].slice.call(arrayLike);

console.log('es5',arr3)
console.log('es6',arr2)