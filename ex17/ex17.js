var x = new Promise(function(resolve, reject) {
	resolve("B");
});
var y = new Promise(function(resolve, reject) {
	resolve(x);
});
var z = new Promise(function(resolve, reject) {
	resolve("A");
});
y.then(function(v) {
	console.log(v);
});
z.then(function(v) {
	console.log(v);
});

/**
 * A B B
 * A B
 * B B A
 * B A
 */
