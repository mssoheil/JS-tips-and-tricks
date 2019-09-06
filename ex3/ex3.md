## Answer:

### The result will be:
```javascript
> first NaN
> second 42
```

### reason:
Number checks to see if the data is number or NaN but parseInt starts from the left
and if sees a not a number it will ignore the rest.
