# WebCount
Count characters from text in your browser

## Why
Because I had to show that [Deno](https://deno.land/) rocks!

## Development

### Requirements
[Deno](https://deno.land/)

### Bundle
In **src** folder
```
deno bundle count.ts count.js
```

### Run tests
In **src** folder
```
deno test tests.ts
```

### Serve
If you want to serve with deno, install [File server](https://deno.land/manual/examples/file_server) and then in **src** folder run
```
file_server .
```
and then open [http://localhost:4507/](http://localhost:4507/)