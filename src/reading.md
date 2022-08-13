---
layout: pages.njk
title: Currently Reading
---
Books I've this year so far. See [here for 2019]({{ '/posts/2019-books' | url }}), [here for 2020]({{ '/posts/2020-books' | url }}), [here for 2021]({{ '/posts/2021-books' | url }}).

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
        <th>No.</th><th>Title</th><th>Author</th><th>Read</th><th>Category</th><th>Pages</th>
      </tr>
    </thead>
    <tbody>
      {%- for book in current_books -%}
      <tr>
        <td class="table-row-number"></td><td><a href="{{ book.GoodreadsURL }}">{{ book.Title }}</a></td><td>{{ book.Author }}</td><td>{{ book.Read }}</td><td>{{ book.Category }} <span class="meta-text">{{ book.SubCategory }}</span></td><td class="center">{{ book.Pages }}</td>
      </tr>
      {%- endfor -%}
    </tbody>
  </table>
</div>
