function getPersonInfo(one, two, three) {
	console.log(one);
	console.log(two);
	console.log(three);
}

const person = "Lydia";
const age = 21;

getPersonInfo`${person} is ${age} years old`;

/**
 * A: "Lydia" 21 ["", " is ", " years old"]
 * B: ["", " is ", " years old"] "Lydia" 21
 * C: "Lydia" ["", " is ", " years old"] 21
 * D: "Lydia is 21 years old" "Lydia" 21
 * E: ["Lydia", " is ", " years old"] "Lydia" 21
 */
