--- 
layout: base.njk
title: Speaking
tags: pages
---
<small><em>[Return to About](/about)</em></small>
<!-- TODO: You need a photo, rename page your name -->
<!-- <span class="mega-text"></span> -->
<!-- TODO: If no url, skip, or go add missing urls -->
{% for event in events %}
- [{{ event.title }}]({{ event.url }}) <span class="meta-text">{{ event.details }}
{%- endfor %}
