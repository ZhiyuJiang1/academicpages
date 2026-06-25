---
layout: archive
title: "Curriculum Vitae"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

<div class="cv-highlight">
  <strong class="cv-highlight__title">Research Fields</strong>
  <div class="cv-badge-row">
    <span class="cv-badge cv-badge--theory">Theoretical Condensed Matter Physics</span>
    <span class="cv-badge cv-badge--computational">Computational Physics</span>
  </div>
</div>

## Research Experience

<div class="cv-card">
  <div class="cv-stack">
    <div class="cv-item">
      <div class="cv-item__title">Specially Appointed Researcher</div>
      <div>Center for Quantum Information and Quantum Biology, The University of Osaka</div>
      <div class="cv-item__meta">2025.07–Now</div>
    </div>
    <div class="cv-item">
      <div class="cv-item__title">Academic Researcher</div>
      <div>Faculty of Engineering, Hokkaido University</div>
      <div class="cv-item__meta">2025.05–2025.06</div>
    </div>
    <div class="cv-item">
      <div class="cv-item__title">Research Student</div>
      <div>Faculty of Engineering, Hokkaido University</div>
      <div class="cv-item__meta">2021.10–2022.03</div>
    </div>
  </div>
</div>

## Education

<div class="cv-card">
  <div class="cv-stack">
    <div class="cv-item">
      <div class="cv-item__title">Ph.D. in Engineering (Applied Physics)</div>
      <div>Graduate School of Engineering, Hokkaido University</div>
      <div class="cv-item__meta">2022.04–2025.03</div>
    </div>
    <div class="cv-item">
      <div class="cv-item__title">Master of Science in Theoretical Physics</div>
      <div>School of Physics, Dalian University of Technology</div>
      <div class="cv-item__meta">2018.09–2021.06</div>
    </div>
    <div class="cv-item">
      <div class="cv-item__title">Bachelor of Science in Applied Physics</div>
      <div>College of Science, Northeastern University (Shenyang)</div>
      <div class="cv-item__meta">2014.10–2018.06</div>
    </div>
  </div>
</div>

## Awards and Scholarships

<div class="cv-card">
  <div class="cv-stack">
    <div class="cv-item">
      <div class="cv-item__title">Third Prize in Poster Presentation at QuIST-VIII Conference</div>
      <div>QuIST-VIII Organizing Committee</div>
      <div class="cv-item__meta">August 2024</div>
    </div>
    <div class="cv-item">
      <div class="cv-item__title">Hokkaido University EXEX Doctoral Fellowship</div>
      <div>Hokkaido University</div>
      <div class="cv-item__meta">April 2024 – March 2025</div>
    </div>
    <div class="cv-item">
      <div class="cv-item__title">Hokkaido University DX Doctoral Fellowship</div>
      <div>Hokkaido University</div>
      <div class="cv-item__meta">April 2022 – March 2024</div>
    </div>
  </div>
</div>

## Skills

<div class="cv-card">
  <div class="cv-stack cv-stack--compact">
    <div class="cv-item">TOEIC Certified (Competent in Workplace English)</div>
    <div class="cv-item">Japanese-Language Proficiency Test (JLPT) N2 Level</div>
  </div>
</div>

## Publications

<div class="cv-card">
  <div class="cv-section-title">Preprints</div>
  <ul class="cv-list">
  {% assign preprints = site.publications | where: 'category', 'preprints' | sort: 'date' | reverse %}
  {% for post in preprints %}
    {% include archive-single-cv.html %}
  {% endfor %}
  </ul>

  <div class="cv-section-title cv-section-title--spaced">Journal Articles</div>
  <ul class="cv-list cv-list--last">
  {% assign journal_articles = site.publications | where: 'category', 'manuscripts' | sort: 'date' | reverse %}
  {% for post in journal_articles %}
    {% include archive-single-cv.html %}
  {% endfor %}
  </ul>
</div>

## Talks

<div class="cv-card cv-card--list">
<ul class="cv-list cv-list--last">{% for post in site.talks reversed %}
  {% include archive-single-talk-cv.html  %}
{% endfor %}</ul>
</div>

## Teaching

<div class="cv-card cv-card--list">
<ul class="cv-list cv-list--last">{% for post in site.teaching reversed %}
  {% include archive-single-cv.html %}
{% endfor %}</ul>
</div>
