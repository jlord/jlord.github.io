---
layout: posts.njk
title: 2020 Books
date: 2021-01-01
---
Books I read in 2020. See [here for 2019]({{ '/posts/2019-books' | url }}). Here's what I'm [currently reading](/reading).
<h3 id="book-shelf">2020 Shelf</h2>

<div class="book-shelf-container">
  {%- for book in 2020Books -%}
  <div class="book">
    <a href="{{ book.GoodreadsURL }}">
      <img src="{{ book.CoverURL }}">
    </a>
  </div>
  {%- endfor -%}
</div>

<h3 id="book-shelf">2020 List</h2>

<div class="book-list-container">
  <table>
    <thead>
      <tr>
        <th>No.</th><th>Title</th><th>Author</th><th>Read</th><th>Category</th><th>Pages</th>
      </tr>
    </thead>
    <tbody>
      {%- for book in 2020Books -%}
      <tr>
        <td class="table-row-number"></td><td><a href="{{ book.GoodreadsURL }}">{{ book.Title }}</a></td><td>{{ book.Author }}</td><td>{{ book.Read }}</td><td>{{ book.Category }} <span class="meta-text">{{ book.SubCategory }}</span></td><td class="center">{{ book.Pages }}</td>
      </tr>
      {%- endfor -%}
    </tbody>
  </table>
</div>

<h2 id="how-to-books">How this Page is Made</h2>
<p>I use <a href="https://www.goodreads.com/user/show/768192-jlord" target="_blank">Goodreads</a> to keep track of books I've read but their API is not stellar and they can't provide links to cover images which is a must-have for a shelf view. Since I don't read at breakneck speeds I just made a <a href="https://docs.google.com/spreadsheets/d/1U6lCkkT_kyY_uUyBIqv-cArdF0vUyXFTMkPDPGNPYcE/edit?usp=sharing" target="_blank">spreadsheet</a> myself with information from my Goodreads data and links to cover art.</p>

<p>That spreadsheet is turned into JSON with my <a href="https://spreadsheet.glitch.me" target="_blank">tool</a> that does the spreadsheet-to-JSON conversion for you. This site is built with <a href="https://www.11ty.dev" target="_blank">Eleventy</a> so I created a template in the HTML that uses that JSON data. You can go directly the template and <a href="https://glitch.com/edit/#!/veil-look?path=src/_includes/posts/2020-books.md" target="_blank">see the code on Glitch</a>.</p>

<h3>Here are the steps to updating this page after finishing a book:</h3>

<ol>
  <li>Add a row to <a href="https://docs.google.com/spreadsheets/d/1U6lCkkT_kyY_uUyBIqv-cArdF0vUyXFTMkPDPGNPYcE/edit?usp=sharing" target="_blank">my spreadsheet</a> for the finished book.</li>
  <li>Generate JSON for the updated spreadsheet with <code>https://spreadsheet.glitch.me/?key=SPREADSHEETKEYHERE</code>.</li>
  <li>Copy and paste the updated JSON into the file <code>books.json</code>, <a href="https://glitch.com/edit/#!/veil-look?path=src/_data/2020Books.json" target="_blank">see the file in Glitch</a>.</li>
  <li>Use Git to commit the changes and push them to Glitch, or do it directly in Glitch with automatic deploys.</li>
</ol>

There's a duplicate copy of <a href="https://github.com/jlord/veil-look" target="_blank">this site's code on GitHub</a>.
