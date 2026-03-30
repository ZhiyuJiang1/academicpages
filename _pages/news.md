---
layout: archive
title: "News"
permalink: /news/
author_profile: true
---

{% include base_path %}

<ul>
  {% for item in site.data.news.items %}
    <li><strong>{{ item.date }}</strong>: {{ item.text }}</li>
  {% endfor %}
</ul>
