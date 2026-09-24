# A Little Bouquet ♡

A personalized digital bouquet made with plain HTML, CSS, and JavaScript.

## What is included

- 🌷 Tulips
- 🌹 Roses
- 🌸 Lilies
- 🎀 Animated gift-opening screen
- ✨ Falling pink petals
- 💌 Personalized name and message
- 🌸 Clickable flowers with custom meanings
- 📱 Responsive on desktop and mobile
- ✅ No framework, build tool, server, or external assets

## Personalize it

Open `script.js`.

At the very top, edit:

```js
const CRUSH_NAME = "her name";
const YOUR_NAME = "your name";
```

Then replace the text in:

```js
const PERSONAL_MESSAGE = `...`;
```

You can also change:

```js
const INTRO_MESSAGE = `...`;
```

### Custom flower meanings

The meaning for each flower is written inside `index.html` as:

```html
data-flower="Tulip"
data-meaning="Your custom meaning here."
```

Change the `data-meaning` text for any flower.

## Publish with GitHub Pages

1. Create a new GitHub repository, such as `pink-digital-bouquet`.
2. Upload `index.html`, `style.css`, `script.js`, and `README.md`.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select your `main` branch and `/ (root)`.
6. Save.

GitHub will provide the live Pages URL.

## Folder structure

```text
pink-digital-bouquet/
├── index.html
├── style.css
├── script.js
├── README.md
└── .gitignore
```

## Notes

This site intentionally uses only local files, so it is easy to host on GitHub Pages and does not depend on image hosting or JavaScript libraries.
