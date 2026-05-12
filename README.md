# The Camp Kids — Website

Static site for [thecampkids.com](https://www.thecampkids.com).
Deployed via Railway from this GitHub repo.

## Pages

- `index.html` — Home
- `characters.html` — Meet the crew (12 characters)
- `concepts.html` — The 5 EQ concepts
- `camps.html` — Summer camp details + signup form
- `store.html` — Store (coming soon)
- `socials.html` — Instagram + email

## Structure

```
campkids-site/
├── index.html
├── characters.html
├── concepts.html
├── camps.html
├── store.html
├── socials.html
├── styles.css         ← shared stylesheet for all pages
├── scripts.js         ← shared JS (fireflies, stars, mobile nav)
├── package.json
├── railway.json
├── .gitignore
├── characters/        ← 12 character SVGs
├── concepts/          ← 5 concept SVGs
└── misc/              ← patch, group scene, treasure map, classroom photo
```

## Local preview

```bash
npx serve .
```
