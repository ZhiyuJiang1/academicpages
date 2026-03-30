---
permalink: /
title: "About me"
excerpt: "About me"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

I am currently an Appointed Researcher in [Prof. Hiroshi Ueda (上田 宏)](https://researchmap.jp/hiroshi_ueda)'s group at the Center for Quantum Information and Quantum Biology (QIQB), The University of Osaka. As part of Prof. Ueda's project, ["Quantum-classical fusion mediated by tensor network"](https://www.jst.go.jp/kisoken/crest/project/1111119/1111119_2024.html), I investigate how tensor-network methods can deepen our understanding of quantum many-body phenomena and serve as powerful tools for quantum computation and quantum algorithms.

My broader research interests lie in theoretical condensed matter physics, particularly in open quantum systems, non-Hermitian physics, quantum walks, and topological phases. In previous work, I studied the topological properties of non-Hermitian systems and simulated these effects using non-unitary quantum walks, in collaboration with my doctoral advisor, [Prof. Hideaki Obuse (小布施 秀明)](https://researchmap.jp/hideaki.obuse).

I am based in Toyonaka, Osaka, Japan, and originally from Shenyang, China. I work in English, Chinese, and Japanese, and I welcome academic communication across disciplines and cultures.

## News

<ul>
  {% for item in site.data.news.items limit:5 %}
    <li><strong>{{ item.date }}</strong>: {{ item.text }}</li>
  {% endfor %}
</ul>

{% assign total_news = site.data.news.items | size %}
{% if total_news > 5 %}
<details>
  <summary style="cursor:pointer; font-weight: bold; margin-top: 0.5em;">Earlier updates</summary>
  <ul>
    {% for item in site.data.news.items offset:5 %}
      <li><strong>{{ item.date }}</strong>: {{ item.text }}</li>
    {% endfor %}
  </ul>
</details>
{% endif %}

## Contact

jiang.zhiyu.qiqb@osaka-u.ac.jp

Center for Quantum Information and Quantum Biology (QIQB)  
The University of Osaka  
Toyonaka Co-Creation Building 707  
1-2 Machikaneyama-cho  
Toyonaka, Osaka 560-0053, Japan

## Links

- [The University of Osaka](https://www.osaka-u.ac.jp/ja)
  - [Center for Quantum Information and Quantum Biology (QIQB)](https://qiqb.osaka-u.ac.jp/)
- [Hokkaido University](https://www.hokudai.ac.jp/)
  - [Faculty / Graduate School of Engineering](https://www.eng.hokudai.ac.jp/graduate/)
    - [Division of Applied Physics](https://applphys.net/div/)
      - [Laboratory of Condensed Matter Physics](https://subutu-ap.eng.hokudai.ac.jp/index.html)
      - [Laboratory of Solid States Physics](https://ssp-ap.eng.hokudai.ac.jp/)
