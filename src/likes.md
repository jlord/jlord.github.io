--- 
layout: base.njk
title: I Like You
tags: pages
---

What it says on the tin. 

{% for like in likes %}
<span class="quote">{{ like.thing }}.</span>
{%- endfor %}

