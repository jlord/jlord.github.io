---
layout: base.njk
title: All Posts
tags: pages
---
<!-- TODO: Add tags -->
{% for post in collections.posts %}
- [{{ post.data.title }}]({{ post.url }}) <span class="meta-text">{{ post.date | readableMonth }} — {% for tag in post.data.tags %}{{tag}}{%- endfor %}   </span> 
{%- endfor %}   
