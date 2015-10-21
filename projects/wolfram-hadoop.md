---
title: Hadoop in the Wolfram Language
layout: projects
---

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


