const person = { name: "Lydia" };

Object.defineProperty(person, "age", { value: 21 });

console.log(person);
console.log(Object.keys(person));

/**
 * A: { name: "Lydia", age: 21 }, ["name", "age"]
 * B: { name: "Lydia", age: 21 }, ["name"]
 * C: { name: "Lydia"}, ["name", "age"]
 * D: { name: "Lydia"}, ["age"]
 */
