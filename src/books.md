---
layout: base.njk
title: Books I've Read
tags: pages
---

These pages make me happy, so do spreadsheets. Books, too, of course. For summaries before I started these bespoke little pages, you'll have to go to my [Goodreads](https://www.goodreads.com/jlord).

<!-- TODO: Add tags -->
{% for post in collections.books reversed %}
- [{{ post.data.title }}]({{ post.url }}) <span class="meta-text">{{ post.date | readableMonth }}</span>
{%- endfor %}
