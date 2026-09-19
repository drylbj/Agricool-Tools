# AgriCool-Tools

A farm management web app for small-scale Filipino farmers. Farmers can log
crop activity, check hyper-local weather and SMS alerts, ask a Filipino-
language AI farm assistant, and browse farming guides. Admins get a back
office to manage farmer accounts, review crop records, monitor SMS delivery
and AI usage, publish Information Hub articles, and export reports.

This is a **front-end prototype**: everything runs on mock data in the
browser (no backend/database yet). It's built to be easy for a group to
split up and keep building on.

## Tech stack

- [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) for dev server & build
- [React Router](https://reactrouter.com/) for page routing
- [Tailwind CSS](https://tailwindcss.com/) (base/reset) + a hand-written
  component stylesheet (`src/index.css`)
- [Lucide](https://lucide.dev/) icons

## Getting started

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

Other useful scripts:

```bash
npm run build     # production build -> dist/
npm run preview   # preview the production build locally
npm run lint      # ESLint
```

## How the app is organized

```
src/
  main.tsx              # app entry point, wraps everything in Router + AuthProvider
  App.tsx                # all route definitions live here
  index.css              # every visual style in the app

  pages/
    Landing.tsx           # public marketing page ("/")
    Auth.tsx               # combined Sign In / Create Account screen ("/auth")
    farmer/                 # pages under the farmer sidebar ("/farmer/...")
      Dashboard.tsx
      CropMonitoring.tsx
      Weather.tsx
      Assistant.tsx
      InformationHub.tsx
    admin/                   # pages under the admin sidebar ("/admin/...")
      Overview.tsx
      ManageUsers.tsx
      CropRecords.tsx
      InformationHub.tsx
      WeatherLogs.tsx
      AssistantLogs.tsx
      Reports.tsx

  layouts/
    FarmerLayout.tsx        # sidebar + topbar shared by every /farmer/* page
    AdminLayout.tsx          # sidebar + topbar shared by every /admin/* page

  components/                # small reusable bits (SectionHeading, Metric,
                              # StatusPill, RoleModal, charts/BarChart, ...)

  context/AuthContext.tsx    # tracks which "role" (farmer/admin) is signed in

  data/mockData.ts            # every table/list/chart on the site reads from here
  types.ts                     # shared TypeScript types
```

**Golden rule:** one page = one file under `pages/`. If you're adding a new
screen, copy the closest existing page as a starting point rather than
growing an existing file.

## Signing in (demo flow)

There's no real backend, so "login" is a demo picker:

1. Go to `/auth`, fill in anything, and submit the form.
2. A **"Login as → Admin / Farmer"** modal appears — pick one.
3. You're dropped into `/farmer` or `/admin` with a mock signed-in user.

You can also jump straight to `/farmer` or `/admin` in the URL bar during
development — nothing is gated behind real authentication yet.

## Editing mock data

Everything you see in tables/cards/charts (farmer list, crop records, SMS
logs, AI logs, articles, report numbers, etc.) comes from
`src/data/mockData.ts`. Edit the arrays there and every page that uses that
data updates automatically — no need to hunt through JSX.

## Editing styles

There is no Tailwind utility-class soup in the JSX — this project uses a
single readable stylesheet (`src/index.css`) with descriptive class names
(`.dashboard-card`, `.data-table`, `.role-modal`, etc.). If you're building a
new page, check whether an existing class already does what you need before
adding a new one.

## Known limitations / next steps

- No real backend — everything resets on refresh except which role you're
  signed in as (stored in `localStorage` for convenience).
- No form validation yet on Auth, Add User, Add Crop Log, etc.
- Search boxes and some filters are UI-only.
- See open issues / the project board for what's next.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for how to pick up a page/feature
and submit it.
