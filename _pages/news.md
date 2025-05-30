---
layout: archive
title: "News"
permalink: /news/
author_profile: true
---

{% include base_path %}


<div style="margin: 2em 0;">
  {% for post in site.news %}
    {% include archive-single.html %}
  {% endfor %}
</div>
