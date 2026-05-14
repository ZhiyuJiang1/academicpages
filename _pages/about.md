---
permalink: /
title: "About me"
excerpt: "About me"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<div class="profile-hero">
  <div class="profile-hero__name">Zhiyu Jiang</div>
  <div class="profile-hero__role">Specially Appointed Researcher · QIQB, The University of Osaka</div>
  <div class="profile-hero__fields">Theoretical Condensed Matter Physics · Computational Physics</div>
</div>

I am currently a Specially Appointed Researcher in the group of [Prof. Hiroshi Ueda](https://researchmap.jp/hiroshi_ueda) at the Center for Quantum Information and Quantum Biology (QIQB), The University of Osaka. Within Prof. Ueda's project, ["Quantum-classical fusion mediated by tensor network"](https://www.jst.go.jp/kisoken/crest/project/1111119/1111119_2024.html), I study how tensor-network methods can advance our understanding of quantum many-body phenomena and contribute to the development of quantum computation and quantum algorithms.

My research interests are in theoretical condensed matter physics, with particular emphasis on open quantum systems, non-Hermitian physics, quantum walks, tensor networks, and topological phases. In my previous work, conducted in collaboration with my doctoral advisor, [Prof. Hideaki Obuse](https://researchmap.jp/hideaki.obuse), I investigated the topological properties of non-Hermitian systems and their simulation through non-unitary quantum walks.

Based in Toyonaka, Osaka, Japan, and originally from Shenyang, China, I work in English, Chinese, and Japanese, and I welcome academic communication across disciplines and international research communities.

<div class="profile-card profile-card--accent">
  <strong class="profile-card__title">Research interests</strong>
  <div class="profile-badge-group">
    <span class="profile-badge">Open quantum systems</span>
    <span class="profile-badge">Non-Hermitian physics</span>
    <span class="profile-badge">Quantum walks</span>
    <span class="profile-badge">Topological physics</span>
    <span class="profile-badge">Tensor networks</span>
    <span class="profile-badge">Quantum algorithms</span>
    <span class="profile-badge">Quantum computing</span>
  </div>
</div>

## Latest News

<div class="profile-card profile-card--soft">
  <div class="profile-news">
    {% for item in site.data.news.items limit:3 %}
      <div class="profile-news__item">
        <div class="profile-news__date">{{ item.date }}</div>
        <div class="profile-news__text">{{ item.text }}</div>
      </div>
    {% endfor %}
  </div>
  <a class="profile-card__footer-link" href="{{ '/news/' | relative_url }}">View all news →</a>
</div>

## Contact

<div class="profile-card">
  <div class="profile-contact-grid">
    <div>
      <div class="profile-label">Email</div>
      <div><a href="mailto:jiang.zhiyu.qiqb@osaka-u.ac.jp">jiang.zhiyu.qiqb@osaka-u.ac.jp</a></div>
    </div>
    <div>
      <div class="profile-label">Address</div>
      <div>Toyonaka Co-Creation Building 707<br>
      1-2 Machikaneyama-cho<br>
      Toyonaka, Osaka 560-0053, Japan</div>
    </div>
  </div>
</div>

## Links

<div class="profile-links-shell">
  <div class="profile-link-grid">
    <div class="profile-link-card">
      <div class="profile-link-card__title">Current affiliation</div>
      <div class="profile-link-list">
        <a class="profile-link-item profile-link-item--primary" href="https://www.osaka-u.ac.jp/ja">The University of Osaka</a>
        <a class="profile-link-item profile-link-item--secondary" href="https://qiqb.osaka-u.ac.jp/">Center for Quantum Information and Quantum Biology (QIQB)</a>
      </div>
    </div>
    <div class="profile-link-card">
      <div class="profile-link-card__title">Academic background</div>
      <div class="profile-link-list">
        <a class="profile-link-item profile-link-item--primary" href="https://www.hokudai.ac.jp/">Hokkaido University</a>
        <a class="profile-link-item profile-link-item--secondary" href="https://www.eng.hokudai.ac.jp/graduate/">Faculty / Graduate School of Engineering</a>
        <a class="profile-link-item profile-link-item--secondary" href="https://applphys.net/div/">Division of Applied Physics</a>
        <a class="profile-link-item profile-link-item--tertiary" href="https://subutu-ap.eng.hokudai.ac.jp/index.html">Laboratory of Condensed Matter Physics</a>
        <a class="profile-link-item profile-link-item--tertiary" href="https://ssp-ap.eng.hokudai.ac.jp/">Laboratory of Solid States Physics</a>
      </div>
    </div>
  </div>
</div>
