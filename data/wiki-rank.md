---
title: Wikipedia pageview ranking with MapReduce and MongoDB
layout: projects
---

## Wikipedia pageview ranking with MapReduce and MongoDB

This is an example of solving a data-mining problem using the MapReduce paradigm
on a distributed data store.
For a 48-hour coding challenge, I implemented a MapReduce algorithm for ranking
Wikipedia pageviews. The pageview
data (a small sample) was read into a MongoDB instance, and then a Javascript-based MapReduce
algorithm ranks the pageviews for each human language.
See the [GitHub repo](https://github.com/paul-jean/wiki-rank-mongodb) for details.

{% include figure.html url="../images/wiki-rank.png" description="Running the MapReduce pageview ranking algorithm." width="400px" %}

