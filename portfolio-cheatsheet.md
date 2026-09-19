# 📷 Photography Portfolio — Cheat Sheet

## 🖥️ Local Development

### Start the local server

```bash
cd ~/Documents/projects/website
npm run dev
```

Then open **http://localhost:4321/website** in your browser.
Stop the server with **Ctrl+C**.

---

## 📸 Adding New Photos

### Full workflow for new photos

```bash
# 1. Export photos from Lightroom to src/gallery/Wildlife/ (or other folder)

# 2. Navigate to project
cd ~/Documents/projects/website

# 3. Auto-generate gallery.yaml from new photos
npm run generate

# 4. Preview locally
npm run dev

# 5. When happy, push to GitHub
git add .
git commit -m "add new photos"
git push
```

---

## 🚀 Pushing Changes to Live Website

```bash
cd ~/Documents/projects/website
git add .
git commit -m "describe what you changed"
git push
```

Then check **GitHub → Actions** tab — wait for green ✅.
Live site: **https://tobiaskleinn-online.github.io/website**

---

## 🔑 GitHub Token (Credentials)

### Clear old/expired token

```bash
git credential-osxkeychain erase
host=github.com
protocol=https
```

Press **Enter** twice. Next `git push` will ask for new credentials.

### When asked for credentials

- **Username:** your GitHub username
- **Password:** paste your Personal Access Token

### Create a new token

1. github.com → Avatar → Settings
2. Developer settings → Personal access tokens → Tokens (classic)
3. Generate new token → check **repo** scope → copy immediately!

---

## 🖼️ Gallery Management

### Regenerate gallery.yaml from images

```bash
cd ~/Documents/projects/website
npm run generate
```

### Check what's in gallery.yaml

```bash
cat src/gallery/gallery.yaml
```

### List all photos in a folder

```bash
ls src/gallery/Wildlife/
```

---

## 🛠️ Common Git Commands

```bash
# Check status of changes
git status

# See what changed
git diff

# Pull latest from GitHub
git pull

# Check git history
git log --oneline
```

---

## 🔧 Fixing Common Issues

### Fix case sensitivity (folder names)

```bash
git mv src/gallery/street src/gallery/temp
git mv src/gallery/temp src/gallery/Street
git add .
git commit -m "fix folder capitalization"
git push
```

### Merge conflict after pull

```bash
git config pull.rebase false
git pull
# If editor opens: Ctrl+X (nano) or :wq (vim)
git push
```

### Check installed Node version

```bash
node --version
```

---

## 📁 Project Structure

```
website/
├── src/
│   ├── gallery/          ← Your photos go here
│   │   ├── Wildlife/
│   │   ├── Landscape/
│   │   ├── Street/
│   │   └── Travel/
│   ├── gallery/gallery.yaml  ← Auto-generated, can edit manually
│   ├── components/       ← UI components
│   ├── pages/            ← Website pages
│   └── styles/           ← CSS files
├── public/
│   └── images/           ← Profile photo goes here
├── site.config.mts       ← Site title, name, profile image
└── astro.config.mts      ← Site URL and base path
```

---

## ⚙️ Key Config Files

### site.config.mts — Personal info

- Site title, your name, profile image filename

### astro.config.mts — URL settings

```typescript
site: 'https://tobiaskleinn-online.github.io';
base: 'website';
```

### src/gallery/gallery.yaml — Photo metadata

- Edit titles, descriptions, collections manually here
- Or run `npm run generate` to auto-update

---

## 🌿 Lightroom → Website Workflow

1. **In Lightroom:** Set IPTC Title field for each photo
2. **Export** as JPEG, max 2500px long edge, quality 85-90
3. **Copy** exported JPEGs to `src/gallery/[Category]/`
4. **Run** `npm run generate` to update gallery.yaml
5. **Check** locally with `npm run dev`
6. **Push** with `git add . && git commit -m "..." && git push`

---

## 🏷️ Lightroom Export Preset Settings

- Format: JPEG
- Quality: 85-90
- Long edge: 2500px
- Metadata: All (IPTC included)
- Output sharpening: Screen, Standard
