const add = () => {
	const obj = {};
	return num => {
		if (num in obj) {
			return `From obj! ${obj[num]}`;
		} else {
			const result = num + 10;
			obj[num] = result;
			return `Calculated! ${result}`;
		}
	};
};

const addFunction = add();
console.log(addFunction(10));
console.log(addFunction(10));
console.log(addFunction(5 * 2));

/**
 * A: Calculated! 20, Calculated! 20, Calculated! 20
 * B: Calculated! 20, From cache! 20, Calculated! 20
 * C: Calculated! 20, From cache! 20, From cache! 20
 * D: Calculated! 20, From cache! 20, Error
 */
