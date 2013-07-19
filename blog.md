---
layout: blog
title: Blog
group: navigation
---
BLOGGO
{% for post in site.posts %}
	{{ post.content }}
{% endfor %}