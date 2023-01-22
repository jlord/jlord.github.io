---
layout: pages.njk
title: Currently Reading
---
Books I've read this year so far. See my pages for [2019-2020](/../books) or [Goodreads](https://www.goodreads.com/user/show/768192-jlord) for _even_ more. 

<h3 id="book-shelf">Shelf</h3>

<ul class="book-shelf-container">
  {%- for book in current_books -%}
    <li><a href="{{ book.GoodreadsURL }}">
      <img class="book" src="{{ book.CoverURL }}">
    </a></li>
  {%- endfor -%}
</ul>

<h3 id="book-shelf">List</h2>

<div class="book-list-container">
  <table>
    <thead>
      <tr>
        <th>No.</th><th>Title</th><th>Author</th><th>Read</th><th>Category</th><th>Rating</th>
      </tr>
    </thead>
    <tbody>
      {%- for book in current_books -%}
      <tr>
        <td class="table-row-number"></td><td><a href="{{ book.GoodreadsURL }}">{{ book.Title }}</a></td><td>{{ book.Author }}</td><td>{{ book.Read }}</td><td>{{ book.Category }} <span class="meta-text">{{ book.SubCategory }}</span></td><td class="center">{{ book.Rating }}/5</td>
      </tr>
      {%- endfor -%}
    </tbody>
  </table>
</div>
