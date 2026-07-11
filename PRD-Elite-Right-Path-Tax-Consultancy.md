# Product Requirements Document (PRD)
## Elite Right Path Tax Consultancy — Business Website

| | |
|---|---|
| **Client** | Elite Right Path Tax Consultancy |
| **Proprietor** | Mr. Raj Paudel S. |
| **GST No.** | 33GAGPR3616R1Z2 |
| **Document Version** | 1.0 |
| **Date** | July 11, 2026 |
| **Prepared For** | Development using Google Antigravity (AI agentic IDE) |
| **Project Type** | Static Marketing Website (5–6 pages) |

---

## 1. Project Overview

Elite Right Path Tax Consultancy needs a professional, trust-building website that presents the firm's income tax, GST, accounting, and compliance services to individuals and businesses. The site's core job is to convert visitors into leads (calls, WhatsApp messages, or form submissions) by clearly communicating expertise, service breadth, and credibility.

**Tagline direction:** *"Guiding you on the right path to financial compliance and growth."*

### 1.1 Goals
- Establish immediate trust and professional credibility for a solo-proprietor consultancy competing with larger firms.
- Clearly present the full breadth of services (7 categories, 30+ line items) without overwhelming the visitor.
- Drive measurable conversions: phone calls, WhatsApp chats, and contact form submissions.
- Be fast, mobile-first, and easy to maintain/update (new services, notices, pricing).
- Rank locally for tax/GST/accounting search terms in the proprietor's service area.

### 1.2 Non-Goals (Out of Scope for v1)
- Client login portal / document upload system
- Online payment collection
- Blog/CMS (can be a Phase 2 addition)
- Multi-language support (can be flagged as future enhancement)

---

## 2. Target Audience

| Segment | Need |
|---|---|
| Salaried individuals | Simple, fast ITR filing; tax-saving advice |
| Freelancers/professionals | ITR + GST + advance tax guidance |
| Small business owners / proprietors | GST filing, accounting, bookkeeping, registrations |
| Startups / LLPs / Companies | Company/LLP registration, ROC compliance, statutory audit support |
| Businesses under scrutiny | Notice handling, appeals, representation |

---

## 3. Information Architecture (Sitemap)

A 5–6 page structure that keeps navigation simple while giving each core theme room to breathe:

1. **Home** — Hero, trust signals, service category overview, why-choose-us, CTA banner
2. **About Us** — Proprietor profile, firm philosophy, credentials/approach
3. **Services** — Full detailed listing across all 7 categories (can use tabs/accordions to avoid a wall of text)
4. **Why Choose Us** *(can be merged into Home or standalone if content is expanded)*
5. **Contact Us** — Contact form, phone, WhatsApp, GST number, address, map embed
6. *(Optional 6th page)* **FAQs** — Common questions on ITR deadlines, GST filing frequency, documents required, etc.

> **Recommendation:** If keeping strictly to 5 pages, merge "Why Choose Us" into the Home page as a section, and use the 6th slot for FAQs — FAQ pages are strong for SEO (featured snippets) and reduce repetitive client queries.

**Global elements (all pages):** Sticky header with logo + nav + "Call Now" / "WhatsApp" button, footer with services quick-links, GST number, address, social links, and business hours.

---

## 4. Page-by-Page Content & Functional Requirements

### 4.1 Home Page
- **Header/Nav:** Logo, Home / About / Services / FAQs / Contact, prominent "Book Free Consultation" or "WhatsApp Us" CTA button
- **Hero Section:** Headline (mission statement), subtext, primary CTA (Call/WhatsApp), supporting visual (professional illustration or photo — see Section 7 on stock imagery)
- **Trust Bar:** Small strip with icons — "500+ Returns Filed," "GST Registered," "Personalized Support" (placeholder stats — confirm real numbers with client before launch)
- **Services Overview:** Card grid of the 7 categories (Income Tax, GST, Business Registration, Accounting & Bookkeeping, Compliance & Legal, Audit Support, Other Services) each linking to the relevant anchor/section on the Services page
- **Why Choose Us:** The 5 provided points as icon-based feature cards
- **About Teaser:** 2–3 line intro to Mr. Raj Paudel with "Read More" → About page
- **CTA Banner:** "Ready to simplify your taxes? Talk to us today." with Call + WhatsApp buttons
- **Footer:** Contact info, GST number, quick links, business hours, social icons

### 4.2 About Page
- Full proprietor bio (as provided in brief)
- Optional: professional headshot placeholder
- Firm values: Precision, Transparency, Professionalism (pull out as 3 pillars)
- Optional credentials/certifications section if client can supply (recommend asking)

### 4.3 Services Page
Organize the 7 categories as **accordion or tabbed sections** (critical for UX given 30+ line items):
1. Income Tax Services
2. GST Services
3. Business & Registration Services
4. Accounting & Bookkeeping
5. Compliance & Legal Services
6. Audit & Compliance Support
7. Financial & Advisory Services
8. Other Services (DSC, Professional Tax, ESI/PF)

Each category: icon + heading + bullet list of line items exactly as provided by the client. Each section ends with a "Need help with this? Contact us" micro-CTA.

### 4.4 FAQs Page (recommended 6th page)
Suggested starter questions (to validate with client):
- What documents are needed for ITR filing?
- How often do I need to file GST returns?
- What happens if I receive an income tax/GST notice?
- Do you handle both individuals and businesses?
- What are your consultation charges?

### 4.5 Contact Page
- Contact form: Name, Phone, Email, Service Interested In (dropdown), Message
- Click-to-call phone number
- Click-to-chat WhatsApp button (pre-filled message: "Hi, I'd like to know more about your tax services")
- Business address (need to confirm with client — not in the current brief)
- Embedded Google Map (once address is confirmed)
- GST number displayed for credibility
- Business hours

> **Open item:** Phone number, email address, and physical address were not included in the client's brief — flag this to the client before development starts.

---

## 5. Design System

### 5.1 Colour Palette (as supplied by client)

| Name | Hex | Suggested Usage |
|---|---|---|
| Intense Orchid | `#A90DC8` | Primary accent — CTAs, links, highlights (use sparingly, high-impact moments) |
| California Gold | `#FDB515` | Secondary accent — badges, icons, hover states |
| Feather White | `#E7EAE5` | Neutral background / section backgrounds |
| Frosted Breeze | `#DFF2FE` | Light background tint, alternating sections |
| Snow | `#F5FEFD` | Primary background / card background |

**Design note:** Orchid + Gold is a bold, non-traditional combination for a tax/finance brand (most competitors use blue/navy/green for "trust"). This is actually a differentiation opportunity — pair it with a clean, restrained layout so the boldness reads as "modern and confident," not "flashy." Recommend using Orchid as the dominant brand color, Gold only as a small highlight/accent (badges, icon fills, underline accents), and the three light tones as background layers to keep it airy and professional.

### 5.2 Typography (recommendation — not specified by client)
- **Headings:** A confident, modern serif or geometric sans (e.g., Poppins, Sora, or Fraunces for a touch of premium warmth)
- **Body:** Clean, highly legible sans-serif (e.g., Inter, Work Sans)
- Confirm with client if they have brand font preferences; otherwise proceed with the above.

### 5.3 Imagery & Iconography
- Use a consistent icon set (e.g., Lucide or Phosphor icons) for service categories — avoids a mismatched, stock-photo-heavy look
- For hero/about imagery: prefer a professional photo of Mr. Raj Paudel if available (huge trust boost for a solo consultancy); fall back to tasteful abstract/finance-themed illustration if not
- Avoid generic "handshake" or "calculator" stock photography clichés

---

## 6. Functional & Non-Functional Requirements

### 6.1 Functional
- Responsive navigation (hamburger menu on mobile)
- Working contact form (needs a form backend — e.g., Formspree, EmailJS, or a simple serverless function, since this is a static site)
- Click-to-call (`tel:`) and click-to-WhatsApp (`https://wa.me/`) links
- Smooth scroll / anchor navigation from Home service cards to Services page sections
- Accordion/tab component for Services page

### 6.2 Non-Functional
- **Performance:** Target Lighthouse score 90+ across Performance/Accessibility/Best Practices/SEO; optimized images (WebP), lazy loading
- **Responsiveness:** Mobile-first; must look polished on 360px–1440px+ widths
- **SEO:** Semantic HTML, meta titles/descriptions per page, schema.org `LocalBusiness`/`AccountingService` structured data, sitemap.xml, robots.txt
- **Accessibility:** WCAG AA color contrast (note: verify Orchid-on-Snow and Gold-on-White combinations pass contrast checks for text use)
- **Hosting:** Static site — deployable on Vercel/Netlify/GitHub Pages depending on stack chosen in Antigravity

---

## 7. Content Gaps to Confirm With Client (Action Items)

Before or during development, confirm:
1. Business phone number(s) and WhatsApp number
2. Email address
3. Physical office address (for footer + Google Maps embed)
4. Business hours
5. Real stats/numbers for trust-bar claims (years in business, clients served, returns filed) — don't publish placeholder numbers as fact
6. Proprietor headshot/photo (recommended, optional)
7. Any client testimonials (strong conversion driver — could justify a "Testimonials" section or future 7th page)
8. Preferred domain name and any existing social media handles to link in footer

---

## 8. Success Metrics

- Site loads in under 2.5s on mobile (3G/4G simulated)
- Contact form submission rate / WhatsApp click-through rate (track via analytics)
- Organic search visibility for terms like "[city] tax consultant," "GST filing near me," "income tax return filing [city]"
- Bounce rate under industry benchmark (~50-55% for local service sites)

---

## 9. Finalized Technology Stack

| Layer | Choice | Rationale |
|---|---|---|
| **Framework** | **Next.js** (App Router, static export via `output: 'export'`) | Most widely represented stack in AI coding tool training data, so Antigravity produces cleaner, more reliable output with fewer hallucinated APIs. Component reuse (Header, Footer, ServiceCard, Accordion) is straightforward. Static export keeps hosting simple with no server required, while leaving room to add dynamic features later (blog, CMS-driven testimonials) without a rewrite. |
| **Styling** | **Tailwind CSS** | Brand colors (Intense Orchid, California Gold, Feather White, Frosted Breeze, Snow) defined once as named tokens in `tailwind.config`, then reused consistently across every AI-generated page/section — prevents the inconsistent look that can result from scattered hex codes. |
| **Icons** | **lucide-react** | Consistent icon set for the 7 service categories and "Why Choose Us" points; drop-in React components. |
| **Fonts** | **next/font — Sora (headings) + Inter (body)** | Built-in font optimization, no extra config; modern and highly legible pairing that supports a bold accent palette. |
| **Contact Form** | **Formspree or Web3Forms** | Static export has no Node backend at runtime, so form submissions post directly to an external service — no server needed. |
| **Hosting** | **Vercel** (or Netlify) | Built by the Next.js team; git-push-to-deploy, automatic HTTPS, zero-config for static export output. |
| **Version Control** | **GitHub** | Commit after every approved milestone/page so any AI-driven multi-file edit can be rolled back if it destabilizes earlier work. |
| **Analytics** | **Plausible or Google Analytics 4** | Tracks WhatsApp clicks, form submissions, and bounce rate against the success metrics in Section 8. |

**Why this stack for this project:** it's fully static (fast, cheap to host, no server to maintain), plays to the strengths of an AI agentic coder (Next.js + Tailwind is the most common combination an AI model will have seen), and still scales gracefully if the client later wants a blog, testimonials pulled from a lightweight CMS, or a booking system.

---

## 10. Working Efficiently with Antigravity (AI-Assisted Build) — Recommendations

Since you're building this with Google Antigravity, here's how to get sharper, more attractive output with fewer iterations:

1. **Feed the PRD as ground truth first.** Paste this entire PRD into Antigravity as the first instruction/context before asking it to scaffold anything. Agentic tools produce far more consistent output when they have the full spec up front rather than being fed requirements piecemeal.

2. **Set up the design tokens before generating pages.** Ask Antigravity to first create a `tailwind.config` (or CSS variables file) with the 5 brand colors, spacing scale, and font choices as named tokens. Then instruct every subsequent page/component to *only* use those tokens — this is what keeps an AI-built site from looking inconsistent page-to-page.

3. **Build one page fully, review, then propagate the pattern.** Have Antigravity build the Home page hero + one content section first. Approve the visual direction (spacing, shadows, button style) before asking it to replicate that pattern across About/Services/Contact. This avoids having to redesign 6 pages when you dislike a UI choice discovered late.

4. **Give explicit "don't" instructions, not just "do" instructions.** For AI-generated design, negative constraints prevent generic output — e.g., "Don't use default browser blue for links," "Don't use a plain calculator/handshake stock photo in the hero," "Don't center-align long paragraphs."

5. **Ask for 2–3 hero section variants before picking one.** Agentic tools like Antigravity can generate multiple layout options quickly — reviewing 2-3 variants for the highest-visibility section (the hero) is worth the extra round-trip.

6. **Use real content, not lorem ipsum, from the start.** You already have all the real service copy — feed it in verbatim so Antigravity sizes text blocks, cards, and accordions correctly for actual content length rather than placeholder text that breaks layout later.

7. **Request accessibility + performance checks as an explicit step**, not an afterthought — ask Antigravity to run a contrast check on the Orchid/Gold-on-light-background combinations and flag any WCAG failures, since this palette has some bold, saturated tones.

8. **Version-control every accepted milestone.** Commit after each approved page so you can roll back a section if a later AI-driven edit accidentally destabilizes earlier work — a common failure mode in agentic, multi-file edits.

9. **Keep a running "content gaps" list** (Section 7 above) and resolve it with the client early — missing contact details are the most common reason a "finished" AI-built site stalls at the last step.

---

## Summary

This PRD covers a 5–6 page static marketing site for Elite Right Path Tax Consultancy — a solo tax/GST/accounting consultancy run by Mr. Raj Paudel. The structure is Home, About, Services (with all 7 service categories organized into tabs/accordions), an optional FAQ page, and Contact, all built around the client-supplied color palette (Intense Orchid, California Gold, Feather White, Frosted Breeze, Snow). Key open items before development starts: missing contact details (phone/email/address), real trust-bar statistics, and an optional headshot/testimonials. The finalized tech stack is Next.js (static export) + Tailwind CSS + Formspree/Web3Forms for the contact form + Vercel hosting, and the Antigravity workflow tips above should help keep the AI-generated output consistent, accessible, and visually distinctive rather than templated.
