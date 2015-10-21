---
title: Projects
layout: projects
---

## Recurse Center

I was in the Winter 2014 batch of [Recurse Center](https://www.recurse.com).
I did a number of projects, including front-end Javascript + HTML + CSS,
back-end Javascript in Node.js, and functional programming in Scala and Clojure.

In August 2014 I gave a [talk](https://speakerdeck.com/pauljean/hacking-my-tech-career-at-hacker-school)
about my Recurse Center experience at Champaign-Urbana's Tech Mix:
<div class="speakerdeck">
<script async class="speakerdeck-embed" data-id="6933efb021ac0132318076af556e37c5" data-ratio="1.33333333333333" src="//speakerdeck.com/assets/embed.js"></script>
</div>

### Game of Life in many Javascript frameworks

The Game of Life in several different Javascript frameworks.
I wrote a post about it [here](/2014/05/17/gol-react.html).

[GitHub repo](https://github.com/paul-jean/life)

{% include figure.html url="../images/gol-js-vs-react-div.gif" description="Game of Life in HTML5 canvas (left) and React.js (right) with DOM mutations highlighted" width="600px" %}

### DOM Viz Chrome extension

DOM Viz is a Google Chrome extension I wrote at Recurse Center for highlighting DOM mutation events on any web page.
Intended for visualizing the difference between React.js and vanilla Javascript implementations of the Game of Life.

The key challenge in this project was to figure out how to highlight a DOM element being changed,
when the highlight event is itself a DOM mutation! After crashing many many Chrome tabs with recursive
stack overflows using the MutationObserver API, I found a solution using the more recent
MutationSummary API in conjunction with CSS3 animations.

[GitHub repo](https://github.com/paul-jean/dom-viz)

{% include figure.html url="../images/dom-viz-twitter-20140326.gif" description="DOM Viz Chrome extension showing DOM mutations on Twitter" width="600px" %}

## Wolfram

I was a developer at [Wolfram](http://www.wolfram.com) from 2007 to 2014.

### Integration of Hadoop with the Wolfram language

<div class="speakerdeck">
<script async class="speakerdeck-embed" data-id="d0963460d639013125663a0f838a214c" data-ratio="1.29456384323641" src="//speakerdeck.com/assets/embed.js"></script>
</div>

I wrote a couple of blog posts at Wolfram showing how Hadoop could be used from
the Wolfram Language. In [part 1](http://blog.wolfram.com/2013/07/31/mathematica-gets-bigdata-with-hadooplink/)
I summarized the MapReduce paradigm:

{% include figure.html url="../images/hadoop-diagram.png" description=""  width="600px"%}


... and gave an overview of the Wolfram Language integration with the Hadoop framework:

{% include figure.html url="../images/hadooplink-overview.png" description="" width="600px" %}

In [part 2](http://blog.wolfram.com/2014/02/21/searching-genomes-with-mathematica-and-hadooplink/)
I described a MapReduce algorithm for aligning a query DNA sequence to a database of genomes residing in
the Hadoop file system (HDFS):

{% include figure.html url="../images/hadooplink-part2-colorsmatchup-2.png" description="" width="600px" %}

### Personal analytics

I was the lead data analyst on Stephen Wolfram's personal analytics blog post in March 2012.
We got a lot of comments on the blog
from people asking how to analyze their own personal data. So we
wrote a series of follow-up posts showing concrete examples of analyzing personal data
using Mathematica.

I started with an [email analysis blog post](), showing how to snarf your email from
the gmail IMAP server, and plot things like a timeseries of email volume:
{% include figure.html url="../images/email-timeseries.png" description="" width="600px" %}

... and the distribution of sent and received email by hour of the day:
{% include figure.html url="../images/email-outgoing.png" description="Daily distribution of sent email" width="600px" %}
{% include figure.html url="../images/email-incoming.png" description="Daily distribution of received email" width="600px" %}

The email blog post got a lot of traffic and some press, so I followed up with a post
showing how to
[analyze your keystrokes](http://blog.wolfram.com/2012/06/14/how-do-you-type-wolfram-analyzing-your-typing-style-using-mathematica/),
with an interface that captures your keystrokes as you type the word "wolfram":

{% include figure.html url="../images/pa-blog-typing-interface.png" description="The keystroke analysis interface I wrote for the Mathematica browser plugin" width="400px" %}

The interface allowed you copy the raw data to the clipboard, so I asked the nerds at Wolfram
to send me their keystroke data. I computed the distribution of intra-character intervals:
{% include figure.html url="../images/pa-blog-typing-distribution.png" description="" width="600px" %}

I gave a presentation on my quantified self adventures at Wolfram at
[Data Rave NYC](https://speakerdeck.com/pauljean/quantified-self-adventures-at-wolfram):

<div class="speakerdeck">
  <script async class="speakerdeck-embed" data-slide="15" data-id="bfd321209d0b0131134126e81df3a534" data-ratio="1.29456384323641" src="//speakerdeck.com/assets/embed.js"></script>
</div>

### Automated data analysis in Wolfram|Alpha

I worked with the Wolfram|Alpha Professional team on data upload functionality, including
punchcard and diurnal plots for timeseries data:

{% include figure.html url="../images/wa-pro-punchcard.png" description="Punchcard and diurnal plots of uploaded timeseries data in Wolfram|Alpha Pro" width="600px" %}

... histograms:

{% include figure.html url="../images/wa-pro-histogram.png" description="Categorical histogram of uploaded data" width="600px" %}

... bubble maps:

{% include figure.html url="../images/wa-pro-bubble-map.png" description="Bubble map of geo-tagged financial data" width="600px" %}

... and chloropleth maps:
{% include figure.html url="../images/wa-pro-chloropleth.png" description="Chloropleth map of geo-tagged financial data" width="600px" %}
>>>>>>> 7eaad5c9db55a9ee24592d6d38487b4eb100fdd4

### Genomics in Wolfram|Alpha

I developed a bunch of genomics content for Wolfram|Alpha:
{% include figure.html url="../images/wa-chromosome-location.png" description="" width="600px" %}
{% include figure.html url="../images/wa-dna-melting.png" description="" width="600px" %}
{% include figure.html url="../images/wa-genome-matches.png" description="" width="600px" %}
{% include figure.html url="../images/wa-homologs.png" description="" width="600px" %}
{% include figure.html url="../images/wa-nearby-genes.png" description="" width="600px" %}


### Bioinformatics in Mathematica

My initial role at Wolfram was to develop bioinformatics functions for Mathematica. This marketing
page summarizes the functions I created and helped design:

{% include figure.html url="../images/mma-bio-marketing.png" description="" width="600px" %}

### Teaching experimental computation at the Wolfram Science Summer School

The Wolfram Science Summer School was always my favorite time of year. I wrote
a [blog post](http://blog.wolfram.com/2012/12/20/hunting-for-turing-machines-at-the-wolfram-science-summer-school/)
about the kind of science project we did there.

{% include figure.html url="../images/turing-rule.png" description="" width="600px" %}
{% include figure.html url="../images/turing-evolution.png" description="" width="600px" %}
{% include figure.html url="../images/turing-entropy-distribution.png" description="" width="600px" %}
{% include figure.html url="../images/turing-complex.png" description="" width="600px" %}

### Demonstrations

All of [my Wolfram demonstrations](http://demonstrations.wolfram.com/search.html?query=paul-jean).

{% include figure.html url="../images/demonstrations.png" description="" width="600px" %}

