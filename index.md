---
layout: default
title: "Vincent Barr"
comments: false
---
{% include JB/setup %}

<h2 style="border: 0">Much like other human beings, I'm a human being.</h2>

<h4>Site is under development. Bare with me.</h4>

###Recent posts:
{% for post in site.posts %}
<ul class="posts">
<p><h3><a href=" {{ post.url }} ">{{ post.title }}</a></h3>
{{ post.excerpt }}</p>
</ul>
{% endfor %}

_This site is a work in progress, built on Jekyll & hosted on [GitHub](https://github.com/vincentbarr/vincentbarr.github.com)._