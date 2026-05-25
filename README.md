# Soumya Glow 🌿

> *Food for your skin — handcrafted herbal soap brand website.*

## File Structure

```
somyaglow/
├── index.html      ← Main page (all sections)
├── styles.css      ← All styles & responsive layout
├── script.js       ← Data, rendering, interactions
└── images/
    ├── hero.png
    ├── aloe.png
    ├── coffee.png
    ├── coffee-charcoal.png
    ├── haldi.png
    ├── multani.png
    ├── neem-charcoal.png
    ├── rose.png
    ├── all-soap.png.jpeg
    └── our-story.png.jpeg
```

## Deploy to GitHub Pages

### Step 1 — Create the repository
1. Go to [github.com/Titixakamani21](https://github.com/Titixakamani21)
2. Click **New repository**
3. Name it: `somyaglow` *(or `soumya-glow`)*
4. Set to **Public**
5. Click **Create repository**

### Step 2 — Upload files
**Option A — GitHub web UI (no terminal needed):**
1. Inside the new repo, click **Add file → Upload files**
2. Drag and drop `index.html`, `styles.css`, `script.js`
3. Click **Commit changes**
4. Then click **Add file → Upload files** again
5. Create an `images/` folder by typing `images/` before the filename in the upload dialog
6. Upload all images inside it
7. Commit

**Option B — Git CLI:**
```bash
git clone https://github.com/Titixakamani21/somyaglow.git
cd somyaglow
# copy your files here
git add .
git commit -m "Initial site launch"
git push origin main
```

### Step 3 — Enable GitHub Pages
1. Go to your repo → **Settings → Pages**
2. Under **Source**, select **Deploy from a branch**
3. Branch: `main` / Folder: `/ (root)`
4. Click **Save**

Your site will be live at:
```
https://titixakamani21.github.io/somyaglow/
```
*(takes ~1–2 minutes after first deploy)*

---

## Customisation Quick Reference

| What to change | Where |
|---|---|
| Product names, prices, descriptions | `script.js` → `SOAPS` array |
| Gift hamper details | `script.js` → `HAMPERS` array |
| Testimonials | `script.js` → `TESTIMONIALS` array |
| WhatsApp number | `script.js` + `index.html` (search `919423569932`) |
| Instagram handle | `index.html` (search `soumya.glow`) |
| Colors / fonts | `styles.css` → `:root` variables |
| Hero background image | `styles.css` → `.hero-bg` |