--- 
title: It's a cool weblog!
layout: base.njk
---

Hello, welcome to this real cool site.

{% for page in collections.pages %}
- [{{ page.data.title }}]({{ page.url }})
{%- endfor %}