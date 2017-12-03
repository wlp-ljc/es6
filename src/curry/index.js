/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */

function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg
  }

  if (funcs.length === 1) {
    return funcs[0]
  }

  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}

let f1 = next => actions => {
	console.log('f1')
	next()
}

let f2 = next => actions => {
	console.log('f2')
	next()
}

let f3 = next => actions => {
	console.log('f3')
	next()
}

let next = () => {
	console.log('i am real next')
}

let te = compose(f1, f2, f3)(next)

te({type: 1})

