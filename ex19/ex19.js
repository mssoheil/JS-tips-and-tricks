const person = { name: "Lydia" };

function sayHi(age) {
	console.log(`${this.name} is ${age}`);
}

sayHi.call(person, 21);
sayHi.bind(person, 21);

/**
 * A: undefined is 21 Lydia is 21
 * B: function function
 * C: Lydia is 21 Lydia is 21
 * D: function Lydia is 21
 * E: Lydia is 21 function
 */
