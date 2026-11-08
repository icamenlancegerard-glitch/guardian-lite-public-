# Guardian Lite static website

This folder contains a framework-free, static website for the public Guardian Lite project.

## Contents

- \`index.html\` — single-page project overview, evidence summary, and design-partner information.
- \`styles.css\` — responsive styling, including mobile layouts and reduced-motion support.
- \`script.js\` — accessible mobile navigation only.
- \`favicon.svg\` — local site icon.
- \`_headers\` — baseline security headers for Cloudflare Pages.

## Local preview

Open \`index.html\` in a browser, or serve this folder with any static file server. There is no build step and no package installation.

## Cloudflare Pages settings (not deployed)

When deployment is explicitly approved:

- Connect the public repository.
- Set the production branch only after review and approval.
- Set the project root directory to \`website\`.
- Build command: leave empty.
- Build output directory: \`.\`.
- No environment variables are required.

Do not configure a custom domain or change DNS without explicit approval.

## Privacy and runtime

The site is static. It has no backend, database, form submission, analytics, tracking pixels, external font dependency, or third-party JavaScript. The design-partner CTA opens a GitHub issue page in the public project repository.

## Claim boundaries

The website intentionally describes M0 as controlled runtime evidence and M1-A as evidence-only work. It does not claim production readiness, independent security review, certification, universal bypass prevention, or live payment integration.

The architecture illustration is conceptual. The website is an evidence overview, not a live interactive product demo.