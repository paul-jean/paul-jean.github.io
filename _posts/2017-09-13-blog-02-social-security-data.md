---
layout: post
title: "Name search part 3: the rise of a new name"
gif: assets/2017/09/13/blog-02-social-security-data-600px/blog-02-social-security-data_47.gif
date: 2017-09-13
---

In part 2, I tried (and mostly failed) to generate plausible baby names using a phoneme Markov chain. Now in part 3 I turn my attention to analyzing patterns in existing baby names, using US social security data.

This is part 3 in the series about searching for a name for an adorable new human:

![blog-02-social-security-data_3.gif](../../../assets/2017/09/13/blog-02-social-security-data-600px/blog-02-social-security-data_3.gif)

![blog-02-social-security-data_4.gif](../../../assets/2017/09/13/blog-02-social-security-data-600px/blog-02-social-security-data_4.gif)

... in the nerdiest possible way!

In part 2 I went through the technique I used to generate novel baby names by combining phonemes with a Markov chain, using a phoneme transition matrix derived from English dictionary words. There were some interesting names that came out of it, but they weren't going to win any prizes. And it was a tedious method of searching for new names, since I had to listen to the spoken form of each phoneme combo to know how it would sound.

I needed another approach.

Then Maya mentioned that she had seen a list of the [most popular baby names in the US][https://www.ssa.gov/oact/babynames/index.html] from the US Social Security database. I found the database [online][https://catalog.data.gov/dataset/baby-names-from-social-security-card-applications-national-level-data] and downloaded it, and started [messing around with the data][https://paul-jean.github.io/baby-name//2017/03/07/ss-name-data-01-explore-data.html].

The data gives all baby names registered with US Social Security each year, from 1880 to 2015, with the number of babies born with each name. So it's a nice historical dataset.

For each year, the names are given in the format {name, M/F, count} where the count is the number of babies with that name born in that year. So for example these were the top 20 female baby names in 2015:

![blog-02-social-security-data_11.gif](../../../assets/2017/09/13/blog-02-social-security-data-600px/blog-02-social-security-data_11.gif)

![blog-02-social-security-data_12.gif](../../../assets/2017/09/13/blog-02-social-security-data-600px/blog-02-social-security-data_12.gif)

![blog-02-social-security-data_13.gif](../../../assets/2017/09/13/blog-02-social-security-data-600px/blog-02-social-security-data_13.gif)

And these were the top 20 male baby names:

![blog-02-social-security-data_15.gif](../../../assets/2017/09/13/blog-02-social-security-data-600px/blog-02-social-security-data_15.gif)

Maya had been saying she felt like it was harder to find names for boys than for girls. She felt like there were more options for girl names than boy names. I could test that pretty easily using this data!

I looked at the total number of boys each year, compared to the total number of boy names given that year:

![blog-02-social-security-data_18.gif](../../../assets/2017/09/13/blog-02-social-security-data-600px/blog-02-social-security-data_18.gif)

![blog-02-social-security-data_19.gif](../../../assets/2017/09/13/blog-02-social-security-data-600px/blog-02-social-security-data_19.gif)

![blog-02-social-security-data_20.gif](../../../assets/2017/09/13/blog-02-social-security-data-600px/blog-02-social-security-data_20.gif)

![blog-02-social-security-data_21.gif](../../../assets/2017/09/13/blog-02-social-security-data-600px/blog-02-social-security-data_21.gif)

![blog-02-social-security-data_22.gif](../../../assets/2017/09/13/blog-02-social-security-data-600px/blog-02-social-security-data_22.gif)

(I'm showing the data from 1940 onwards because [prior to 1937 many people did not apply for Social Security numbers][https://www.ssa.gov/oact/babynames/background.html], making the populations artificially small relative to the post-1937 data.)

It's interesting to see how the number of boy names goes through an inflection starting around the 1970s, increasing at a more rapid pace than the boy births.

It's a similar story for girl names, with less of a pronounced inflection starting in the 1970s:

![blog-02-social-security-data_26.gif](../../../assets/2017/09/13/blog-02-social-security-data-600px/blog-02-social-security-data_26.gif)

![blog-02-social-security-data_27.gif](../../../assets/2017/09/13/blog-02-social-security-data-600px/blog-02-social-security-data_27.gif)

![blog-02-social-security-data_28.gif](../../../assets/2017/09/13/blog-02-social-security-data-600px/blog-02-social-security-data_28.gif)

![blog-02-social-security-data_29.gif](../../../assets/2017/09/13/blog-02-social-security-data-600px/blog-02-social-security-data_29.gif)

To see if Maya was right about there being more girl names to choose from than boy names, I plotted the cumulative number of boy and girl names over time:

![blog-02-social-security-data_31.gif](../../../assets/2017/09/13/blog-02-social-security-data-600px/blog-02-social-security-data_31.gif)

![blog-02-social-security-data_32.gif](../../../assets/2017/09/13/blog-02-social-security-data-600px/blog-02-social-security-data_32.gif)

![blog-02-social-security-data_33.gif](../../../assets/2017/09/13/blog-02-social-security-data-600px/blog-02-social-security-data_33.gif)

![blog-02-social-security-data_34.gif](../../../assets/2017/09/13/blog-02-social-security-data-600px/blog-02-social-security-data_34.gif)

Maya was right! There are more girl names than boy names, and the difference is just getting larger over time:

![blog-02-social-security-data_36.gif](../../../assets/2017/09/13/blog-02-social-security-data-600px/blog-02-social-security-data_36.gif)

![blog-02-social-security-data_37.gif](../../../assets/2017/09/13/blog-02-social-security-data-600px/blog-02-social-security-data_37.gif)

There are currently 1.1 million girl names, but only 750k boy names:

![blog-02-social-security-data_39.gif](../../../assets/2017/09/13/blog-02-social-security-data-600px/blog-02-social-security-data_39.gif)

![blog-02-social-security-data_40.gif](../../../assets/2017/09/13/blog-02-social-security-data-600px/blog-02-social-security-data_40.gif)

![blog-02-social-security-data_41.gif](../../../assets/2017/09/13/blog-02-social-security-data-600px/blog-02-social-security-data_41.gif)

![blog-02-social-security-data_42.gif](../../../assets/2017/09/13/blog-02-social-security-data-600px/blog-02-social-security-data_42.gif)

One thing I care about is whether our son's name will be a unique identifier amongst his peers. So we know that there are more girl names overall, but how do those names get distributed amongst new babies? To get a sense for this [I plotted the number of people per name on average for boys and girls][https://paul-jean.github.io/baby-name//2017/03/07/ss-name-data-01-explore-data.html]:

![blog-02-social-security-data_44.gif](../../../assets/2017/09/13/blog-02-social-security-data-600px/blog-02-social-security-data_44.gif)

![blog-02-social-security-data_45.gif](../../../assets/2017/09/13/blog-02-social-security-data-600px/blog-02-social-security-data_45.gif)

![blog-02-social-security-data_46.gif](../../../assets/2017/09/13/blog-02-social-security-data-600px/blog-02-social-security-data_46.gif)

![blog-02-social-security-data_47.gif](../../../assets/2017/09/13/blog-02-social-security-data-600px/blog-02-social-security-data_47.gif)

So in addition to the absolute number of girl names being larger than the number of boy names, there are also more boys per boy name than girls per girl name. So on average, boys have had to share names more than girls have.

Or put another way, girls have more names to choose from than boys do.

There's an interesting peak in the boys per boy name and girls per girl name around the 1950's and 60's. You can see this more clearly when just plotting the number of births for boys and girls each year:

![blog-02-social-security-data_51.gif](../../../assets/2017/09/13/blog-02-social-security-data-600px/blog-02-social-security-data_51.gif)

![blog-02-social-security-data_52.gif](../../../assets/2017/09/13/blog-02-social-security-data-600px/blog-02-social-security-data_52.gif)

The spike in the 1950's and 60's is the baby boom after World War II, where the US birth rate spiked around 1946 to 1964. 

It looks like the number of new names around the baby boom wasn't keeping pace with the number of new boys and girls, so the number of boys per boy name and girls per girl name increased. And it was almost twice as bad for boys: in 1960 there were 1.7 times as many males sharing a name as females.

Since I'm trying to find a name that is more or less unique for our son, I'm curious how new names arise in the US population. Every year some names chosen for new babies will be names never chosen before. So how many such names appear each year? Here's the [breakdown][https://paul-jean.github.io/baby-name//2017/03/18/ss-name-data-14-new-names.html] of the number of new names introduced each year for girls and boys:

![blog-02-social-security-data_56.gif](../../../assets/2017/09/13/blog-02-social-security-data-600px/blog-02-social-security-data_56.gif)

![blog-02-social-security-data_57.gif](../../../assets/2017/09/13/blog-02-social-security-data-600px/blog-02-social-security-data_57.gif)

![blog-02-social-security-data_58.gif](../../../assets/2017/09/13/blog-02-social-security-data-600px/blog-02-social-security-data_58.gif)

![blog-02-social-security-data_59.gif](../../../assets/2017/09/13/blog-02-social-security-data-600px/blog-02-social-security-data_59.gif)

It's interesting that there are consistently more girl names introduced every year than boy names. And both genders seem to follow the same trends.

There were periods of rapid increase in the late 60's and late 80's. I wonder what caused these periods of heightened creativity for names! (This is an open question for me ... I'd love to hear people's thoughts on this.)

If I single out a new name from say the late sixties, I can follow its progress over the years.

Here are the trajectories for the names that appeared in 1968:

![blog-02-social-security-data_64.gif](../../../assets/2017/09/13/blog-02-social-security-data-600px/blog-02-social-security-data_64.gif)

![blog-02-social-security-data_65.gif](../../../assets/2017/09/13/blog-02-social-security-data-600px/blog-02-social-security-data_65.gif)

![blog-02-social-security-data_66.gif](../../../assets/2017/09/13/blog-02-social-security-data-600px/blog-02-social-security-data_66.gif)

![blog-02-social-security-data_67.gif](../../../assets/2017/09/13/blog-02-social-security-data-600px/blog-02-social-security-data_67.gif)

![blog-02-social-security-data_68.gif](../../../assets/2017/09/13/blog-02-social-security-data-600px/blog-02-social-security-data_68.gif)

![blog-02-social-security-data_69.gif](../../../assets/2017/09/13/blog-02-social-security-data-600px/blog-02-social-security-data_69.gif)

![blog-02-social-security-data_70.gif](../../../assets/2017/09/13/blog-02-social-security-data-600px/blog-02-social-security-data_70.gif)

Here are the top 5 names in overall popularity that first appeared in 1968:

![blog-02-social-security-data_72.gif](../../../assets/2017/09/13/blog-02-social-security-data-600px/blog-02-social-security-data_72.gif)

![blog-02-social-security-data_73.gif](../../../assets/2017/09/13/blog-02-social-security-data-600px/blog-02-social-security-data_73.gif)

And their trajectories since then:

![blog-02-social-security-data_75.gif](../../../assets/2017/09/13/blog-02-social-security-data-600px/blog-02-social-security-data_75.gif)

![blog-02-social-security-data_76.gif](../../../assets/2017/09/13/blog-02-social-security-data-600px/blog-02-social-security-data_76.gif)

Each of these names probably has an interesting story behind it.

A data scientist named Hilary Parker (an Etsy alum!) [wrote a few years back][https://hilaryparker.com/2013/01/30/hilary-the-most-poisoned-baby-name-in-us-history/] about the name "Hillary", and the influence Hillary Clinton had on that name:

![blog-02-social-security-data_79.gif](../../../assets/2017/09/13/blog-02-social-security-data-600px/blog-02-social-security-data_79.gif)

![blog-02-social-security-data_80.gif](../../../assets/2017/09/13/blog-02-social-security-data-600px/blog-02-social-security-data_80.gif)

The effect of the Clinton political dynasty in the early 90's is pretty clear! The effect of is to produce a really strong peak in girls named Hillary in the early 90's (a sharp rise and an even sharper fall). There's a fun party trick you can play with first names. Ask someone their name and look it up on Wolfram|Alpha:

![blog-02-social-security-data_82.gif](../../../assets/2017/09/13/blog-02-social-security-data-600px/blog-02-social-security-data_82.gif)

![blog-02-social-security-data_83.gif](../../../assets/2017/09/13/blog-02-social-security-data-600px/blog-02-social-security-data_83.gif)

![blog-02-social-security-data_84.gif](../../../assets/2017/09/13/blog-02-social-security-data-600px/blog-02-social-security-data_84.gif)

The age distribution is typically peaked pretty strongly around the most common age for people with that name, and you can use it to guess their age!

Other names appear and then quickly die out. Here are the names that appeared in 1968 but didn't last past 1980:

![blog-02-social-security-data_87.gif](../../../assets/2017/09/13/blog-02-social-security-data-600px/blog-02-social-security-data_87.gif)

![blog-02-social-security-data_88.gif](../../../assets/2017/09/13/blog-02-social-security-data-600px/blog-02-social-security-data_88.gif)

![blog-02-social-security-data_89.gif](../../../assets/2017/09/13/blog-02-social-security-data-600px/blog-02-social-security-data_89.gif)

![blog-02-social-security-data_90.gif](../../../assets/2017/09/13/blog-02-social-security-data-600px/blog-02-social-security-data_90.gif)

And their trajectories between 1968 and 1980:

![blog-02-social-security-data_92.gif](../../../assets/2017/09/13/blog-02-social-security-data-600px/blog-02-social-security-data_92.gif)

![blog-02-social-security-data_93.gif](../../../assets/2017/09/13/blog-02-social-security-data-600px/blog-02-social-security-data_93.gif)

Here are the names that appeared in the 60's and stayed popular up to present day:

![blog-02-social-security-data_95.gif](../../../assets/2017/09/13/blog-02-social-security-data-600px/blog-02-social-security-data_95.gif)

![blog-02-social-security-data_96.gif](../../../assets/2017/09/13/blog-02-social-security-data-600px/blog-02-social-security-data_96.gif)

![blog-02-social-security-data_97.gif](../../../assets/2017/09/13/blog-02-social-security-data-600px/blog-02-social-security-data_97.gif)

![blog-02-social-security-data_98.gif](../../../assets/2017/09/13/blog-02-social-security-data-600px/blog-02-social-security-data_98.gif)

![blog-02-social-security-data_99.gif](../../../assets/2017/09/13/blog-02-social-security-data-600px/blog-02-social-security-data_99.gif)

![blog-02-social-security-data_100.gif](../../../assets/2017/09/13/blog-02-social-security-data-600px/blog-02-social-security-data_100.gif)

![blog-02-social-security-data_101.gif](../../../assets/2017/09/13/blog-02-social-security-data-600px/blog-02-social-security-data_101.gif)

![blog-02-social-security-data_102.gif](../../../assets/2017/09/13/blog-02-social-security-data-600px/blog-02-social-security-data_102.gif)

![blog-02-social-security-data_103.gif](../../../assets/2017/09/13/blog-02-social-security-data-600px/blog-02-social-security-data_103.gif)

![blog-02-social-security-data_104.gif](../../../assets/2017/09/13/blog-02-social-security-data-600px/blog-02-social-security-data_104.gif)

So how does a name survive? Are there any features that are a strong predictor for how long a name will stay active in the population?

That's an interesting question for a future post!

The social security name data is a rich dataset to explore. In the next post I'll use it to consider how the space of possible names has been explored.

