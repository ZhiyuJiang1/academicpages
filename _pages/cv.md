---
layout: archive
title: ""
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

<div style="margin-bottom: 1.5rem; padding: 1.05rem 1.2rem; border-left: 4px solid #5b8def; background: #f8fbff; border-radius: 0 10px 10px 0; box-shadow: 0 1px 2px rgba(0,0,0,0.03);">
  <strong style="display:block; margin-bottom:0.2rem;">Curriculum Vitae</strong>
  Research interests in non-Hermitian physics, quantum walks, tensor networks, and topological phases.
</div>

## Research Experience

<div style="margin: 0.9rem 0 1.5rem 0; padding: 1.15rem 1.3rem; border: 1px solid #e5e7eb; border-radius: 12px; background: #fcfcfd; box-shadow: 0 1px 2px rgba(0,0,0,0.03);">
  <div style="display:grid; gap:0.95rem;">
    <div style="padding-left:0.95rem; border-left:3px solid #e5e7eb;">
      <div style="font-weight:700;">Appointed Researcher</div>
      <div>The University of Osaka</div>
      <div style="color:#6b7280; font-size:0.95em;">2025.07–Now</div>
    </div>
    <div style="padding-left:0.95rem; border-left:3px solid #e5e7eb;">
      <div style="font-weight:700;">Academic Researcher</div>
      <div>Hokkaido University</div>
      <div style="color:#6b7280; font-size:0.95em;">2025.05–2025.06</div>
    </div>
    <div style="padding-left:0.95rem; border-left:3px solid #e5e7eb;">
      <div style="font-weight:700;">Research Student</div>
      <div>Hokkaido University</div>
      <div style="color:#6b7280; font-size:0.95em;">2021.10–2022.03</div>
    </div>
  </div>
</div>

## Education

<div style="margin: 0.9rem 0 1.5rem 0; padding: 1.15rem 1.3rem; border: 1px solid #e5e7eb; border-radius: 12px; background: #fcfcfd; box-shadow: 0 1px 2px rgba(0,0,0,0.03);">
  <div style="display:grid; gap:0.95rem;">
    <div style="padding-left:0.95rem; border-left:3px solid #e5e7eb;">
      <div style="font-weight:700;">Ph.D. in Engineering (Applied Physics)</div>
      <div>Graduate School of Engineering, Hokkaido University</div>
      <div style="color:#6b7280; font-size:0.95em;">2022.04–2025.03</div>
    </div>
    <div style="padding-left:0.95rem; border-left:3px solid #e5e7eb;">
      <div style="font-weight:700;">Master of Science in Theoretical Physics</div>
      <div>School of Physics, Dalian University of Technology</div>
      <div style="color:#6b7280; font-size:0.95em;">2018.09–2021.06</div>
    </div>
    <div style="padding-left:0.95rem; border-left:3px solid #e5e7eb;">
      <div style="font-weight:700;">Bachelor of Science in Applied Physics</div>
      <div>College of Science, Northeastern University (Shenyang)</div>
      <div style="color:#6b7280; font-size:0.95em;">2014.10–2018.06</div>
    </div>
  </div>
</div>

## Awards and Scholarships

<div style="margin: 0.9rem 0 1.5rem 0; padding: 1.15rem 1.3rem; border: 1px solid #e5e7eb; border-radius: 12px; background: #fcfcfd; box-shadow: 0 1px 2px rgba(0,0,0,0.03);">
  <div style="display:grid; gap:0.95rem;">
    <div style="padding-left:0.95rem; border-left:3px solid #e5e7eb;">
      <div style="font-weight:700;">Third Prize in Poster Presentation at QuIST-VIII Conference</div>
      <div>QuIST-VIII Organizing Committee</div>
      <div style="color:#6b7280; font-size:0.95em;">August 2024</div>
    </div>
    <div style="padding-left:0.95rem; border-left:3px solid #e5e7eb;">
      <div style="font-weight:700;">Hokkaido University EXEX Doctoral Fellowship</div>
      <div>Hokkaido University</div>
      <div style="color:#6b7280; font-size:0.95em;">April 2024 – March 2025</div>
    </div>
    <div style="padding-left:0.95rem; border-left:3px solid #e5e7eb;">
      <div style="font-weight:700;">Hokkaido University DX Doctoral Fellowship</div>
      <div>Hokkaido University</div>
      <div style="color:#6b7280; font-size:0.95em;">April 2022 – March 2024</div>
    </div>
  </div>
</div>

## Skills

<div style="margin: 0.9rem 0 1.5rem 0; padding: 1.15rem 1.3rem; border: 1px solid #e5e7eb; border-radius: 12px; background: #fcfcfd; box-shadow: 0 1px 2px rgba(0,0,0,0.03);">
  <div style="display:grid; gap:0.6rem;">
    <div style="padding-left:0.95rem; border-left:3px solid #e5e7eb;">TOEIC Certified (Competent in Workplace English)</div>
    <div style="padding-left:0.95rem; border-left:3px solid #e5e7eb;">Japanese-Language Proficiency Test (JLPT) N2 Level</div>
  </div>
</div>

## Publications

<div style="margin: 0.9rem 0 1.5rem 0; padding: 1.15rem 1.3rem; border: 1px solid #e5e7eb; border-radius: 12px; background: #fcfcfd; box-shadow: 0 1px 2px rgba(0,0,0,0.03);">
  <div style="font-weight:700; margin-bottom:0.65rem;">Preprints</div>
  <ul style="margin-top:0; margin-bottom:1rem;">
  {% assign preprints = site.publications | where: 'category', 'preprints' | sort: 'date' | reverse %}
  {% for post in preprints %}
    {% include archive-single-cv.html %}
  {% endfor %}
  </ul>

  <div style="font-weight:700; margin-bottom:0.65rem; margin-top:1rem;">Journal Articles</div>
  <ul style="margin-top:0; margin-bottom:0;">
  {% assign journal_articles = site.publications | where: 'category', 'manuscripts' | sort: 'date' | reverse %}
  {% for post in journal_articles %}
    {% include archive-single-cv.html %}
  {% endfor %}
  </ul>
</div>

## Talks

<div style="margin: 0.9rem 0 1.5rem 0; padding: 0.72rem 1.3rem 1.15rem 1.3rem; border: 1px solid #e5e7eb; border-radius: 12px; background: #fcfcfd; box-shadow: 0 1px 2px rgba(0,0,0,0.03);">
<ul style="margin:0 0 0 0;">{% for post in site.talks reversed %}
  {% include archive-single-talk-cv.html  %}
{% endfor %}</ul>
</div>

## Teaching

<div style="margin: 0.9rem 0 1.5rem 0; padding: 0.72rem 1.3rem 1.15rem 1.3rem; border: 1px solid #e5e7eb; border-radius: 12px; background: #fcfcfd; box-shadow: 0 1px 2px rgba(0,0,0,0.03);">
<ul style="margin:0 0 0 0;">{% for post in site.teaching reversed %}
  {% include archive-single-cv.html %}
{% endfor %}</ul>
</div>
