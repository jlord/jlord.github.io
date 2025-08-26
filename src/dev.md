---
layout: base.njk
title: Development
tags: pages
---

There are posts from me about development and tech—I'm not finished porting them over.

## Posts
<!-- TODO: Add tags -->
{% for post in collections.dev reversed %}
- [{{ post.data.title }}]({{ post.url }}) <span class="meta-text">{{ post.date | readableMonth }}</span>
{%- endfor %}

## Other
- [Essential Electron](https://jlord.github.io/essential-electron)
