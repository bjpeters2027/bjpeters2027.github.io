# Brendon Peters | Portfolio

A responsive, static portfolio built with HTML, CSS, and a small JavaScript theme toggle. No framework, dependencies, build step, backend, or paid hosting is required.

The page keeps things brief: an introduction and interests, project summaries, a short work overview, and contact information. Full resume details are available in the linked PDF.

## Local preview

From the repository root, run:

```sh
python3 -m http.server 8000
```

Open http://localhost:8000. All portfolio content and navigation also work without JavaScript; JavaScript adds a saved light/dark theme preference and the current footer year.

## Free GitHub Pages deployment

1. Push the site files and the assets in [Files/](./Files/) to the repository's publishing branch.
2. In **Settings > Pages**, choose **Deploy from a branch**, select that branch, and choose **/ (root)**.
3. GitHub Pages serves the site at https://bjpeters2027.github.io/.

Asset paths are relative, so the site can also be hosted under a GitHub Pages project path. Update the canonical URL, social metadata in [index.html](./index.html), [robots.txt](./robots.txt), and [sitemap.xml](./sitemap.xml) if the public URL changes.

## Updating content

- Edit [index.html](./index.html) for experience, education, project descriptions, and contact links.
- Edit [style.css](./style.css) for colors, layouts, and responsive styles.
- Edit [script.js](./script.js) for the optional theme behavior.
- Resume content is based on [the September 2026 resume](./Files/BPeters_Resume_September_2026.pdf). When replacing it, update the resume link in the page.
- Keep the portrait at `Files/Profile-Picture.jpeg`, or update its page and social image URLs.

The site uses system fonts and local assets, with no external scripts, tracking, or font services. Contact links use email rather than a form that would require a backend. Project demos hosted elsewhere are external links; they are not required to run this portfolio.
