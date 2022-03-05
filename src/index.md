--- 
title: Hello!
layout: base.njk
pagination:
  data: collections.posts
  size: 15
  alias: paginatedposts
draft: true
---
<h3>Writing</h3>

{% for post in paginatedposts %}
- [{{ post.data.title }}]({{ post.url }}) <span class="meta-text">{{ post.date | readableMonth }}</span> 
{%- endfor %}

### Fun Having
- This site's [colophon](/colophon).
- Things I [like](/likes).
- Salty, old [letters](/letters). 

<small>
{% if pagination.href.previous %}
  <a href="{{pagination.href.previous}}">Previous Page</a>
{% endif %}
{% if pagination.href.next %}
  <a href="{{pagination.href.next}}">Next Page</a>
{% endif %}
</small>
