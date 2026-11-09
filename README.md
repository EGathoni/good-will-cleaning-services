# Good Will Cleaning Services

Responsive single-page portfolio site in HTML, CSS and vanilla JavaScript. Preview by opening `index.html` in a browser. Hosted Google Fonts and Unsplash photography need an internet connection. Replace hosted photography with approved, licensed local files before deployment.

Edit `content.js` to update the service list and client names. Client names are typographic placeholders because official logo files were not supplied. Confirm the client relationships and approve public use of the names before publication. Contact links are configured there for telephone, WhatsApp and email.

The quote form validates required fields and prepares an email through the visitor's mail app. It does not send the enquiry or show a false submission success. Connect a backend for server-side delivery.

## Files

- `index.html`, `styles.css`, `script.js` — page, responsive styling, interactions.
- `content.js` — editable service, client and contact data.
- `assets/logo/` — editable transparent SVG logo variants.
- `brand-guide.md` — identity and usage guidance.

## Cloudflare Pages

Connect this repository to a new Pages project with:

- Framework preset: None
- Production branch: `main`
- Build command: `exit 0`
- Build output directory: `.`
- Root directory: `/`

The site is static HTML, CSS and JavaScript; `index.html` is at the repository root. Complete the GitHub connection and first deployment in Cloudflare Pages. No Cloudflare project or DNS settings were changed during preparation.
