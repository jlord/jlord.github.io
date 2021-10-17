--- 
title: It's a cool weblog!
layout: base.njk
draft: true
---

Hello, welcome to this real cool site.

{% for post in collections.posts %}
- [{{ post.data.title }}]({{ post.url }})
{%- endfor %}