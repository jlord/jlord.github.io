---
layout: base.njk
title: All the Weeklies
tags: pages
---

<!-- TODO: Add tags -->
{% for post in collections.weeklies reversed %}
- [{{ post.data.title }}]({{ post.url }}) <span class="meta-text">{{ post.date | readableMonth }}</span>
{%- endfor %}   
