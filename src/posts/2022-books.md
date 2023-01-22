---
layout: posts.njk
title: 2022 Books
date: 2023-01-30
tags: books
---
The books I read in 2022. See here for years [2019-2021](/../books) or you can go to [Goodreads](TODO) for from whenever I started on there. Here's [how I build this page](#how).

<h3 id="book-shelf">2021 Shelf</h2>

<ul class="book-shelf-container">
  {%- for book in 2022Books -%}
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
      {%- for book in 2022Books -%}
      <tr>
        <td class="table-row-number"></td><td><a href="{{ book.GoodreadsURL }}">{{ book.Title }}</a></td><td>{{ book.Author }}</td><td>{{ book.Read }}</td><td>{{ book.Category }} <span class="meta-text">{{ book.SubCategory }}</span></td><td class="center">{{ book.Pages }}</td>
      </tr>
      {%- endfor -%}
    </tbody>
  </table>
</div>

<h3 id="how">How I Build This Page</h3>
<p>I keep a spreadsheet of the books I read each year and I get the JSON of that spreadsheet and dump it into the <code>_data</code> directory in the code for this site which is built on Eleventy. That data is then used most easily (thanks, Eleventy!) to populate this page. The code is on <a href="https://github.com/jlord/next-site" target="_blank">GitHub</a>.</p>
