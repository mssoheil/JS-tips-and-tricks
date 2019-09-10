## Answer:

### The result will be:

```javascript
> 43 42 43 43

```

### reason:

When the `++` and `--` used in postfix the value change happen after the assignment
but when used in prefix position the value change happen before the assignment

There's an option, the `,` statement-series comma operator. Whit this operator we can string together multiple standalone expression statements into a single statement
so:

```javascript
var a = 42,
	b;
b = (a++, a);
// a = 43, b = 43
```
