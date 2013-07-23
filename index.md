---
layout: default
title: "Vincent Barr"
comments: false
---
{% include JB/setup %}

<h2 style="border: 0">Much like other human beings, I'm a human being. Like other human beings, I have interests.</h2>

###Recent posts:
{% for post in site.posts %}
<ul class="posts">
<p><h3><a href=" {{ post.url }} ">{{ post.title }}</a></h3>
{{ post.excerpt }}</p>
</ul>
{% endfor %}

_This site is a work in progress, built on Jekyll & hosted on [GitHub](https://github.com/vincentbarr/vincentbarr.github.com)._