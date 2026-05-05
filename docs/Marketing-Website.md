# ElysHub Marketing Website — Deep System Summary

The ElysHub marketing website is not just a landing page, but a deliberate validation and acquisition system designed to test real user intent before scaling the full platform. It acts as a controlled entry layer between anonymous visitors and the core application, guiding users through a structured flow: landing → survey → whitelist → product access.

## 🧱 Stack Overview (and why)

### Frontend — Next.js + Tailwind (Vercel deployed)

The marketing site is built using Next.js with Tailwind CSS, deployed on Vercel.

Why this stack:

- Speed of iteration → instant deploys via GitHub push
- SEO-ready architecture → critical for discoverability
- Low operational overhead → no server management
- Clean separation from backend → avoids coupling with Django
- Modern UX capabilities → flexible and scalable UI layer

This frontend is intentionally lightweight and disposable, optimized for experimentation rather than long-term complexity.

### Backend — Django (separate system)

The marketing site does not directly host backend logic. Instead, it connects conceptually to the core application:

Django backend lives at:

app.elyshub.com

Handles:

- users
- plants
- IoT data
- care logic

This separation enforces:

Marketing (exploration) ≠ Application (execution)

### Analytics — PostHog (planned)

The system integrates PostHog to measure:

- CTA clicks
- survey completions
- user intent signals

Why:

Because the goal is not traffic — it's validated demand.

### Survey Layer — Tally

User intent is captured via Tally, which acts as:

CTA → structured input → user qualification

This replaces traditional signup forms with high-signal data capture.

### Infrastructure — Cloudflare + Vercel

**Cloudflare**

- DNS
- SSL
- security
- routing between marketing and backend

**Vercel**

- CI/CD from GitHub
- global edge delivery
- instant preview deployments

Why this combo:

- zero DevOps friction
- strong security layer
- scalable by default

## 🔁 Development Workflow

The system is intentionally designed for clarity and control:

Cursor (dev) → GitHub → Vercel → Live site

- All changes are made locally in Cursor
- Pushed to GitHub
- Automatically deployed by Vercel
- Instantly testable in production

This allows:

- rapid iteration
- safe experimentation
- no backend risk

## 🎯 Core Purpose of the Website

The marketing website is built to answer one question:

"Do serious growers actually want this?"

It does this by:

- filtering for high-intent users
- capturing real problems
- measuring willingness to engage

## 🧠 Design Philosophy

The system follows strict principles:

- ❌ No overbuilding
- ❌ No early CMS
- ❌ No design system unification yet
- ✅ Fast iteration
- ✅ Clear signal collection
- ✅ Modular separation

## 🧩 Future: Wagtail Integration

Content will eventually be managed through Wagtail, but not in the initial phase.

Planned role of Wagtail:

- structured articles (DLI, GDD, IoT guides)
- plant knowledge content
- marketplace-ready content system

Why delayed:

- avoids premature complexity
- ensures content strategy is validated first
- keeps frontend agile

Future architecture:

Next.js (frontend) ↔ Django + Wagtail (content API)

👉 Content becomes dynamic only when needed

## 🔥 Key Insight

This marketing website is not a website.

It is:

A controlled experiment system for validating product-market fit

Everything in the stack supports that:

- fast deploys → test ideas quickly
- survey → capture real intent
- whitelist → control access quality
- separation → protect core system
