# Contributing to AgriCool-Tools

Quick guide for the group so we don't step on each other's work.

## 1. Get set up

```bash
git clone <repo-url>
cd agricool-tools
npm install
npm run dev
```

Requires Node.js 18+.

## 2. Branch per feature

Don't commit straight to `main`. Create a branch named after what you're
doing:

```bash
git checkout -b feature/admin-add-user-modal
git checkout -b fix/mobile-sidebar-overflow
```

## 3. Where your change probably goes

| I want to...                                   | Edit this |
| ------------------------------------------------ | --------- |
| Change table/list/chart content (names, numbers) | `src/data/mockData.ts` |
| Add/change a farmer-facing screen                 | `src/pages/farmer/*.tsx` |
| Add/change an admin screen                        | `src/pages/admin/*.tsx` |
| Change the sidebar or topbar                       | `src/layouts/FarmerLayout.tsx` or `AdminLayout.tsx` |
| Add a new route/page                                 | Add the file under `pages/`, then register it in `src/App.tsx` |
| Change colors, spacing, or any visual style             | `src/index.css` |
| Add a small reusable UI piece (badge, card, etc.)          | `src/components/` |

## 4. Before opening a pull request

```bash
npm run lint     # fix any warnings/errors
npm run build    # make sure the production build still compiles
```

Take a screenshot of the page(s) you changed and drop it in the PR
description — it makes review much faster.

## 5. Commit messages

Keep them short and specific:

```
feat: add pagination to Manage Users table
fix: calendar highlight showing wrong day
style: match Weather page toggle to Figma
```

## 6. Design reference

Match the existing Figma screens where possible. When something isn't
covered by an existing style, reuse an existing CSS class/pattern before
inventing a new one — check `src/index.css` first.

## 7. Questions

Ping the group chat before starting anything that touches shared files
(`App.tsx`, `mockData.ts`, `index.css`) so we don't get conflicting edits.
