# Vanshika Tyagi: Portfolio Website

A one-page static portfolio built with HTML, CSS and vanilla JavaScript. It needs no build step, backend or paid service, and works on free GitHub Pages hosting.

## Files

```
vanshika-portfolio/
├── index.html                                  (page content)
├── style.css                                   (design)
├── script.js                                   (mobile menu, active link, footer year)
├── Vanshika_Tyagi_Business_Analyst_Resume.pdf  (resume for the Download button)
└── README.md                                   (this file)
```

## Resume button

The **Download Resume** button points to `Vanshika_Tyagi_Business_Analyst_Resume.pdf`, so the PDF must sit in the **same folder as `index.html`**. A copy of the resume is already included. To update it later, replace that file with a new PDF using exactly the same name.

## Publish on GitHub Pages (free)

1. Sign in at https://github.com (your username is `tyagivanshika91-sudo`).
2. Click the **+** at the top right, then **New repository**.
3. Repository name: `tyagivanshika91-sudo.github.io` gives you the shortest address. Any other name such as `portfolio` also works.
4. Choose **Public**. Leave "Add a README" unticked. Click **Create repository**.
5. On the empty repository page, click **uploading an existing file**.
6. Open the `vanshika-portfolio` folder on your computer, select **all the files inside it** (not the folder itself) and drag them into the GitHub page. `index.html` must be at the top level of the repository.
7. Wait until all five files finish uploading, then click **Commit changes**.
8. Open the **Settings** tab, then **Pages** in the left menu.
9. Under **Build and deployment**, set **Source** to **Deploy from a branch**, **Branch** to **main**, folder **/ (root)**, then click **Save**.
10. Wait 1 to 3 minutes and refresh the Pages screen. A green box shows your live link.

Your site will be at:
- `https://tyagivanshika91-sudo.github.io/` if you used the repository name from step 3, or
- `https://tyagivanshika91-sudo.github.io/<repository-name>/` for any other name.

## Updating the site later

Open the file on GitHub, click the pencil icon, edit, then **Commit changes**. The site refreshes in a minute or two.

## Troubleshooting

- **404 page:** `index.html` is probably inside a sub-folder. Upload the files so they sit at the top level.
- **Resume button shows "File not found":** the PDF is missing or named differently. The name is case-sensitive.
- **Old version still showing:** do a hard refresh (Ctrl+Shift+R, or Cmd+Shift+R on Mac).
