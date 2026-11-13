# zmohajeri.github.io

Personal writing site, built with Jekyll and hosted on GitHub Pages.

- `/` — home page with the English and Persian sections side by side
- `/en/` — English magazine (posts in `en/_posts/`)
- `/fa/` — Persian magazine, right-to-left (posts in `fa/_posts/`)

## Adding a new post

Create a file named `YYYY-MM-DD-short-title.md` in `en/_posts/` or `fa/_posts/`:

```
---
layout: post
title: "Post title"
date: 2026-11-13 10:00:00 -0500
kicker: "Travel"          # small label above the title
topic: "Travel"           # used by the topic filter on the section page
cover: "/assets/img/covers/short-title.jpg"   # optional
excerpt: "One or two sentences shown on the cards."
---

Your text here, in Markdown.
```

Put the cover image in `assets/img/covers/`. Commit, and GitHub Pages republishes the site in a minute or two.

## Changing the look

Layouts are in `_layouts/` and `_includes/`, styles in `assets/style.css`, and interface text for both languages in `_data/ui.yml`. Posts are never touched by a design change.
