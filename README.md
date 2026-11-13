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

## روزنوشت (journal)

Journal entries live in `_rooznevesht/`, one file per entry, named `YYYY-MM-DD-short-name.md`:

```
---
date: 2024-05-10 09:00:00 -0400
heading: "Optional title"     # leave out for an untitled entry
cover: ""                     # optional image
---

Entry text in Markdown.
```

They appear on `/fa/rooznevesht/`, newest first and grouped by year, and each entry also gets its own page.

## چهارشنبه‌ها با کتاب (book introductions)

Book posts live in `_ketab/`, named `YYYY-MM-DD-short-name.md`:

```
---
title: "Book title; subtitle"
book: "Book title"
author: "Author or subtitle line"
date: 2017-08-09 10:00:00 -0400
cover: "/assets/img/covers/short-name.jpg"
---

Quotes from the book as > blockquotes, then the introduction.
```

They appear on `/fa/chaharshanbe-ha-ba-ketab/` as a shelf of covers, newest first.
