---
layout: posts.njk
title: 2019 Books
date: 2020-01-01
---

I set a goal of reading 12 books in 2019 and I read 19—how about that! There's a [shelf view](#book-shelf), then some ramblings on what I liked, then a [list view](#book-list) and lastly, a [how-to](#how-to-books), if you want to make a book page, too.

See [here for 2021]({{ '/reading' | url }}), [here for 2020]({{ '/posts/2020-books' | url }})

<h3 id="book-shelf">2019 Shelf</h3>
<ul class="book-shelf-container">
  {%- for book in 2019Books -%}
    <li><a href="{{ book.GoodreadsURL }}">
      <img class="book" src="{{ book.CoverURL }}">
    </a></li>
  {%- endfor -%}
</ul>

## Some Highlights

I read more Fiction than I have in many years combined! I enjoyed it, too. I really liked Sally Rooney's _Normal People_; I was sucked into the world she built and learned some handy Irish slang. _Fleishman Is in Trouble_, ruined me emotionally for two days (worth it).

Despite venturing away from Non-Fiction more often this year I still enjoyed some great tales of history: _The Professor and the Madman_ is the story of how the Oxford English Dictionary came to be and goes places you wouldn't expect; _King Cnut and the Viking Conquest of England_ is about Cnut, the first Danish King of England, and with this book I started the year true to my love for all this story touches (Denmark! Vikings! Medieval England!); the last book I read this year, _The Library Book_, tells the story of 1986 fire to the Los Angeles Public Library, the investigation, the restoration and the incredible and inner workings of a library.


I loved _The Art Detective_ because I love the BBC show Fake or Fortune and this book, by one of the hosts, Philip Mould, is the same sort of detective, restoration, and history tales as the show—which, tragically, I wasn't able to find the latest season of unofficially on YouTube this year.

I read my first Science Fiction books this year! _Exhalation_ was beautiful and thought provoking. _Ancillary Justice_ created an atmosphere that spilled into real life and merged with the music I was listening to on my commutes at the time.

I re-read _The Course of Love_ by School of Life's Alain de Botton. And I'd read it again! It uses the story of a fictional couple's marriage over the years to talk about the psychology of relationships and ourselves. _Love is a service_. I read a few more books from the School of Life, too. And I'll read more!

<h3 id="book-list">2019 List</h2>
<div class="book-list-container">
  <table>
    <thead>
      <tr>
        <th>No.</th><th>Title</th><th>Author</th><th>Read</th><th>Category</th><th>Pages</th>
      </tr>
    </thead>
    <tbody>
      {%- for book in 2019Books -%}
      <tr>
        <td class="table-row-number"></td><td><a href="{{ book.GoodreadsURL }}">{{ book.Title }}</a></td><td>{{ book.Author }}</td><td>{{ book.Read }}</td><td>{{ book.Category }} <span class="meta-text">{{ book.SubCategory }}</span></td><td class="center">{{ book.Pages }}</td>
      </tr>
      {%- endfor -%}
    </tbody>
  </table>
</div>
