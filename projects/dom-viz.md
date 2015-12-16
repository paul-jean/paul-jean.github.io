---
title: DOMViz Chrome extension
layout: projects
---

DOM Viz is a Google Chrome extension I wrote at Recurse Center for highlighting DOM mutation events on any web page.
Intended for visualizing the difference between React.js and vanilla Javascript implementations of the Game of Life.

The key challenge in this project was to figure out how to highlight a DOM element being changed,
when the highlight event is itself a DOM mutation! After crashing many many Chrome tabs with recursive
stack overflows using the MutationObserver API, I found a solution using the more recent
MutationSummary API in conjunction with CSS3 animations.

[GitHub repo](https://github.com/paul-jean/dom-viz)

{% include figure.html url="../images/dom-viz-twitter-20140326.gif" description="DOM Viz Chrome extension showing DOM mutations on Twitter" width="600px" %}

