# Raja Sahu — Developer Portfolio

A single-page, terminal/SQL-themed portfolio site for Raja Sahu, an aspiring Software & Web Developer. Built with plain HTML, CSS, and JavaScript — no build step or framework required.

## Live Preview

Open `index.html` (or `portfolio-single-file.html`) directly in a browser, or serve the folder with any static file server.

## Project Structure

```
raja-sahu-portfolio/
├── index.html                    # Main site (links to style.css and script.js)
├── portfolio-single-file.html    # Standalone version — everything inlined into one HTML file
├── style.css                     # All site styling
├── script.js                     # Nav toggle, terminal typing effect, scroll behavior
├── assistant.js                  # Rule-based "chat with my resume" Q&A widget
└── assets/
    ├── profile.jpg                # Profile photo
    └── Raja_Sahu_Resume.docx      # Downloadable résumé
```

## Sections

- **Hero** — animated SQL-query terminal intro, name, tagline, résumé download, social links
- **About** — summary and background
- **Skills** — languages, web, databases, tools, concepts
- **Experience** — SQL/PL/SQL internship at MSME Tool Room, Kolkata
- **Projects** — e.g. IPL Player Performance Analysis
- **Education** — BCA (Honours), Kingston College of Science
- **Personality** — soft skills and work style
- **Contact** — email, phone, GitHub, LinkedIn

## Features

- Fully responsive, dependency-free (Google Fonts is the only external resource)
- Animated typed-SQL-query hero terminal, with `prefers-reduced-motion` support
- Mobile nav with toggle menu and scroll-based active-link indicator
- Built-in **résumé chatbot** (`assistant.js`): a keyword-matching assistant that answers visitor questions about skills, experience, projects, education, certifications, and more, sourced from a single editable `RAJA_KB` object
- `portfolio-single-file.html` — a fully self-contained copy (HTML+CSS+JS in one file) for easy sharing or hosting anywhere without asset paths breaking

## Customization

- **Content/résumé data:** edit the `RAJA_KB` object at the top of `assistant.js` — every chatbot answer is generated from it.
- **Colors/fonts/layout:** edit `style.css`.
- **Copy/sections:** edit directly in `index.html` (and mirror changes in `portfolio-single-file.html` if you keep that version in sync).
- **Résumé file:** replace `assets/Raja_Sahu_Resume.docx` with an updated version (keep the same filename, or update the `href` in `index.html`).

## Deployment

Since this is a static site, it can be deployed as-is to any static host, e.g.:
- GitHub Pages
- Netlify / Vercel
- Any basic web server (Apache, Nginx, etc.)

No build tools, package manager, or server-side code are required.

## Contact

- Email: kcsrajasahu@gmail.com
- GitHub: [github.com/RajaSahu89](https://github.com/RajaSahu89)
- LinkedIn: [linkedin.com/in/raja-sahu-05137a410](https://www.linkedin.com/in/raja-sahu-05137a410)
