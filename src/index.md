---
title: Hello!
layout: base.njk
pagination:
  data: collections.posts
  size: 4
  alias: paginatedposts
draft: true
---
### Posts

{% for post in paginatedposts %}
- [{{ post.data.title }}]({{ post.url }}) <span class="meta-text">{{ post.date | isoDate }}</span> 
{%- endfor %}

<small>
Page {{ pagination.pageNumber | plus: 1  }} — 
{% if pagination.href.previous %}<a href="{{pagination.href.previous}}">Previous Page</a> {% if pagination.href.next %}<em>or</em>{% endif %} {% endif %} {% if pagination.href.next %}<a href="{{pagination.href.next}}">Next Page</a>{% endif %}
</small>

<span class="meta-text"><a href="feed.xml">RSS</a> *</span>

