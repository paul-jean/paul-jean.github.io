---
title: Wolfram bioinformatics
layout: projects
---

## Bioinformatics in Mathematica

My initial role at Wolfram was to develop
[biology-related integrated data functions](https://www.wolfram.com/products/mathematica/newin7/content/IntegratedGenomicAndProteinData/)
for Mathematica. These functions return curated, canonicalized entities and clean
property values. Basically they make messy data computable.

[GenomeData](https://reference.wolfram.com/language/ref/GenomeData.html)
retrieves computable data on human genes:

{% include figure.html url="../images/mma-genomedata.png" description="" width="300px" %}

[ProteinData](http://reference.wolfram.com/language/ref/ProteinData.html)
does the same for human proteins:

{% include figure.html url="../images/mma-proteindata.png" description="" width="300px" %}

[GenomeLookup](http://reference.wolfram.com/language/ref/GenomeLookup.html)
looks up a given DNA sequence on the human genome and returns the
positions where it occurs (via exact string match):

{% include figure.html url="../images/mma-genomelookup.png" description="" width="300px" %}

I worked with Wolfram marketing to create a
[series of examples](https://www.wolfram.com/products/mathematica/newin7/content/IntegratedGenomicAndProteinData/)
showing cool applications for these data functions:

{% include figure.html url="../images/mma-bio-marketing.png" description="" width="600px" %}
