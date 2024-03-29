function Person(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
}

const lydia = new Person("Lydia", "Hallie");
const sarah = Person("Sarah", "Smith");

console.log(lydia);
console.log(sarah);

/**
 * A: Person { firstName: "Lydia", lastName: "Hallie" } and undefined
 * B: Person { firstName: "Lydia", lastName: "Hallie" } and Person { firstName: "Sarah", lastName: "Smith" }
 * C: Person { firstName: "Lydia", lastName: "Hallie" } and { }
 * D: Person { firstName: "Lydia", lastName: "Hallie" } and ReferenceError
 */
