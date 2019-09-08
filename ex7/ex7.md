## Answer:

### The result will be:

```javascript
> "0" == false -> true
> "0" == "" -> false
> false == 0 -> true
> false == "" -> true
> false == [] -> true
> false == {} -> false
> "" == 0 -> true
> "" == [] -> true
> "" == {} -> false
> 0 == [] -> true
> 0 == {} -> false
> 0 == {} -> false
> 0 == {} -> false
> [] == ![] -> true
> "" == [null] -> true
> 0 == "\n" -> true
> "true" == true ->  false
```

### reason:

When one side is `boolean` the boolean will be coerced to number
when both sides are string no coersion happen and only value will be checked
`Number([])` is `0` and `Number({})` is `NaN`
`!` is an unary operator that change to bolean and negate the value so `[] == false` is `true`
`String([null])` is `""` so `"" == ""` is `true`
`""` and `"\n"` and any other white space when convert to number will yield `0`
