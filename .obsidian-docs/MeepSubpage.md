---
tags: [project-note, autogen]
---

# MEAP subpage

Back to [[00_Home]].

The MEAP company site is a built Vite app copied into `pages/meep/`. It is a separate subpage, not restyled to match the personal site chrome.

## URL

`https://aloosi.ca/pages/meep/`

## How it gets there

Source lives in the `meep_site` repo. After `npm run build`, the `dist/` folder is copied here. The page is unlisted (no nav link) and reached only by URL.

```mermaid
flowchart LR
  url[Direct URL]
  page[pages/meep/index.html]
  assets[hashed JS CSS images]
  url --> page --> assets
```

> [!tip]
> Rebuild from `meep_site` whenever copy or assets change, then replace `pages/meep/` with the new `dist/`.
