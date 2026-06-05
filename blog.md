---
layout: default
title: Blog
permalink: /blog/
---

<h1>Blog</h1>

<ul class="post-list">
  {% for post in site.posts %}
    <li>
      <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
      <p class="post-date">{{ post.date | date: "%B %d, %Y" }}</p>
      {% if post.excerpt %}
        <p>{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
      {% endif %}
      <a href="{{ post.url | relative_url }}" class="read-more">Read full article →</a>
    </li>
  {% endfor %}
</ul>
