function A () {
	this.foo = 'hello'
}

if (!global._foo) {
	global._foo = new A()
}

// 缺点 实例会被其他类修改
const FOO_KEY = Symbol.for('foo')

function B () {
	this.fooB = 'hello'
}

if(!global[FOO_KEY]) {
	global[FOO_KEY] = new B()
}

export default global[FOO_KEY]