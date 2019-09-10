var a = 42;
var b = "foo";
var c = false;
var d = a && b || c ? c || b ? a : c && b : a;
console.log(d);


// A) 42
// B) "foo"
// C) true
// D) false
// E) Syntax Error