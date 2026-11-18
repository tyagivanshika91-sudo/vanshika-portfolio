# Vanshika Tyagi: Portfolio Website (redesign)

A one-page static portfolio built with HTML, CSS and vanilla JavaScript. No build step, backend, paid service or API. It works on free GitHub Pages hosting.

Live site: https://tyagivanshika91-sudo.github.io/vanshika-portfolio/

## Files

```
index.html                                  (page content, must stay in the repository root)
style.css                                   (design, responsive layout, animations)
script.js                                   (mobile menu, active nav link, scroll reveals, footer year)
Vanshika_Tyagi_Business_Analyst_Resume.pdf  (resume for the Download Resume button)
README.md                                   (this file)
```

## Update your live site with this redesign

1. Unzip `vanshika-portfolio-redesign.zip`.
2. Open your repository on GitHub: `https://github.com/tyagivanshika91-sudo/vanshika-portfolio`.
3. Click **Add file**, then **Upload files**.
4. Drag the files from inside the unzipped folder (not the folder itself) into the page. Files with the same name will be replaced.
5. Scroll down and click **Commit changes**.
6. Wait 1 to 3 minutes, then open the live site and do a hard refresh (Ctrl+Shift+R, or Cmd+Shift+R on Mac).

GitHub Pages settings do not need to change: Source stays **Deploy from a branch**, branch **main**, folder **/ (root)**.

## Resume button

The button points to `Vanshika_Tyagi_Business_Analyst_Resume.pdf`, which must sit next to `index.html`. To update your resume, replace the PDF with a new one that has exactly the same name.

## Editing tips

- Colours and fonts are variables at the top of `style.css` (`:root`).
- The four figures in the hero panel (7,043, 26.54%, 336,776, 1,000) come from your projects. If a project changes, update them in `index.html` too.
- The Process Bottleneck card is labelled as simulated data. Keep that label and the limitation note.
- Animations switch off automatically for visitors who set "reduce motion" on their device.

## Troubleshooting

- **Still see the old design:** hard refresh, or wait another minute for GitHub Pages to rebuild.
- **404 page:** `index.html` is inside a sub-folder. Move the files to the top level of the repository.
- **Resume says "File not found":** the PDF is missing or named differently. The name is case-sensitive.
