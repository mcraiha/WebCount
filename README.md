# WebCount
Count characters from text in your browser

## Live
[https://count.raiha.rocks](https://count.raiha.rocks)

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

## Licenses

All code files (*.ts) and HTML files (*.html) are under [Unlicense](https://unlicense.org/)

The CSS file (mvp.css) is under [MIT License](https://github.com/andybrewer/mvp/blob/master/LICENSE).

Icon file is combination of 🖐️ and 📃 emojis that are from [Twitter Emoji](https://github.com/twitter/twemoji) (Twemoji) project. Their license is [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/)