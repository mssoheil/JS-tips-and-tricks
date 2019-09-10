var b = 3;

function foo(a = 42, b = a + b + 5) {
	console.log(a, b)
}

foo();