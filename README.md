# Asset Management — Next.js 14 App Router Scaffold

Stack: **Next.js 14 (App Router) + TypeScript + Prisma + SQLite + Tailwind CSS**

## What's included

- **Auth**: JWT-based auth using [`jose`](https://github.com/panva/jose) (edge-runtime compatible,
  so it works in `middleware.ts`) + `bcryptjs` for password hashing. Token is stored in an
  **httpOnly cookie** (`session_token`).
  - `POST /api/auth/signup` — creates a new `User` with `role = EMPLOYEE` only (role escalation is
    intentionally not exposed here — that should be a separate ADMIN-only endpoint you add later).
  - `POST /api/auth/login` — verifies credentials, sets the session cookie.
  - `POST /api/auth/logout` — clears the session cookie.
  - `GET /api/auth/me` — returns the current session user (handy for client components).
- **Middleware** (`src/middleware.ts`): protects everything under `/dashboard/*`, redirecting
  unauthenticated users to `/login?next=...`. Also bounces already-logged-in users away from
  `/login` and `/signup`.
- **Dashboard shell**: `src/app/dashboard/layout.tsx` renders a `Sidebar` (Dashboard, Org Setup,
  Assets, Allocations, Bookings, Maintenance, Notifications) and a `Topbar` showing the signed-in
  user's name + role, with a logout button. Each nav section has a placeholder page ready to build
  out.
- **Prisma schema** (`prisma/schema.prisma`):
  - `User` — id, name, email, passwordHash, role (`EMPLOYEE | DEPT_HEAD | ASSET_MANAGER | ADMIN`),
    departmentId, status
  - `Department` — id, name, headId, parentDepartmentId (self-relation for hierarchy), status
  - `AssetCategory` — id, name
- **Login / Signup pages** (`/login`, `/signup`) — simple Tailwind forms, client components.
- **Seed script** (`prisma/seed.ts`) — creates one ADMIN user: `admin@example.com` / `Admin@123`.

## Getting started

```bash
cd asset-mgmt
npm install
npx prisma migrate dev --name init
npm run seed        # optional: creates admin@example.com / Admin@123
npm run dev
```

Then visit http://localhost:3000 — you'll be redirected to `/login`. Sign up for a new (EMPLOYEE)
account, or log in with the seeded admin account.

## Environment variables (`.env`)

```
DATABASE_URL="file:./dev.db"
JWT_SECRET="dev-only-super-secret-change-me"
```

**Change `JWT_SECRET` before deploying anywhere real.**

## Notes / next steps

- `role` is set server-side only; there's no way for a client to self-assign `DEPT_HEAD`,
  `ASSET_MANAGER`, or `ADMIN` — add an authenticated `/api/admin/users/:id/role` route (guarded by
  `role === "ADMIN"`) when you're ready to manage roles.
- The middleware only checks that a **valid session exists** — it doesn't yet do
  role-based route gating (e.g. restricting `/dashboard/org-setup` to `ADMIN`/`ASSET_MANAGER`).
  You can add that by decoding the JWT payload's `role` claim inside `middleware.ts` per route.
- SQLite is great for local dev; swap the `datasource` provider in `schema.prisma` (and
  `DATABASE_URL`) to Postgres/MySQL for production.
- Tailwind is configured with a small `brand` color palette in `tailwind.config.ts` — adjust to
  your design system.
