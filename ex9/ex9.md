## Answer:

### The result will be:

```javascript
> 43 42 43 43

```

### reason:

When the `++` and `--` used in postfix the value change happen after the assignment
but when used in prefix position the value change happen before the assignment.

This is because of the operator precedence.

[The precenece table](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence/#Table)

There's an option, the `,` statement-series comma operator. With this operator we can string together multiple standalone expression statements into a single statement
so:

```javascript
var a = 42,
	b;
b = (a++, a);
// a = 43, b = 43
```
