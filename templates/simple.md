# touch-readme

transform a stream into a quoted string

[![testling badge](https://ci.testling.com/substack/touch-readme.png)](https://ci.testling.com/substack/touch-readme)

[![build status](https://secure.travis-ci.org/substack/touch-readme.png)](http://travis-ci.org/substack/touch-readme)

# example

``` js
var quote = require('touch-readme');
process.stdin.pipe(quote()).pipe(process.stdout);
```

output:

```
$ echo beep boop | node example/stream.js
"beep boop\n"
```

# methods

``` js
var quote = require('touch-readme')
```

## var q = quote()

Return a transform stream `q` that wraps input in double quotes and adds escape
characters to the chunks.

# usage

```
usage: touch-readme

  Transform stdin to a quoted string on stdout.

```

# install

With [npm](https://npmjs.org) do:

```
npm install touch-readme
```

# license

MIT
