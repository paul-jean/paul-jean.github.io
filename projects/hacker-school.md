---
title: Hacker School
layout: projects
---

## Hacker School

I was in the Winter 2014 batch of [Hacker School](http://www.hackerschool.com).
I did a number of projects, including front-end Javascript + HTML + CSS,
back-end Javascript in Node.js, and functional programming in Scala and Clojure.

In August 2014 I gave a [talk](https://speakerdeck.com/pauljean/hacking-my-tech-career-at-hacker-school)
about my Hacker School experience at Champaign-Urbana's Tech Mix:
<div class="speakerdeck">
<script async class="speakerdeck-embed" data-id="6933efb021ac0132318076af556e37c5" data-ratio="1.33333333333333" src="//speakerdeck.com/assets/embed.js"></script>
</div>

### Game of Life in many Javascript frameworks

The Game of Life in several different Javascript frameworks.
I wrote a post about it [here](/2014/05/17/gol-react.html).

[GitHub repo](https://github.com/paul-jean/life)

{% include figure.html url="../images/gol-js-vs-react-div.gif" description="Game of Life in HTML5 canvas (left) and React.js (right) with DOM mutations highlighted" width="600px" %}

### DOM Viz Chrome extension

DOM Viz is a Google Chrome extension I wrote at Hacker School for highlighting DOM mutation events on any web page.
Intended for visualizing the difference between React.js and vanilla Javascript implementations of the Game of Life.

The key challenge in this project was to figure out how to highlight a DOM element being changed,
when the highlight event is itself a DOM mutation! After crashing many many Chrome tabs with recursive
stack overflows using the MutationObserver API, I found a solution using the more recent
MutationSummary API in conjunction with CSS3 animations.

[GitHub repo](https://github.com/paul-jean/dom-viz)

{% include figure.html url="../images/dom-viz-twitter-20140326.gif" description="DOM Viz Chrome extension showing DOM mutations on Twitter" width="600px" %}

