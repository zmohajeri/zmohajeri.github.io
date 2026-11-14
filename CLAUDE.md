# CLAUDE.md — Zahra Mohajeri's website

Personal writing site of Zahra Mohajeri (زهرا مهاجری), Iranian journalist and short story writer.
Jekyll, hosted on GitHub Pages at https://zmohajeri.github.io (repo `zmohajeri/zmohajeri.github.io`, branch `main`).
Content was migrated from her old Wix site (zmohajeri.wixsite.com/zmohajeri) and from her Telegram channel (t.me/zar_neveshtt).

## Talking with the owner

- She writes in Persian, casually. Reply in Persian, in plain, friendly language, no jargon.
- She sends posts by pasting text (often copied from Telegram or news sites) plus a date, sometimes an image.
- After publishing, tell her briefly: where it went, the date used, any title you chose, and exactly what you removed or changed. Ask about anything you were unsure of.

## Site structure

| Section | Where files go | URL | Use for |
|---|---|---|---|
| English magazine (Golden Glyph) | `en/_posts/` | `/en/` | English essays, reviews, travel |
| The Librarian's Notebook | `_notebook/` | `/en/librarians-notebook/` | English writing about libraries, reading, librarianship (her field). Front matter: title, date, cover, excerpt (kicker/topic/layout come from defaults) |
| Persian magazine (زرنوشت) | `fa/_posts/` | `/fa/` | Persian reports (گزارش), film reviews (معرفی فیلم), notes (یادداشت), interviews (گفت‌وگو) |
| روزنوشت (journal) | `_rooznevesht/` | `/fa/rooznevesht/` | Posts tagged #روز_نوشت |
| چهارشنبه‌ها با کتاب (book intros) | `_ketab/` | `/fa/chaharshanbe-ha-ba-ketab/` | Posts tagged #چهارشنبه_ها_با_کتاب, or any book introduction |
| برشی از داستان (story excerpts) | `_boresh/` | `/fa/boreshi-az-dastan/` | Posts tagged #برشی_از_داستان (excerpts of her own fiction) |
| About | `en/about.md`, `fa/about.md` | `/en/about/`, `/fa/about/` | Bio |

- `/en/` and the English half of the home page also include `_notebook` entries. More English sections may be added later (she has no ideas yet).
- `/fa/` and the Persian half of the home page merge `fa/_posts` with all three collections (sorted by date), each with its own filter chip. Film reviews stay in `fa/_posts` with kicker/topic `معرفی فیلم` (decided: no separate section).
- Home page (`index.html`) is split: English half / Persian half. Site names: **Golden Glyph** (English, with a gold quill SVG `_includes/glyph.html`) and **زرنوشت** (Persian). Her name appears in the bylines, footer and About pages.
- Interface strings for both languages: `_data/ui.yml`. Styles: `assets/style.css`. Layouts: `_layouts/`, includes: `_includes/`.

## Front matter templates

Persian or English magazine post (`fa/_posts/YYYY-MM-DD-latin-slug.md`):

```yaml
---
layout: post
title: "…"
date: 2017-07-31 10:00:00 -0400
kicker: "گزارش"          # small label: گزارش / معرفی فیلم / یادداشت / گفت‌وگو / کتاب ; English: Essay, Film, Travel…
topic: "گزارش"           # filter chip on the section page (English topics: Travel, Culture, Film & Books, Essays, Stories)
cover: "/assets/img/covers/slug.jpg"   # or "" if no image
cover_fit: contain        # only for portrait images (posters, book covers) so they are not cropped
image: "/assets/img/covers/slug.jpg"   # same as cover (social share image); omit if no cover
excerpt: "first sentence or two"
source_name: "همشهری آنلاین"          # if originally published elsewhere
source_label: "گزارش کامل را"          # optional; default wording is «مطلب را»
source_url: "https://…"
---
```

The source fields render at the end as «{label} از سایت {name} بخوانید.» with a link. She wants this line on anything first published elsewhere.

Journal entry (`_rooznevesht/YYYY-MM-DD-slug.md`): `title` (first ~9 words + "…" if untitled), `date`, optional `heading` (shown title), optional `cover`/`image`.
Book intro (`_ketab/…`): `title: "Book; Author"`, `book`, `author`, `date`, `cover`, `excerpt`. Quotes from the book go in `>` blockquotes.
Story excerpt (`_boresh/…`): `title`, `heading` (she asked Claude to choose one when missing), `date`, `excerpt`. Keep dialogue lines on separate lines (end each line with two spaces).

## Editing rules for pasted text

- Keep her words verbatim. Do not rewrite or "improve" sentences.
- Remove Telegram decoration: ✅ ❇️ 📚 🎞 🖍 🎤 emojis at paragraph starts, and hashtags like #روز_نوشت.
- Remove ads that get copied in from news sites (lines about cars, insurance, «خرید محصول», «ثبت‌نام و خرید», «حتما ببینید», links to unrelated pages). If unsure whether a line is hers, ask.
- Convert straight quotes "…" around Persian text to «…».
- Text copied from news sites often uses Arabic ي/ك: replace with Persian ی/ک (U+06CC, U+06A9) in that post.
- Typos: fix only obvious ones and only after she agrees. «معلومم شد» is intentional (colloquial), keep such forms.
- Section subheadings marked with `*` become `##` headings.
- A quoted speaker's long first-person account can go in a `>` blockquote; verse lines go in `<p class="poem">line<br>line</p>` (centered).
- If a post has no title, create a short one from her own text and tell her.
- Screenplays (she asked to have these polished and formatted): English magazine, kicker `Short screenplay`, topic `Stories`. Body is a `<div class="screenplay">` with `<p>` classes `sp-title`, `sp-by`, `sp-scene` (EXT./INT. heading), `sp-action`, `sp-char`, `sp-paren`, `sp-dial`, `sp-trans` (FADE IN/OUT); see `en/_posts/2022-11-09-invisible.md`. Courier Prime font.

## Dates

- She gives dates in English words or Persian (Jalali). Convert Jalali carefully and check the weekday she mentions matches.
- Use `10:00:00` with an Eastern offset (`-0400` summer, `-0500` winter). The config timezone is `America/Toronto`; never mention or display any location.
- Jekyll skips posts dated in the future: if a post is "today", make sure the time is already past (UTC), or use the previous evening.
- Book intros (چهارشنبه‌ها با کتاب) should fall on a Wednesday. If the given date is not a Wednesday, move it to that week's Wednesday and tell her (she asked for this).

## Images

- Save images to `assets/img/covers/<slug>.jpg` (convert webp/png to jpg with Pillow, quality ~86–90).
- Portrait images (posters, book covers): add `cover_fit: contain`. Landscape photos: default crop.
- Items without an image show as text cards in listings (no placeholder needed).

## Privacy

- Never write where she lives (city or country) anywhere on the site.
- Do not publish her email address. Contact on the site is only the Telegram channel link.
- Bios: the English About page includes membership in the International Association of Professional Writers and Editors; the Persian one does not (her choice). No software skills list (Photoshop/Premiere etc.) in either.

## SEO (set up Nov 2026)

- `<title>` on every page includes her name (see `_layouts/default.html`); schema.org Person data in `_includes/person.html` (home + About pages); `jekyll-sitemap`; `robots.txt`.
- `google1c0a51237369fd2f.html` at the root is the Google Search Console verification file. Do not delete it.
- Google Search Console is verified and the sitemap submitted.

## Build, check, publish

```bash
# local build (Gemfile targets GitHub Pages; bypass it locally)
JEKYLL_NO_BUNDLER_REQUIRE=true BUNDLE_GEMFILE=/nonexistent jekyll build -d <scratch>/site
```

If `jekyll` is not installed: `gem install --no-document jekyll jekyll-feed jekyll-seo-tag jekyll-sitemap kramdown-parser-gfm webrick` and run it via `ruby $(gem contents jekyll | grep 'exe/jekyll$')`.

- Before pushing, build and look at the page (Playwright screenshot), and check phone width (390px) has no horizontal scroll.
- Commit with author `zmohajeri <zmohajeri@users.noreply.github.com>` and push straight to `main`; GitHub Pages deploys in ~1 minute.
- Network: khabaronline.ir blocks this environment (ask her to paste text). Wix images are reachable at static.wixstatic.com.
