---
title: Hello!
layout: base.njk
pagination:
  data: collections.posts
  size: 5
  alias: paginatedposts
draft: true
---
<!-- ### Posts -->
<h3>Posts<span class="meta-text"> Pg. {{ pagination.pageNumber | plus: 1  }}</span></h3>

{% for post in paginatedposts %}
- [{{ post.data.title }}]({{ post.url }}) <span class="meta-text">{{ post.date | isoDate }}</span>
{%- endfor %}

<!-- <em><span class="mega-text">Pg.{{ pagination.pageNumber | plus: 1  }}</span></em><small> — {% if pagination.href.previous %}<span class="nav-text"><a href="{{pagination.href.previous}}">Previous Page</a></span> {% if pagination.href.next %}<em>or</em>{% endif %} {% endif %} {% if pagination.href.next %}<span class="nav-text"><a href="{{pagination.href.next}}">Next Page</a></span>{% endif %} — <span class="nav-text"><a href="feed.xml">RSS</a></span>
</small> -->
<small>{% if pagination.href.previous %}<span class="nav-text"><a href="{{pagination.href.previous}}">Previous Page</a></span> {% if pagination.href.next %}<span class="nav-text">or</span>{% endif %} {% endif %} {% if pagination.href.next %}<span class="nav-text"><a href="{{pagination.href.previous}}"><a href="{{pagination.href.next}}">Next Page</a></span>{% endif %} </span><span class="meta-text">*</span> <span class="nav-text"><span class="nav-text"><a href="feed.xml">RSS</a> or <a href="/all">All Posts</a></span>
</small>

<!-- <span class="meta-text"><a href="feed.xml">RSS</a> *</span> -->
