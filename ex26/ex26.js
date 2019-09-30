const arr = ["john", "jane", "sam", "jack"];

for (let item in arr) {
	console.log(item);
}

for (let item of arr) {
	console.log(item);
}

/**
 * A: 0 1 2 3 and "john" "jane" "sam" "jack"
 * B: "john" "jane" "sam" "jack" and "john" "jane" "sam" "jack"
 * C: "john" "jane" "sam" "jack" and 0 1 2 3
 * D: 0 1 2 3 and {0: "john", 1: "jane", 2: "sam", 3: "jack"}
 */
