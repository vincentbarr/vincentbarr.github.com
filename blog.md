---
layout: blog
title: Blog
group: navigation
---
<div id="blog-index">
  <h1>Posts</h1>
  <ul class="posts">
    {% for post in site.posts %}
      <li><a href="{{ post.url }}">{{ post.title }}</a><span>{{ post.date | date_to_string }}</span></li>
    {% endfor %}
  </ul>
</div>