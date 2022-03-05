--- 
layout: base.njk
title: Speaking
tags: pages
---

<!-- TODO: If no url, skip, or go add missing urls -->
{% for event in events %}
- [{{ event.title }}]({{ event.url }}) <span class="meta-text">{{ event.details }}</span>
{%- endfor %}
