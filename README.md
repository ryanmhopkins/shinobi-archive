# Shinobi Archive

A responsive collector gallery for 880 Naruto Kayou cards from six official North American English releases. Filter by set and rarity, search card codes and names, view original front/back artwork, and track quantities locally.

## Run

No dependencies required. Node.js 20 or later.

```sh
npm test
npm run build
python3 -m http.server 3000 --directory dist
```

Import the GitHub repository into Vercel. The included `vercel.json` runs `npm run build` and serves `dist`. No environment variables or paid services are required.

## Collection data

Collection quantities are stored in browser localStorage. Export/import a JSON backup to transfer between devices. No account or cross-device synchronization is provided.

## Data and artwork

Catalog verified October 11, 2026 against Kayou's official US English catalog. All six source links are in `public/cards.json` and in the app. Includes listed parallels as separate designs, but individual serial numbers do not create separate entries. Other regional English editions and promos outside these checklists are excluded.

Original Kayou CDN image files are used without upscaling; most portrait images are approximately 733 × 1,029 pixels. The viewer links directly to the original image. Image availability depends on Kayou's CDN. Catalog names and printed codes retain source spelling.

This is an unofficial collector tool. Naruto and card artwork belong to their respective rights holders.
