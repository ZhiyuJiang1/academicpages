---
layout: archive
title: ""
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

<div style="margin-bottom: 1.4rem; padding: 1rem 1.2rem; border-left: 4px solid #5b8def; background: #f8fbff; border-radius: 0 8px 8px 0;">
  <strong>Curriculum Vitae</strong><br>
  Research interests in non-Hermitian physics, quantum walks, tensor networks, and topological phases.
</div>

## Research Experience

<div style="margin: 0.8rem 0 1.4rem 0; padding: 1rem 1.2rem; border: 1px solid #e5e7eb; border-radius: 10px; background: #fcfcfd; box-shadow: 0 1px 2px rgba(0,0,0,0.03);">
<ul style="margin: 0; padding-left: 1.2rem;">
  <li><strong>Appointed Researcher</strong>, The University of Osaka, 2025.07–Now</li>
  <li><strong>Academic Researcher</strong>, Hokkaido University, 2025.05–2025.06</li>
  <li><strong>Research Student</strong>, Hokkaido University, 2021.10–2022.03</li>
</ul>
</div>

## Education

<div style="margin: 0.8rem 0 1.4rem 0; padding: 1rem 1.2rem; border: 1px solid #e5e7eb; border-radius: 10px; background: #fcfcfd; box-shadow: 0 1px 2px rgba(0,0,0,0.03);">
<ul style="margin: 0; padding-left: 1.2rem;">
  <li><strong>Ph.D.</strong>, Graduate School of Engineering, Hokkaido University, 2022.04–2025.03</li>
  <li><strong>M.S.</strong>, School of Physics, Dalian University of Technology, 2018.09–2021.06</li>
  <li><strong>B.S.</strong>, College of Science, Northeastern University (Shenyang), 2014.10–2018.06</li>
</ul>
</div>

## Awards and Scholarships

<div style="margin: 0.8rem 0 1.4rem 0; padding: 1rem 1.2rem; border: 1px solid #e5e7eb; border-radius: 10px; background: #fcfcfd; box-shadow: 0 1px 2px rgba(0,0,0,0.03);">
<ul style="margin: 0; padding-left: 1.2rem;">
  <li><strong>Third Prize in Poster Presentation at QuIST-VIII Conference</strong><br>QuIST-VIII Organizing Committee, August 2024</li>
  <li style="margin-top: 0.7rem;"><strong>Hokkaido University EXEX Doctoral Fellowship</strong><br>Hokkaido University, April 2024 – March 2025</li>
  <li style="margin-top: 0.7rem;"><strong>Hokkaido University DX Doctoral Fellowship</strong><br>Hokkaido University, April 2022 – March 2024</li>
</ul>
</div>

## Skills

<div style="margin: 0.8rem 0 1.4rem 0; padding: 1rem 1.2rem; border: 1px solid #e5e7eb; border-radius: 10px; background: #fcfcfd; box-shadow: 0 1px 2px rgba(0,0,0,0.03);">
<ul style="margin: 0; padding-left: 1.2rem;">
  <li>TOEIC Certified (Competent in Workplace English)</li>
  <li>Japanese-Language Proficiency Test (JLPT) N2 Level</li>
</ul>
</div>

## Publications

<div style="margin: 0.8rem 0 1.4rem 0; padding: 1rem 1.2rem; border: 1px solid #e5e7eb; border-radius: 10px; background: #fcfcfd; box-shadow: 0 1px 2px rgba(0,0,0,0.03);">
### Preprints
<ul>
{% assign preprints = site.publications | where: 'category', 'preprints' | sort: 'date' | reverse %}
{% for post in preprints %}
  {% include archive-single-cv.html %}
{% endfor %}
</ul>

### Journal Articles
<ul>
{% assign journal_articles = site.publications | where: 'category', 'manuscripts' | sort: 'date' | reverse %}
{% for post in journal_articles %}
  {% include archive-single-cv.html %}
{% endfor %}
</ul>
</div>

## Talks

<div style="margin: 0.8rem 0 1.4rem 0; padding: 1rem 1.2rem; border: 1px solid #e5e7eb; border-radius: 10px; background: #fcfcfd; box-shadow: 0 1px 2px rgba(0,0,0,0.03);">
<ul>{% for post in site.talks reversed %}
  {% include archive-single-talk-cv.html  %}
{% endfor %}</ul>
</div>

## Teaching

<div style="margin: 0.8rem 0 1.4rem 0; padding: 1rem 1.2rem; border: 1px solid #e5e7eb; border-radius: 10px; background: #fcfcfd; box-shadow: 0 1px 2px rgba(0,0,0,0.03);">
<ul>{% for post in site.teaching reversed %}
  {% include archive-single-cv.html %}
{% endfor %}</ul>
</div>
