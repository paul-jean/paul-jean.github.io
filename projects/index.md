---
title: Projects
layout: projects
---

## Hacker School

I was in the Winter 2014 batch of [Hacker School](http://www.hackerschool.com).
I did a number of projects, including front-end Javascript + HTML + CSS,
back-end Javascript in Node.js, and functional programming in Scala and Clojure.

### Game of Life in many Javascript frameworks

At the beginning of the batch I paired with [Jake](https://twitter.com/\_JacobJacob) on a
Javascript implementation of
Conway's Game of Life, as a way to learn Javascript and HTML5 canvas.

But our code was a bit hacky, so I [refactored](https://github.com/paul-jean/life/commit/704b10c8618359cc29a6d6a4d4782cef590e3c09)
it into a more functional style to
eliminate as much global state as I could.

Then I wondered how you'd implement the same
interface using [D3.js](http://d3js.org/), so I refactored it [again](https://github.com/paul-jean/life/commit/1da8eace529bbbd326850ec40a4823cd7a4370d8)
using SVG graphics managed by D3.

Around that time I heard about Facebook's React.js framework, and a Hacker School
alum who knew React happened to be visiting that week, so I paired with him and
refactored the code [yet again](https://github.com/paul-jean/life/blob/5ac1698942a782a26a77d9b7556bf894fe0ee25b/life.js)
to use React for managing the SVG elements.

``` javascript
var hello = "hello";
var world = " world!";
console.log(hello + world);
```

