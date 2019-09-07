## Answer:

### The result will be:
```javascript
> true
> true
> true
> false
> false
> false
> false
> false
> false
```

### reason:
Because `undefined` and `null` only are abstract equal to each other so `x == undefined` or `x == null` only ever will be `true` when x is `null` or `undefined`
