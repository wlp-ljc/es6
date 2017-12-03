## 柯里化函数分析

```javascript
export default function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg
  }

  if (funcs.length === 1) {
    return funcs[0]
  }

  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}
```

(a, b) => (...args) => a(b(...args)) 类似如下的代码

```javascript
function(a, b) {
    return function() {
        return a(b.apply(undefined, ...args))
    }
}
```

转化后 类似如下

```javascript
export default function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg
  }

  if (funcs.length === 1) {
    return funcs[0]
  }

  return funcs.reduce(function(a, b) {
    return function() {
        return a(b.apply(undefined, ...args))
    }
})
}
```

