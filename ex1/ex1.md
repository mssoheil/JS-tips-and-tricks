## Answer:

### The result will be:
```javascript
[1,null, null, 4]
```

### reason:
The `JSON.stringify()` will automatically omit `undefined`, `function`, and `symbol`
values when it comes across them. If such a value is found in an `array` , that value is
replaced by `null`. 