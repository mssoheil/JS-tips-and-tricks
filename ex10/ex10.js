foo: for (var i = 0; i < 4; i++) {
	for (var j = 0; j < 4; j++) {
		debugger;

		if (j == i) {

			continue foo;
		}

		if ((j * i) % 2 == 1) {

			continue;
		}
		console.log(i, j);
	}
}