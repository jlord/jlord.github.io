--- 
layout: base.njk
title: Letters
tags: pages
---

I have a great fondness for brilliant and salty letters written in the past. Herein lies my collection.

{% for letter in letters %}
<p class="quote">"{{ letter.quote }}"</p><p> <span class="meta-text">{{ letter.note }}, {{ letter.date }} — {{ letter.source }}</span></p>
{%- endfor %}
