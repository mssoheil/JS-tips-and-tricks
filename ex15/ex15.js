function Person(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
}

const member = new Person("Lydia", "Hallie");
Person.getFullName = function() {
	return `${this.firstName} ${this.lastName}`;
};

console.log(member.getFullName());
/**
 * A: undefined undefined
 * B: SyntaxError
 * C: Lydia Hallie
 * D: TypeError
 */
