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

<p>I built this site on Jekyll, and it's under development. <img src="/assets/images/Bear.png"> with me.</p>

###Recent posts:

{% for post in site.posts %}
<ul class="posts">
<p><h2><a href=" {{ post.url }} ">{{ post.title }}</a></h2>
{{ post.excerpt }}</p>
</ul>
{% endfor %}

<a href="https://plus.google.com/+VincentBarr0?rel=author"></a>