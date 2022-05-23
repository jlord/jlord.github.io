---
title: Hello!
layout: base.njk
pagination:
  data: collections.posts
  size: 15
  alias: paginatedposts
draft: true
---
### Posting

{% for post in paginatedposts %}
- [{{ post.data.title }}]({{ post.url }}) <span class="meta-text">{{ post.date | readableMonth }}</span>
{%- endfor %}

<small>
{% if pagination.href.previous %}
  <a href="{{pagination.href.previous}}">Previous Page</a>
{% endif %}
{% if pagination.href.next %}
  <a href="{{pagination.href.next}}">Next Page</a>
{% endif %}
</small>
