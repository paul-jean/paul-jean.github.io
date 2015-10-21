---
title: Personal analytics
layout: projects
---

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

