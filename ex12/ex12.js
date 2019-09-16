var b = 1;
try {
	var 4 = 8;
	b = 5;
	console.log("try", b);
} catch (err) {
	b = 8;
	console.log(b, 4);


}

console.log(b, 4);