---
layout: page
title: "Blog"
description: ""
---
{% include JB/setup %}

{% for post in site.posts %}
<li><a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}></a><span>{{ post.date | date: "%m-%d-%Y"}}</span></li>
<p>{{ post.excerpt }}</p>
{% endfor %}