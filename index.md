---
layout: default
title: Vincent Barr
header: Vincent Barr
---
{% include JB/setup %}

##I will write about things here. Hopefully, someone (including myself) finds a bit of value in reading them.

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

<div class="blog-index">
	{% assign post = site.posts.first %}
	  {% assign content = post.content %}
	  {% include post_detail.html %}
</div>

