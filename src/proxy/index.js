// var obj = new Proxy({}, {
//   get: function (target, key, receiver) {
//     console.log(`getting ${key}!`);
//     return Reflect.get(target, key, receiver);
//   },
//   set: function (target, key, value, receiver) {
//     console.log(`setting ${key}!`);
//     return Reflect.set(target, key, value, receiver);
//   }
// });

// obj.value = 1
// ++obj.value

// var proxy = new Proxy({}, {
//   get: function(target, property) {
//     return 35;
//   }
// });

// console.log(proxy.time) // 35
// console.log(proxy.name) // 35
// console.log(proxy.title)// 35

// var target = {}
// var handler = {}

// var proxy = new Proxy(target, handler)

// proxy.a = 'b'

// console.log(target.a)

// var object = { proxy: new Proxy(target, handler) };
// var person = {
//   name: "张三"
// };

// var proxy = new Proxy(person, {
//   get: function(target, property) {
//     if (property in target) {
//       return target[property];
//     } else {
//       throw new ReferenceError("Property \"" + property + "\" does not exist.");
//     }
//   }
// });

// console.log(proxy.name) // "张三"
// console.log(proxy.age) // 抛出一个错误