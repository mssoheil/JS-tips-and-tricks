## Answer:

### The result will be:
```javascript
> false
> false
```

### reason:
Because the boolean coerces to number, so the `false` will be `0` and the true will be `1`
and `"56"` coerces to number `56` and then they will be compared and since `56 == 0` and `56 == 1` 
both yields `false`, both of the expressions will result to `false`
