## Answer:

### The result will be:
```javascript
{"a":2}
```

### reason:
If we use the JSON.stringify() on an object if that property is function or symbol or undefined, that property will be excluded.
