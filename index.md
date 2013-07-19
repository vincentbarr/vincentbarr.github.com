---
layout: default
title: Vincent Barr
comments: false
---
{% include JB/setup %}

##I will write about things here. Hopefully, someone (including myself) finds a bit of value in reading them.

<div class="blog-index">
	{% assign post = site.posts.first %}
	  {% assign content = post.content %}
	  {% include post_detail.html %}
</div>

