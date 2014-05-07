---
layout: default
title: Blog
group: navigation
---
<div id="blog-index">
  <h1>Posts</h1>
    {% for post in site.posts %}
      <p><a href="{{ post.url }}">{{ post.title }}</a></p>
    {% endfor %}
</div>

<a href="https://plus.google.com/+VincentBarr0?rel=author"></a>