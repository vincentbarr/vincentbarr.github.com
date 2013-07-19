---
layout: blog
title: Blog
group: navigation
---
BLOGGO
<div class="blog-index">
	{% assign post = site.posts %}
	  {% assign content = post.content %}
	  {% include post_detail.html %}
</div>