---
layout: posts.njk
title: 2024 Books
date: 2025-01-06
tags: books
---
The books I read in 2024. See here for years [2019-2023](/../books) or you can go to [Goodreads](https://www.goodreads.com/jlord) for from whenever I started on there. Here's [how I build this page](#how).

## Highlights


A slow year but it is what it is (Long Covid). I _really_ didn't like _The Safekeep_, it felt like a Lifetime movie (no offense). I didn't like _Intermezzo_, either. I didn't feel a real sense of the brothers' grief was conveyed and things worked out too nicely, the girls so obliging. _Love's Work_ was meh, and _Second Place_ was not my favourite Cusk novel. And _The Prime of Miss Jean Brodie_ was perhaps cursed by being read with too high of expectations.

I always like a School of Life book so _A Therapeutic Journey_ hit the spot. _Wired for Love_ and _Autism is not a Disease_ were both interesting, the latter quite compelling and with shocking figures around how society treats neurodivergence.

I **loved**, as I always do, a Natalia Ginzburg book. _Valentino_ was great and I'm trying to pace myself so that I don't run out before [Daunt Books](https://dauntbookspublishing.co.uk/authors/natalia-ginzburg/) publishes another. I also **loved** _Loitering With Intent_, to a read-again-soon-degree. Happy to have read and loved my first Shirley Jackson with _We Have Always Lived in the Castle_.
<h3 id="book-shelf">2024 Shelf</h2>

<ul class="book-shelf-container">
  {%- for book in 2024Books -%}
    <li><a href="{{ book.GoodreadsURL }}">
      <img class="book" src="{{ book.CoverURL }}">
    </a></li>
  {%- endfor -%}
</ul>

<h3 id="book-shelf">2024 List</h2>

<div class="book-list-container">
  <table>
    <thead>
      <tr>
        <th>No.</th><th>Title</th><th>Author</th><th>Read</th><th>Category</th><th>Pages</th>
      </tr>
    </thead>
    <tbody>
      {%- for book in 2024Books -%}
      <tr>
        <td class="table-row-number"></td><td><a href="{{ book.GoodreadsURL }}">{{ book.Title }}</a></td><td>{{ book.Author }}</td><td>{{ book.Read }}</td><td>{{ book.Category }} <span class="meta-text">{{ book.SubCategory }}</span></td><td class="center">{{ book.Pages }}</td>
      </tr>
      {%- endfor -%}
    </tbody>
  </table>
</div>

<h3 id="how">How I Build This Page</h3>
<p>I keep a <a href="https://docs.google.com/spreadsheets/d/1pNIsIQr1g8eLaZzXttHr1vW2xkCN7A3aodU3TeIRkys/edit?usp=sharing" target="_blank">spreadsheet</a> of the books I read each year and I get the JSON of that spreadsheet and dump it into the <code>_data</code> <a href="https://github.com/jlord/jlord.github.io/tree/main/src/_data" target="_blank">directory</a> in the code for this site which is built on <a href="https://www.11ty.dev" target="_blank">Eleventy</a>. That data is then populates this page. The code is on <a href="https://github.com/jlord/jlord.github.io" target="_blank">GitHub</a>.</p>
