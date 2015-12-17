---
title: Genomics in Wolfram|Alpha
layout: projects
---

## Genomics in Wolfram|Alpha

Building on the [bioinformatics functions](wolfram-bioinformatics) I created for Mathematica, I added
algorithms and data visualizations for genomics to Wolfram|Alpha.

Using the web service I wrote for [GenomeLookup](http://reference.wolfram.com/language/ref/GenomeLookup.html),
I created a human genome DNA search engine:
{% include figure.html url="../images/wa-genome-matches.png" description="" width="400px" %}

I took the gene data from [GenomeData](http://reference.wolfram.com/language/ref/GenomeData.html)
and extended it to include [a variety of other species](http://blog.wolframalpha.com/2010/03/10/did-you-know-that-wolframalpha-knows-your-dna/).
This meant we could support searching for a gene in Wolfram|Alpha and return
a summary of it:

{% include figure.html url="../images/wa-chromosome-location.png" description="" width="600px" %}

Since for each gene we had data for multiple species, we wanted to show how the
sequence differed by species. So I came up with a simplified multiple sequence
alignment graphic, indicating regions of high and low alignment across species:

{% include figure.html url="../images/wa-homologs.png" description="" width="600px" %}

We could also show the local environment of a gene on the chromosome:

{% include figure.html url="../images/wa-nearby-genes.png" description="" width="600px" %}

A related feature was showing the dissociation temperature of a particular DNA
sequence (called "melting"):

{% include figure.html url="../images/wa-dna-melting.png" description="" width="600px" %}
