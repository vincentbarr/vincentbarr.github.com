---
layout: default
title: Vincent Barr
comments: false
---
{% include JB/setup %}

##I will write about things here. Hopefully, someone (including myself) finds a bit of value in reading them.

<ul class="posts">
{% for post in site.posts %}
<li><a href=" {{ BASE_PATH }} {{ post.url }} "> {{ post.title }} ></a></li>
<p>{{ post.excerpt }}</p>
{% endfor %}
</ul>
