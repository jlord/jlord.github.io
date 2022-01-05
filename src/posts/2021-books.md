---
layout: posts.njk
title: 2021 Books
date: 2022-01-01
---
Books I read in 2021. See [here for 2019]({{ '/posts/2019-books' | url }}), [here for 2020]({{ '/posts/2020-books' | url }}). Here's what I'm [currently reading](/reading). Here's [how I build this page](#how).

<h3 id="book-shelf">2021 Shelf</h2>

<ul class="book-shelf-container">
  {%- for book in 2021Books -%}
    <li><a href="{{ book.GoodreadsURL }}">
      <img class="book" src="{{ book.CoverURL }}">
    </a></li>
  {%- endfor -%}
</ul>

<h3 id="book-shelf">2021 List</h2>

<div class="book-list-container">
  <table>
    <thead>
      <tr>
        <th>No.</th><th>Title</th><th>Author</th><th>Read</th><th>Category</th><th>Pages</th>
      </tr>
    </thead>
    <tbody>
      {%- for book in 2021Books -%}
      <tr>
        <td class="table-row-number"></td><td><a href="{{ book.GoodreadsURL }}">{{ book.Title }}</a></td><td>{{ book.Author }}</td><td>{{ book.Read }}</td><td>{{ book.Category }} <span class="meta-text">{{ book.SubCategory }}</span></td><td class="center">{{ book.Pages }}</td>
      </tr>
      {%- endfor -%}
    </tbody>
  </table>
</div>

<h3 id="how">How I Build This Page</h3>
<p>I keep a spreadsheet of the books I read each year and I get the JSON of that spreadsheet and dump it into the <code>_data</code> directory in the code for this site which is built on Eleventy. That data is then used most easily (thanks, Eleventy!) to populate this page. The code is on <a href="https://github.com/jlord/next-site" target="_blank">GitHub</a>.</p>
