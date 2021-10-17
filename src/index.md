--- 
title: It's a cool weblog!
layout: base.njk
pagination:
  data: collections.posts
  size: 2
  alias: paginatedposts
draft: true
---

Hello, welcome to this real cool site.

<h3>Writing</h3>

{% for post in paginatedposts %}
- [{{ post.data.title }}]({{ post.url }}) <span class="meta-text">DATE</span>
{%- endfor %}

<small>
{% if pagination.href.previous %}
  <a href="{{pagination.href.previous}}">Previous Page</a>
{% endif %}
{% if pagination.href.next %}
  <a href="{{pagination.href.next}}">Next Page</a>
{% endif %}
</small>
