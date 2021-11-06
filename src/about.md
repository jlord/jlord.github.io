--- 
layout: base.njk
title: About
tags: pages
---

<small><em>[Work](/work)</em> | <em>[Speaking](#speaking)</em> | <em>[CV](/cv)</em></small>
<!-- TODO: You need a photo, rename page your name -->

This is an about page. It's about me!

<!-- TODO: Auto add anchors to headers -->
## <span id="speaking">Speaking</span>
<!-- TODO: If no url, skip, or go add missing urls -->
{% for event in events %}
- [{{ event.title }}]({{ event.url }}) <span class="meta-text">{{ event.details }}</span>
{%- endfor %}
