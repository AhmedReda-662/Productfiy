# Productfiy — Full-Stack Product Sharing Platform

**Full-Stack Developer Project | React.js · Node.js · Express.js · TypeScript · PostgreSQL · RESTful API**

[![React](https://img.shields.io/badge/Frontend-React_19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/Backend-TypeScript_5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Express.js](https://img.shields.io/badge/API-Express.js_5-000000?logo=express&logoColor=white)](https://expressjs.com/)
[![PostgreSQL](https://img.shields.io/badge/Database-PostgreSQL-4169E1?logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Tailwind CSS](https://img.shields.io/badge/Styling-Tailwind_CSS_v4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Deployed on AWS](https://img.shields.io/badge/Deployed-AWS_Lambda-FF9900?logo=amazonaws&logoColor=white)](https://aws.amazon.com/lambda/)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

A production-ready **full-stack web application** where users can **create, discover, edit, and discuss product listings**. Built with a modern **React (Vite) frontend** and a secure **RESTful Express.js + TypeScript API** backed by **PostgreSQL + Drizzle ORM**, with **Clerk authentication, role-based authorization, and AWS Lambda cloud deployment**.

> **Live Demo:** https://ae7ffjano7iokza5pcl4gdwgvi0odfob.lambda-url.us-east-1.on.aws/
>
> **Repository:** https://github.com/AhmedReda-662/Productfiy

---

## Table of Contents

- [For Recruiters — 30-Second Summary](#for-recruiters--30-second-summary)
- [Key Highlights](#key-highlights)
- [Skills Demonstrated — ATS Keyword Bank](#skills-demonstrated--ats-keyword-bank)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [System Architecture](#system-architecture)
- [Database Schema](#database-schema)
- [REST API Reference](#rest-api-reference)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Security and Best Practices](#security-and-best-practices)
- [Engineering Decisions](#engineering-decisions)
- [Resume-Ready Bullet Points (ATS-Optimized)](#resume-ready-bullet-points-ats-optimized)
- [Roadmap](#roadmap)
- [Author and Contact](#author-and-contact)

---

## For Recruiters — 30-Second Summary

**Full-Stack Developer** with hands-on experience across the complete **Software Development Life Cycle (SDLC)**: **frontend development** with **React.js, JavaScript (ES6+), React Router, and TanStack React Query**, **backend development** with **Node.js, Express.js, and TypeScript**, **relational database design** with **PostgreSQL and SQL**, and **cloud deployment** with **AWS Lambda, Docker, and Render**.

Productfiy demonstrates **user authentication and authorization (Clerk, JWT — JSON Web Tokens, RBAC — Role-Based Access Control, protected routes, ownership verification)**, **CRUD operations (Create, Read, Update, Delete)**, **RESTful API design**, **server state management and caching**, **responsive web design**, and **production deployment** serving a **Single-Page Application (SPA)** from a unified Express server.

**Open to roles:** Full-Stack Developer · Frontend Developer (React) · Backend Developer (Node.js) · Junior Software Engineer · Web Developer

---

## Key Highlights

- **End-to-end ownership** — Designed, built, tested, and deployed a full-stack **MERN-style (React + Express + PostgreSQL)** application as a **monorepo** with shared build tooling.
- **Secure authentication flow** — Integrated **Clerk** for sign-in/sign-up, session management, and **JWT-based API authorization** via Axios interceptors + Express `requireAuth()` middleware.
- **Authorization logic** — Owner-only update/delete for products and comments, with server-side ownership verification (not just client-side hiding).
- **Relational data modeling** — 3-table PostgreSQL schema (users → products → comments) with foreign keys, cascade deletes, UUID primary keys, and type-safe queries via **Drizzle ORM**.
- **Modern data fetching** — **TanStack React Query v5** for caching, background refetching, loading/error states, and automatic cache invalidation on mutations.
- **Polished UX** — Fully **responsive (mobile-first)** UI with **Tailwind CSS + DaisyUI (32 themes)**, live image preview, NEW badges, optimistic UI updates, and consistent empty/loading/error states.
- **Cloud-ready deployment** — Single-command production build serving the Vite SPA from Express; deployable to **AWS Lambda (Function URL), Docker, Render, and Vercel**.

---

## Skills Demonstrated — ATS Keyword Bank

> Plain-text keyword list so **Applicant Tracking Systems (ATS)** and recruiter searches match this project.

**Frontend Development:** React.js, React 19, JavaScript ES6+, Vite, React Router 7, Client-Side Routing, Single-Page Application (SPA), TanStack React Query, Server State Management, Data Fetching, Caching, Axios, HTTP Client, REST API Integration, Responsive Web Design, Mobile-First Design, Tailwind CSS, DaisyUI, Component-Based Architecture, Reusable Components, Form Handling, Form Validation, Protected Routes, Conditional Rendering, Lucide Icons

**Backend Development:** Node.js, Express.js 5, TypeScript, RESTful API Development, API Design, CRUD Operations, Middleware, Authentication Middleware, Authorization, Role-Based Access Control (RBAC), JWT (JSON Web Tokens), Clerk Authentication, CORS (Cross-Origin Resource Sharing), Environment Variables, Error Handling, Input Validation, MVC Pattern (Controllers / Routes / Queries)

**Database & ORM:** PostgreSQL, SQL, Relational Database Design, Database Schema Design, Foreign Keys, Cascade Delete, UUID Primary Keys, Drizzle ORM, Drizzle Kit, Database Migrations, Type-Safe Queries, Data Modeling, One-to-Many Relationships, Query Optimization

**DevOps & Deployment:** AWS Lambda, AWS Function URL, Docker, Dockerfile, Containerization, Render, Vercel, CI-Ready Build Scripts, Monorepo, npm Workspaces, Nodemon, Production Build, Static File Serving, Environment Configuration, dotenv, Git, GitHub, Version Control

**Software Engineering Practices:** Full-Stack Development, Software Development Life Cycle (SDLC), Agile Mindset, Code Reviews, Debugging, Problem Solving, API Documentation, Technical Documentation, Clean Code, Separation of Concerns, Performance Optimization, User Experience (UX), Accessibility Awareness

---

## Features

### Authentication & User Management

- **Secure sign-in / sign-up** with Clerk (modal UI, session management, social + email options)
- **Automatic user sync** — Clerk profile (ID, name, email, avatar) upserted into PostgreSQL on first login via Drizzle `onConflictDoUpdate`
- **JWT injection** — Axios request interceptor automatically attaches Clerk session tokens to every API call
- **Protected routes** — `/create`, `/edit/:id`, and `/profile` redirect unauthenticated users to sign-in

### Products (CRUD — Create, Read, Update, Delete)

- Create product listings with title, description, and image URL + **live image preview**
- Browse all products on a landing hero + responsive product grid, sorted newest-first
- Product detail page with author info, timestamps, and comment thread
- Edit and delete restricted to the **listing owner** (client guard + server verification)
- **"NEW" badge** auto-applied to products created within the last 7 days
- **Profile dashboard** — logged-in user's listings with stats and quick view / edit / delete actions

### Comments & Engagement

- Post comments on any product (authenticated users)
- Delete own comments; product page refreshes instantly via React Query invalidation
- Relational integrity: deleting a user or product cascade-deletes dependent comments

### UX, Theming & Feedback

- **32 DaisyUI themes** (light, dark, synthwave, cyberpunk, luxury, etc.) persisted in `localStorage`
- Consistent **loading spinners, error alerts, and empty states** on every page
- Fully **responsive layout** — mobile, tablet, and desktop tested with Tailwind utility classes
- Icon-driven UI with **Lucide React**

---

## Tech Stack

### Frontend — `frontend/`

| Technology | Version | Purpose |
|---|---|---|
| React + React DOM | 19 | Component-based UI library |
| Vite | 7 | Fast build tool and dev server with HMR |
| React Router | 7 | Declarative client-side routing and protected routes |
| TanStack React Query | 5 | Server state, caching, background refetching, mutations |
| Clerk React SDK | 5 | Authentication UI, hooks, and session tokens |
| Axios | 1 | Promise-based HTTP client + auth interceptor |
| Tailwind CSS | 4 | Utility-first responsive styling |
| DaisyUI | 5 | Pre-built components (cards, buttons, forms, alerts, chat) |
| Lucide React | 0.562 | Lightweight SVG icon library |

### Backend — `backend/`

| Technology | Version | Purpose |
|---|---|---|
| Node.js | 20 (Alpine) | JavaScript runtime |
| Express.js | 5 | Minimal web framework for REST API + SPA serving |
| TypeScript | 5 | Static typing for safer backend code |
| Clerk Express SDK | 1 | `clerkMiddleware()`, `requireAuth()`, `getAuth()` |
| Drizzle ORM | 0.45 | Type-safe SQL query builder and schema |
| Drizzle Kit | 0.31 | Schema push / migrations |
| PostgreSQL (`pg`) | 8 | Relational database driver |
| CORS | 2 | Cross-origin requests from frontend URL |
| dotenv | 17 | Environment variable management |
| ts-node + Nodemon | — | TypeScript execution + auto-restart in development |

### DevOps / Tooling

- **Monorepo** with root `package.json` orchestrating `build` and `start`
- **Dockerfile** (`node:20-alpine`) + `render.yaml` for one-click Render/Docker deploys
- **ESLint** (frontend), **tsconfig** strict mode (backend)

---

## System Architecture

```text
Browser (React SPA — Vite)
   │  Clerk session (JWT) via Axios interceptor
   ▼
Express.js API (TypeScript)
   ├── clerkMiddleware() → requireAuth() on protected routes
   ├── Controllers (user / product / comment)
   ├── Drizzle ORM queries (type-safe SQL)
   ▼
PostgreSQL (users, products, comments)

Production: Express serves Vite `dist/` as static files
            + SPA fallback to index.html for React Router
```

**Auth flow:**

1. User signs in via Clerk React component → Clerk issues a short-lived JWT session token.
2. `UseAuthReq` hook + Axios interceptor attaches `Authorization: Bearer <token>` to API calls.
3. Backend `requireAuth()` validates the token; `getAuth(req).userId` identifies the caller.
4. `POST /api/users/sync` upserts the Clerk user into PostgreSQL so foreign keys work.
5. Mutations (`PUT/DELETE /products/:id`, `DELETE /comments/:id`) verify `resource.user_id === caller` before writing.

---

## Database Schema

Managed with **Drizzle ORM** (`backend/src/db/schema.ts`), applied via `drizzle-kit push`.

- **users** — `id` (Clerk ID, PK) · `email` (unique, not null) · `name` · `image_url` · `created_at` · `updated_at`
- **products** — `id` (UUID, PK) · `title` · `description` · `image_url` · `user_id` (FK → `users.id`, cascade delete) · `created_at` · `updated_at`
- **comments** — `id` (UUID, PK) · `content` · `user_id` (FK → `users.id`, cascade delete) · `product_id` (FK → `products.id`, cascade delete) · `created_at`

**Relationships:** one user → many products · one user → many comments · one product → many comments.

---

## REST API Reference

Base URL (local): `http://localhost:3000` · (production): your deployed Function URL.

### Health Check

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| GET | `/api/health` | Public | API status + endpoint map |

### Users

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| POST | `/api/users/sync` | Protected (JWT) | Upsert Clerk user into PostgreSQL |

### Products

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| GET | `/api/products` | Public | List all products with author, newest first |
| GET | `/api/products/my` | Protected | List current user's products |
| GET | `/api/products/:id` | Public | Single product + comments + author |
| POST | `/api/products` | Protected | Create product (title, description, image_url) |
| PUT | `/api/products/:id` | Protected, owner-only | Update product |
| DELETE | `/api/products/:id` | Protected, owner-only | Delete product |

### Comments

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| POST | `/api/comments/:productId` | Protected | Add comment to a product |
| DELETE | `/api/comments/:commentId` | Protected, owner-only | Delete a comment |

All protected routes require `Authorization: Bearer <Clerk JWT>`. Ownership is enforced server-side — requests from non-owners receive `403 Forbidden`.

---

## Getting Started

### Prerequisites

- **Node.js** 20+ and **npm**
- A **PostgreSQL** database (local, Neon, Supabase, Render Postgres, or AWS RDS) — connection string required
- A free **Clerk** application (publishable key + secret key) — https://clerk.com

### 1. Clone the repository

```bash
git clone https://github.com/AhmedReda-662/Productfiy.git
cd Productfiy
```

### 2. Configure environment variables

**`backend/.env`:**

```env
PORT=3000
NODE_ENV=development
DB_URL=postgresql://user:password@localhost:5432/productfiy
CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
FRONTEND_URL=http://localhost:5173
```

**`frontend/.env`:**

```env
VITE_CLERK_PUBLISHABLE_KEY=pk_test_...
VITE_API_URL=http://localhost:3000
```

### 3. Install and run (development)

```bash
# Backend (terminal 1)
cd backend
npm install
npm run db:push      # push Drizzle schema to PostgreSQL
npm run dev          # nodemon + ts-node on http://localhost:3000

# Frontend (terminal 2)
cd frontend
npm install
npm run dev          # Vite on http://localhost:5173
```

### 4. Production build (monorepo root)

```bash
npm run build   # installs deps, builds frontend (Vite) + backend (tsc)
npm start       # pushes DB schema, serves API + SPA on $PORT
```

Open http://localhost:3000 — Express serves both the API (`/api/*`) and the React app.

---

## Project Structure

```text
Productfiy/
├── backend/
│   ├── src/
│   │   ├── config/env.ts                 # Typed env config (PORT, DB_URL, Clerk keys)
│   │   ├── controllers/                  # Request handlers: product, comment, user sync
│   │   ├── db/schema.ts                  # Drizzle tables + relations + inferred types
│   │   ├── db/queries.ts                 # All SQL queries (select/insert/update/delete)
│   │   ├── db/index.ts                   # pg Pool + Drizzle client
│   │   ├── routes/                       # Express routers (products, comments, users)
│   │   └── index.ts                      # App entry: CORS, Clerk, JSON, SPA serving
│   ├── Dockerfile                        # node:20-alpine production image
│   ├── render.yaml                       # Render Blueprint (Docker runtime)
│   ├── drizzle.config.ts                 # Drizzle Kit config
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/                   # ProductCard, CommentsSection, NavBar, ThemeSelector…
│   │   ├── hooks/                        # useProducts, useComments, useUserSync, UseAuthReq
│   │   ├── lib/                          # axios instance + API functions
│   │   ├── pages/                        # Home, Product detail, Create, Edit, Profile
│   │   ├── App.jsx                       # Routes + layout + route guards
│   │   └── main.jsx                      # ClerkProvider + QueryClientProvider + Router
│   └── package.json
├── package.json                          # Root orchestration scripts
└── README.md
```

---

## Deployment

| Target | How |
|---|---|
| **AWS Lambda (live)** | Bundled Express + Vite `dist/` deployed behind a Lambda Function URL — single service, no separate static host needed |
| **Docker** | `backend/Dockerfile` builds a `node:20-alpine` image (`npm ci --only=production && npm run build`, serves on port 3000) |
| **Render** | `backend/render.yaml` Blueprint: Docker runtime + `DB_URL`, `CLERK_*`, `FRONTEND_URL` env vars |
| **Vercel (frontend-only alt.)** | `backend/.vercel/` + `frontend/dist/` present for static + serverless split if preferred |

**Production behavior:** when `NODE_ENV=production`, Express serves `dist/` statically and falls back to `index.html` for all non-API routes so React Router deep links work.

---

## Security and Best Practices

- **JWT verification on every protected endpoint** via Clerk `requireAuth()` — no trust in client claims
- **Server-side ownership checks** for product/comment mutations (client guards are UX only)
- **Parameterized, type-safe SQL** through Drizzle ORM — no string-concatenated queries
- **CORS allowlist** restricted to `FRONTEND_URL` with credentials enabled
- **Secrets in environment variables only** — `.env` gitignored in both packages
- **Cascade deletes** preserve referential integrity without orphaned rows
- **Atomic user upsert** (`onConflictDoUpdate`) avoids duplicate-user race conditions

---

## Engineering Decisions

- **Why Clerk over custom auth?** Secure token rotation, pre-built UI, and first-class Express + React SDKs — eliminated an entire class of password-hashing/session bugs while still demonstrating real JWT + middleware skills.
- **Why Drizzle over Prisma?** Lightweight, SQL-like, zero codegen client, and excellent TypeScript inference — closer to raw SQL, which recruiters value.
- **Why React Query over Redux?** Server state (caching, refetching, invalidation) is a different problem from client state; React Query solves it with far less boilerplate and automatic background sync.
- **Why serve the SPA from Express?** One deployable unit for Lambda/Docker/Render — simpler ops and no CORS issues in production, while keeping clean API separation (`/api/*` vs. app routes).

---

## Resume-Ready Bullet Points (ATS-Optimized)

> Copy-paste ready. Each line starts with a strong action verb and packs recruiter-searched keywords.

- **Built and deployed a full-stack product sharing platform** using **React 19, Vite, Express.js 5, TypeScript, PostgreSQL, and Drizzle ORM** — featuring **Clerk JWT authentication**, full **CRUD operations**, a relational comment system, and a **responsive Tailwind CSS + DaisyUI** UI with 32 themes; deployed to **AWS Lambda with Docker/Render support**.
- **Designed and documented a secure RESTful API** with **role-based access control (RBAC)** — Clerk `requireAuth()` middleware, server-side ownership verification, **CORS** configuration, and type-safe **SQL** queries against a normalized 3-table schema with foreign keys and cascade deletes.
- **Engineered modern frontend architecture** with **TanStack React Query** for caching and optimistic cache invalidation, **Axios interceptors** for automatic token injection, **React Router protected routes**, reusable components, and consistent loading / error / empty states across 5 pages.

**One-liner (for resume header / LinkedIn projects):**
Productfiy — Full-Stack Web App (React, Node.js, Express, TypeScript, PostgreSQL, REST API, Clerk Auth, AWS) — live demo + GitHub linked.

---

## Roadmap

- [ ] Product search, category filters, and pagination
- [ ] Image uploads (S3 / Cloudinary) instead of URL-only
- [ ] Likes / upvotes with optimistic UI
- [ ] Unit + integration tests (Vitest, Supertest) and GitHub Actions CI
- [ ] Accessibility (a11y) audit and keyboard-navigation pass

Contributions, issues, and feature requests are welcome — feel free to fork and open a pull request.

---

## Author and Contact

Built by **[Ahmed Reda](https://github.com/AhmedReda-662)** — Full-Stack Developer (React · Node.js · TypeScript · PostgreSQL).

- GitHub: https://github.com/AhmedReda-662
- Project: https://github.com/AhmedReda-662/Productfiy
- Live Demo: https://ae7ffjano7iokza5pcl4gdwgvi0odfob.lambda-url.us-east-1.on.aws/

> **Recruiters:** the fastest way to evaluate this project is Live Demo (30s click-through: sign in → create product → comment → switch theme) → [REST API Reference](#rest-api-reference) → [Skills](#skills-demonstrated--ats-keyword-bank). References and walkthrough available on request.

---

*Keywords: Full-Stack Developer, React Developer, Node.js Developer, Frontend Development, Backend Development, JavaScript, TypeScript, React.js, Express.js, PostgreSQL, SQL, RESTful API, CRUD, Authentication, Authorization, JWT, Clerk, Responsive Web Design, State Management, Cloud Deployment, AWS Lambda, Docker, Git.*
