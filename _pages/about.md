---
permalink: /
title: "About me"
excerpt: "About me"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

I am currently an Appointed Researcher in the group of [Prof. Hiroshi Ueda (上田 宏)](https://researchmap.jp/hiroshi_ueda) at the Center for Quantum Information and Quantum Biology (QIQB), The University of Osaka. Within Prof. Ueda's project, ["Quantum-classical fusion mediated by tensor network"](https://www.jst.go.jp/kisoken/crest/project/1111119/1111119_2024.html), I study how tensor-network methods can advance our understanding of quantum many-body phenomena and contribute to the development of quantum computation and quantum algorithms.

My research interests are in theoretical condensed matter physics, with particular emphasis on open quantum systems, non-Hermitian physics, quantum walks, tensor networks, and topological phases. In my previous work, conducted in collaboration with my doctoral advisor, [Prof. Hideaki Obuse (小布施 秀明)](https://researchmap.jp/hideaki.obuse), I investigated the topological properties of non-Hermitian systems and their simulation through non-unitary quantum walks.

Based in Toyonaka, Osaka, Japan, and originally from Shenyang, China, I work in English, Chinese, and Japanese, and I welcome academic communication across disciplines and international research communities.

<div style="margin: 1.2rem 0 1.8rem 0; padding: 0.9rem 1.1rem; border-left: 4px solid #5b8def; background: #f8fbff;">
<strong>Research interests:</strong> Open quantum systems, non-Hermitian physics, quantum walks, tensor networks, and topological phases.
</div>

## Latest News

<ul>
  {% for item in site.data.news.items limit:3 %}
    <li><strong>{{ item.date }}</strong>: {{ item.text }}</li>
  {% endfor %}
</ul>

<p><a href="{{ '/news/' | relative_url }}">View all news →</a></p>

## Contact

<div style="margin: 0.8rem 0 1.5rem 0; padding: 1rem 1.2rem; border: 1px solid #e5e7eb; border-radius: 8px; background: #fafafa;">
<strong>Email</strong><br>
jiang.zhiyu.qiqb@osaka-u.ac.jp

<br><br>
<strong>Address</strong><br>
Center for Quantum Information and Quantum Biology (QIQB)<br>
The University of Osaka<br>
Toyonaka Co-Creation Building 707<br>
1-2 Machikaneyama-cho<br>
Toyonaka, Osaka 560-0053, Japan
</div>

## Links

<div style="margin: 1rem 0 1.5rem 0; padding: 1.25rem 1.4rem; border-top: 1px solid #e5e7eb; border-bottom: 1px solid #e5e7eb;">
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.5rem 2rem;">
    <div>
      <div style="font-weight: 700; margin-bottom: 0.8rem;">Current affiliation</div>
      <ul style="list-style: none; padding-left: 0; margin: 0; line-height: 1.9;">
        <li><a href="https://www.osaka-u.ac.jp/ja">The University of Osaka</a></li>
        <li style="padding-left: 1rem;"><a href="https://qiqb.osaka-u.ac.jp/">Center for Quantum Information and Quantum Biology (QIQB)</a></li>
      </ul>
    </div>
    <div>
      <div style="font-weight: 700; margin-bottom: 0.8rem;">Academic background</div>
      <ul style="list-style: none; padding-left: 0; margin: 0; line-height: 1.9;">
        <li><a href="https://www.hokudai.ac.jp/">Hokkaido University</a></li>
        <li style="padding-left: 1rem;"><a href="https://www.eng.hokudai.ac.jp/graduate/">Faculty / Graduate School of Engineering</a></li>
        <li style="padding-left: 2rem;"><a href="https://applphys.net/div/">Division of Applied Physics</a></li>
        <li style="padding-left: 3rem;"><a href="https://subutu-ap.eng.hokudai.ac.jp/index.html">Laboratory of Condensed Matter Physics</a></li>
        <li style="padding-left: 3rem;"><a href="https://ssp-ap.eng.hokudai.ac.jp/">Laboratory of Solid States Physics</a></li>
      </ul>
    </div>
  </div>
</div>
