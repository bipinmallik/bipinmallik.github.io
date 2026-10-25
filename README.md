# Bipin Mallik — Portfolio

Three static pages built with HTML, CSS, and JavaScript, inspired by the supplied Sawad reference. Warm light and dark themes, a sticky desktop profile card, responsive mobile layout, illustrated avatar, icon navigation, and subtle entrance effects.

## Open and deploy

Open `index.html` in your browser. For consistent theme storage between pages, serve this folder locally with `python3 -m http.server 8000` and visit http://localhost:8000.

For GitHub Pages, upload this folder’s contents (including `.nojekyll`) into the repository root. In repository Settings → Pages, choose deployment from a branch and the root folder. There is no build step. Relative links work under repository subpaths.

## Structure

- `index.html`: Home, about, projects, client preview, internships, toolkit, contact.
- `projects.html`: Calculator and Benten.
- `freelancing.html`: The Seasons and future case studies.
- `assets/css/style.css`: Both themes, layouts, and responsive rules.
- `assets/js/theme.js`: Initial theme, applied before CSS to avoid a theme flash.
- `assets/js/main.js`: Theme button, preference persistence, and reveal effects.
- `assets/images/avatar.svg`: Original illustrated placeholder avatar, not a photo or claimed likeness.
- `assets/resume/`: Reserved for your resume PDF.

## Replace the avatar

Place your image in `assets/images/profile.jpg`. In all three HTML files, replace `assets/images/avatar.svg` with `assets/images/profile.jpg`, and replace its alt text with `Bipin Mallik`. A square portrait works best; object-fit handles cropping. The supplied avatar can be kept until then.

## Add your resume

Place the PDF at `assets/resume/bipin-mallik-resume.pdf`. Replace the disabled resume button in all three pages with:

```html
<a class="resume" href="assets/resume/bipin-mallik-resume.pdf" download>Download resume ↓</a>
```

## Content and appearance

The top-right sun icon switches themes. First visit follows the operating system preference; a chosen theme is saved when browser storage is available. Without JavaScript, the light layout and navigation remain usable. Reduced-motion preferences suppress entrance effects.

Poppins is loaded from Google Fonts; a local sans-serif fallback works offline. No framework or runtime dependencies are required. Decorative project graphics are illustrative, not screenshots. Project and client descriptions reflect the details provided by Bipin. Future client cards remain placeholders. Contact uses email links; there is no backend form.

To expand a case study, edit its section directly in the corresponding HTML file. Shared profile/navigation markup is deliberately included in each file so it works without JavaScript; update all three when making shared content changes.

## Verification

Local assets and anchors checked across all pages. Browser checks verified the mobile layout at 387px, navigation between pages, both theme states, and theme persistence. Full-width desktop visual QA was not available in the browser pane. The latest content update passed local asset and anchor checks; it has not received a new browser visual check.

## Latest content update

Added Calculator demo/source links, the Benten merged PR and contribution summary, The Seasons restaurant website scope, Elevate Web Studio, pursuing B.Tech wording, and X social links. HTML is formatted for editing. The portrait image frame uses a 4:5 aspect ratio.

Your locally added BMprofile.png was not available in the saved project. Keep your image in assets/images/BMprofile.png and change assets/images/avatar.svg to assets/images/BMprofile.png in all three HTML files. Set the image alt text to Bipin Mallik. Keep a backup of your local folder before replacing files so other personal edits are preserved.
