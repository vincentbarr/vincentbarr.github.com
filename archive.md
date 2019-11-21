---
layout: page
title: Writing
permalink: writing/
---

{% for post in site.posts %}
[ {{ post.title }} ]({{ post.url }})<br> <small>{{ post.date | date_to_string}}</small>
{% endfor %}