---
title: Genomics in Wolfram|Alpha
layout: projects
---

### Genomics in Wolfram|Alpha

When we were building the initial version of Wolfram|Alpha,
one of my first challenges was to extend the [genome search engine I wrote for
the Wolfram Language](wolfram-bioinformatics.html) so it could return results in Wolfram|Alpha:

{% include figure.html url="../images/wa-genome-matches.png" description="" width="100%" %}

Along with genome searches, I built a [database of genes]("/2010/03/10/wa-dna.html") so
Wolfram|Alpha users could drill down on specific genes matching the query sequence.
For a given gene you can see the chromosome location:

{% include figure.html url="../images/wa-chromosome-location.png" description="" width="600px" %}

... nearby genes:

{% include figure.html url="../images/wa-nearby-genes.png" description="" width="600px" %}

... and gene homologs in other species:

{% include figure.html url="../images/wa-homologs.png" description="" width="600px" %}

... among other things.

The info-graphics are all generated dynamically on the Wolfram|Alpha servers,
specific to the gene named in the query string. Creating each graphic was an
adventure in hacking the Wolfram Language graphics primitives, combined with
finicky algorithms to place graphics elements correctly (much like using css
directives and Javascript functions to draw pictures in the DOM).

We also allowed users to see the physical properties of the query sequences,
in particular the melting temperature and its dependence on salt concentration:

{% include figure.html url="../images/wa-dna-melting.png" description="" width="600px" %}
