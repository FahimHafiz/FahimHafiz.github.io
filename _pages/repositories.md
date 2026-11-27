---
layout: page
permalink: /repositories/
title: Project Repositories
nav: true
nav_order: 4
---

Selected public repositories covering my research, implementations, and learning resources. [Browse all my repositories on GitHub](https://github.com/FahimHafiz?tab=repositories).

<style>
.project-repo-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr)); gap: 1.25rem; margin: 1.5rem 0; }
.project-repo-card { border: 1px solid var(--global-divider-color); border-radius: 8px; padding: 1.25rem; }
.project-repo-card h2 { font-size: 1.2rem; margin: .5rem 0 .75rem; }
.project-repo-card p { margin-bottom: .75rem; }
.project-repo-card .project-area { font-size: .85rem; color: var(--global-text-color-light); }
.project-repo-card a { overflow-wrap: anywhere; }
</style>

<div class="project-repo-grid">
{% for project in site.data.project_repositories %}
<section class="project-repo-card">
  <span class="project-area">{{ project.area | escape }}</span>
  <h2>{{ project.title | escape }}</h2>
  <p>{{ project.description | escape }}</p>
  <a href="https://github.com/{{ project.repository | escape }}">View {{ project.repository | split: '/' | last | escape }} on GitHub &rarr;</a>
</section>
{% endfor %}
</div>
