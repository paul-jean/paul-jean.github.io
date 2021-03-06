---
layout: post
title: "Name search part 4: the space of names"
gif: assets/2017/09/18/blog-03-space-of-names-600px/blog-03-space-of-names_52.gif
date: 2017-09-18
---

In part 3 I did some spelunking through the US social security name dataset. In this post I'll continue to use that data to explore what names have been chosen in the space of possible names.

This is part 4 in the series about searching for a name for this cool cat:

![blog-03-space-of-names_3.gif](../../../assets/2017/09/18/blog-03-space-of-names-600px/blog-03-space-of-names_3.gif)

![blog-03-space-of-names_4.gif](../../../assets/2017/09/18/blog-03-space-of-names-600px/blog-03-space-of-names_4.gif)

![blog-03-space-of-names_5.gif](../../../assets/2017/09/18/blog-03-space-of-names-600px/blog-03-space-of-names_5.gif)

What fraction of possible names actually get used?

Taking 2-letter names for example, it's easy to show all the 2-letter names that have been used for human names in the US Social Security data:

![blog-03-space-of-names_8.gif](../../../assets/2017/09/18/blog-03-space-of-names-600px/blog-03-space-of-names_8.gif)

![blog-03-space-of-names_9.gif](../../../assets/2017/09/18/blog-03-space-of-names-600px/blog-03-space-of-names_9.gif)

![blog-03-space-of-names_10.gif](../../../assets/2017/09/18/blog-03-space-of-names-600px/blog-03-space-of-names_10.gif)

That's the complete list. Some of these are familiar to me, like "Bo" and "Al", but many are unfamiliar to me, like "Tr" and "Ah". 

How many possible 2-letter names are there? Well there are 26 letters in the English alphabet, so each of the two letters has 26 possibilities. For the first letter, there are 26 choices, and once you've made a choice for the first letter, there are 26 possibilities for the second letter. That means there are 

![blog-03-space-of-names_13.gif](../../../assets/2017/09/18/blog-03-space-of-names-600px/blog-03-space-of-names_13.gif)

![blog-03-space-of-names_14.gif](../../../assets/2017/09/18/blog-03-space-of-names-600px/blog-03-space-of-names_14.gif)

possible 2-letter names.

Of those 676 possible names, 148 of them are present in the database:

![blog-03-space-of-names_17.gif](../../../assets/2017/09/18/blog-03-space-of-names-600px/blog-03-space-of-names_17.gif)

![blog-03-space-of-names_18.gif](../../../assets/2017/09/18/blog-03-space-of-names-600px/blog-03-space-of-names_18.gif)

That's about 22%:

![blog-03-space-of-names_20.gif](../../../assets/2017/09/18/blog-03-space-of-names-600px/blog-03-space-of-names_20.gif)

![blog-03-space-of-names_21.gif](../../../assets/2017/09/18/blog-03-space-of-names-600px/blog-03-space-of-names_21.gif)

So 78% of the possible 2-letter names have never been used.

It's easy to show the full space of 2-letter names by just enumerating all possibilities for the first and second letter, and showing them all in a 26 x 26 grid. Here they all are, with the ones that have been used highlighted in yellow:

![blog-03-space-of-names_24.gif](../../../assets/2017/09/18/blog-03-space-of-names-600px/blog-03-space-of-names_24.gif)

![blog-03-space-of-names_25.gif](../../../assets/2017/09/18/blog-03-space-of-names-600px/blog-03-space-of-names_25.gif)

![blog-03-space-of-names_26.gif](../../../assets/2017/09/18/blog-03-space-of-names-600px/blog-03-space-of-names_26.gif)

![blog-03-space-of-names_27.gif](../../../assets/2017/09/18/blog-03-space-of-names-600px/blog-03-space-of-names_27.gif)

So the name "Ji" is used, but not the name "Oy"? And "Tc" is used, but not "Uz"?

If we go up to three-letter names, they form a 3-dimensional space now: 

![blog-03-space-of-names_30.gif](../../../assets/2017/09/18/blog-03-space-of-names-600px/blog-03-space-of-names_30.gif)

![blog-03-space-of-names_31.gif](../../../assets/2017/09/18/blog-03-space-of-names-600px/blog-03-space-of-names_31.gif)

![blog-03-space-of-names_32.gif](../../../assets/2017/09/18/blog-03-space-of-names-600px/blog-03-space-of-names_32.gif)

![blog-03-space-of-names_33.gif](../../../assets/2017/09/18/blog-03-space-of-names-600px/blog-03-space-of-names_33.gif)

With 3 letters there are

![blog-03-space-of-names_35.gif](../../../assets/2017/09/18/blog-03-space-of-names-600px/blog-03-space-of-names_35.gif)

![blog-03-space-of-names_36.gif](../../../assets/2017/09/18/blog-03-space-of-names-600px/blog-03-space-of-names_36.gif)

(~17k) possible names. But only 

![blog-03-space-of-names_38.gif](../../../assets/2017/09/18/blog-03-space-of-names-600px/blog-03-space-of-names_38.gif)

![blog-03-space-of-names_39.gif](../../../assets/2017/09/18/blog-03-space-of-names-600px/blog-03-space-of-names_39.gif)

of them appear in the name database. That's just 5% of the possible 3-letter words:

![blog-03-space-of-names_41.gif](../../../assets/2017/09/18/blog-03-space-of-names-600px/blog-03-space-of-names_41.gif)

![blog-03-space-of-names_42.gif](../../../assets/2017/09/18/blog-03-space-of-names-600px/blog-03-space-of-names_42.gif)

Here are all the 3-letter names used:

![blog-03-space-of-names_44.gif](../../../assets/2017/09/18/blog-03-space-of-names-600px/blog-03-space-of-names_44.gif)

![blog-03-space-of-names_45.gif](../../../assets/2017/09/18/blog-03-space-of-names-600px/blog-03-space-of-names_45.gif)

Here's the beginning of the full space of all 17k possible 3-letter names, with actual names highlighted again:

![blog-03-space-of-names_47.gif](../../../assets/2017/09/18/blog-03-space-of-names-600px/blog-03-space-of-names_47.gif)

![blog-03-space-of-names_48.gif](../../../assets/2017/09/18/blog-03-space-of-names-600px/blog-03-space-of-names_48.gif)

![blog-03-space-of-names_49.gif](../../../assets/2017/09/18/blog-03-space-of-names-600px/blog-03-space-of-names_49.gif)

We can get a sense of the density of the space of 3-letter names by plotting them in a grid, with a black cell appearing whenever a name appears in the database:

![blog-03-space-of-names_51.gif](../../../assets/2017/09/18/blog-03-space-of-names-600px/blog-03-space-of-names_51.gif)

![blog-03-space-of-names_52.gif](../../../assets/2017/09/18/blog-03-space-of-names-600px/blog-03-space-of-names_52.gif)

At just 5% of the possible 3-letter words used for names, the space of 3-letter names is much more sparsely populated than the 2-letter names were.

By breaking the database up by name length, we can see how many names of each length there are:

![blog-03-space-of-names_55.gif](../../../assets/2017/09/18/blog-03-space-of-names-600px/blog-03-space-of-names_55.gif)

![blog-03-space-of-names_56.gif](../../../assets/2017/09/18/blog-03-space-of-names-600px/blog-03-space-of-names_56.gif)

![blog-03-space-of-names_57.gif](../../../assets/2017/09/18/blog-03-space-of-names-600px/blog-03-space-of-names_57.gif)

![blog-03-space-of-names_58.gif](../../../assets/2017/09/18/blog-03-space-of-names-600px/blog-03-space-of-names_58.gif)

Now for each length let's compare the number of given names to the total number of possible names (26^n where n is the name length):

![blog-03-space-of-names_60.gif](../../../assets/2017/09/18/blog-03-space-of-names-600px/blog-03-space-of-names_60.gif)

![blog-03-space-of-names_61.gif](../../../assets/2017/09/18/blog-03-space-of-names-600px/blog-03-space-of-names_61.gif)

![blog-03-space-of-names_62.gif](../../../assets/2017/09/18/blog-03-space-of-names-600px/blog-03-space-of-names_62.gif)

![blog-03-space-of-names_63.gif](../../../assets/2017/09/18/blog-03-space-of-names-600px/blog-03-space-of-names_63.gif)

![blog-03-space-of-names_64.gif](../../../assets/2017/09/18/blog-03-space-of-names-600px/blog-03-space-of-names_64.gif)

The number of names that get used becomes a vanishingly small fraction of the space of possibilities as the length of the name increases.

The number of names that get used becomes a vanishingly small fraction of the space of possibilities as the length of the name increases.

So even for names with 6 letters, for which there are the most given names overall, only about 0.01% (a hundredth of a percent, or 1 in 10,000) of possible names have been used.

If we wanted to name our son with a 2-letter name, we could easily survey the full list of 676 possibilities. If we wanted a 3-letter name, it would already be pretty difficult if not impossible to consider all 17,576 possible names. But even at 4 letters -- which is still a short first name -- it's basically hopeless. There's no way we could look through all 26^4 = 456,976 names.

So in order to consider new names, I need some way of suggesting candidate names from the huge space of possibilities. It's a needle in a haystack problem.

