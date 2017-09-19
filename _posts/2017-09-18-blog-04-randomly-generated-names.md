---
layout: post
title: "Name search part 5: randomly generated names"
gif: assets/2017/09/18/blog-04-randomly-generated-names-600px/blog-04-randomly-generated-names_19.gif
date: 2017-09-18
---

In part 4 I explored the space of possible names of a given length, and showed from the social security name data that a vanishingly small fraction of possible names get used as the length of the name increases to around 5 or 6 letters and beyond.

This is part 5 in the series about searching for a name for this little dude:

![blog-04-randomly-generated-names_3.gif](../../../assets/2017/09/18/blog-04-randomly-generated-names-600px/blog-04-randomly-generated-names_3.gif)

![blog-04-randomly-generated-names_4.gif](../../../assets/2017/09/18/blog-04-randomly-generated-names-600px/blog-04-randomly-generated-names_4.gif)

So what if I just tried randomly generating 4-letter names? Would any of them be reasonable possibilities?

![blog-04-randomly-generated-names_6.gif](../../../assets/2017/09/18/blog-04-randomly-generated-names-600px/blog-04-randomly-generated-names_6.gif)

Here are 100 4-letter names, where each letter in each name is chosen entirely at random:

![blog-04-randomly-generated-names_8.gif](../../../assets/2017/09/18/blog-04-randomly-generated-names-600px/blog-04-randomly-generated-names_8.gif)

![blog-04-randomly-generated-names_9.gif](../../../assets/2017/09/18/blog-04-randomly-generated-names-600px/blog-04-randomly-generated-names_9.gif)

For most of these it's immediately clear that I would never choose them as a given name. Names like "jzqd" and "vndt" don't have any obvious pronunciation in English. This is partly because in English there tends to be vowels around the consonants. 

So what happens if I use a particular pattern like vowel + consonant + vowel + consonant? Here are 100 randomly chosen names with that pattern (with vowels in blue and consonants in red):

![blog-04-randomly-generated-names_12.gif](../../../assets/2017/09/18/blog-04-randomly-generated-names-600px/blog-04-randomly-generated-names_12.gif)

![blog-04-randomly-generated-names_13.gif](../../../assets/2017/09/18/blog-04-randomly-generated-names-600px/blog-04-randomly-generated-names_13.gif)

![blog-04-randomly-generated-names_14.gif](../../../assets/2017/09/18/blog-04-randomly-generated-names-600px/blog-04-randomly-generated-names_14.gif)

![blog-04-randomly-generated-names_15.gif](../../../assets/2017/09/18/blog-04-randomly-generated-names-600px/blog-04-randomly-generated-names_15.gif)

![blog-04-randomly-generated-names_16.gif](../../../assets/2017/09/18/blog-04-randomly-generated-names-600px/blog-04-randomly-generated-names_16.gif)

![blog-04-randomly-generated-names_17.gif](../../../assets/2017/09/18/blog-04-randomly-generated-names-600px/blog-04-randomly-generated-names_17.gif)

![blog-04-randomly-generated-names_18.gif](../../../assets/2017/09/18/blog-04-randomly-generated-names-600px/blog-04-randomly-generated-names_18.gif)

![blog-04-randomly-generated-names_19.gif](../../../assets/2017/09/18/blog-04-randomly-generated-names-600px/blog-04-randomly-generated-names_19.gif)

Most of these names are at least pronounceable! I can at least say names like "ataz" and "ijam". But almost all of them seem pretty alien to me. None of these sound like English names.

Another way of looking at it is to consider that there are a total of 

![blog-04-randomly-generated-names_22.gif](../../../assets/2017/09/18/blog-04-randomly-generated-names-600px/blog-04-randomly-generated-names_22.gif)

![blog-04-randomly-generated-names_23.gif](../../../assets/2017/09/18/blog-04-randomly-generated-names-600px/blog-04-randomly-generated-names_23.gif)

possible 4-letter names, and using the name data we can see that there are 

![blog-04-randomly-generated-names_25.gif](../../../assets/2017/09/18/blog-04-randomly-generated-names-600px/blog-04-randomly-generated-names_25.gif)

![blog-04-randomly-generated-names_26.gif](../../../assets/2017/09/18/blog-04-randomly-generated-names-600px/blog-04-randomly-generated-names_26.gif)

5189 4-letter names actually used for first names. So in choosing a purely random name there is a 

![blog-04-randomly-generated-names_28.gif](../../../assets/2017/09/18/blog-04-randomly-generated-names-600px/blog-04-randomly-generated-names_28.gif)

![blog-04-randomly-generated-names_29.gif](../../../assets/2017/09/18/blog-04-randomly-generated-names-600px/blog-04-randomly-generated-names_29.gif)

1.8% chance of hitting a given name. 

So you would have to generate about 50 to 100 random 4-letter names before there was one that was familiar. Or about 18 of 1000 names would be familiar. That's a pretty long slog, having to look through 1000 names to get 18 familiar ones.

Using the vowel-consonant-vowel-consonant pattern, generating 1000 names of this form, how many names in the database do we hit?

![blog-04-randomly-generated-names_33.gif](../../../assets/2017/09/18/blog-04-randomly-generated-names-600px/blog-04-randomly-generated-names_33.gif)

![blog-04-randomly-generated-names_34.gif](../../../assets/2017/09/18/blog-04-randomly-generated-names-600px/blog-04-randomly-generated-names_34.gif)

![blog-04-randomly-generated-names_35.gif](../../../assets/2017/09/18/blog-04-randomly-generated-names-600px/blog-04-randomly-generated-names_35.gif)

![blog-04-randomly-generated-names_36.gif](../../../assets/2017/09/18/blog-04-randomly-generated-names-600px/blog-04-randomly-generated-names_36.gif)

![blog-04-randomly-generated-names_37.gif](../../../assets/2017/09/18/blog-04-randomly-generated-names-600px/blog-04-randomly-generated-names_37.gif)

We hit 27 names in 1000 tries, which is a 2.7% hit rate

![blog-04-randomly-generated-names_39.gif](../../../assets/2017/09/18/blog-04-randomly-generated-names-600px/blog-04-randomly-generated-names_39.gif)

![blog-04-randomly-generated-names_40.gif](../../../assets/2017/09/18/blog-04-randomly-generated-names-600px/blog-04-randomly-generated-names_40.gif)

This is a better hit rate than the purely random names., but you still have to slog through 1000 generated names to get 27 familiar ones.

Why do the vast majority of these generated names not feel like plausible names? Somehow being pronounceable isn't sufficient for being a meaningful name. I've failed to capture some structure that makes a string of letters feel like a given name.

