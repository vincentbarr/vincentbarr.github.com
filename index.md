---
layout: default
title: Vincent Barr
comments: false
---
{% include JB/setup %}

##I'm interested in a lot of things.

<ul class="posts">
{% for post in site.posts %}
<p><a href=" {{ post.url }} "> {{ post.title }}</a>
{{ post.excerpt }}</p>
{% endfor %}
</ul>