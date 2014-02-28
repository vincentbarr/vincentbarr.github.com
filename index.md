---
layout: default
title: "Vincent Barr"
comments: false
---
{% include JB/setup %}
<head>
<meta property="twitter:account_id" content="130719074" />
</head>
<h2 style="border: 0">Much like other human beings, I'm a human being.</h2>

<p>Site is under development. Bear with me.</p>

###Recent posts:

{% for post in site.posts %}
<ul class="posts">
<p><h3><a href=" {{ post.url }} ">{{ post.title }}</a></h3>
{{ post.excerpt }}</p>
</ul>
{% endfor %}

_This site is a work in progress. I've built it on Jekyll & it's hosted on [GitHub](https://github.com/vincentbarr/vincentbarr.github.com)._
