---
layout: base.njk
title: Books I've read
tags: pages
---

These pages make me happy, so do spreadsheets. Books, too, of course. For summaries before I started these bespoke little pages, you'll have to go to my [Goodreads](TODO). 

<!-- TODO: Add tags -->
{% for post in collections.books reversed %}
- [{{ post.data.title }}]({{ post.url }}) <span class="meta-text">{{ post.date | readableMonth }}</span>
{%- endfor %}   
