# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

A [Frontend Mentor](https://www.frontendmentor.io) challenge to build an accessible contact form. The goal is to match the provided designs pixel-perfectly while meeting accessibility requirements (keyboard navigation, screen reader support, validation messages).

## Commands

```bash
npm run dev       # start dev server (HMR)
npm run build     # tsc -b && vite build
npm run lint      # eslint
npm run preview   # preview the production build
```

No test framework is included — correctness is verified via `tsc` (strict) and ESLint.

## Stack

- **React 19** + **TypeScript** (strict)
- **Vite 8** with `@vitejs/plugin-react`
- **Tailwind CSS v4** via `@tailwindcss/vite` (no config file — uses CSS-first config)
- **Sonner** for toast notifications (success message on form submit)
- **react-hook-form** for form state and validation
- **Zustand** for global state (`src/store/store.ts`)

## Design Specs (from `style-guide.md`)

| Token | Value |
|---|---|
| Green 200 | `hsl(148, 38%, 91%)` |
| Green 600 | `hsl(169, 82%, 27%)` |
| Red | `hsl(0, 66%, 54%)` |
| White | `hsl(0, 0%, 100%)` |
| Grey 500 | `hsl(186, 15%, 59%)` |
| Grey 900 | `hsl(187, 24%, 22%)` |
| Font | Karla (Google Fonts), weights 400 & 700 |
| Label size | 16px |
| Mobile breakpoint | 375px |
| Desktop breakpoint | 1440px |

## Challenge Requirements

Users must be able to:

- Submit the form and see a **success toast** (Sonner) on valid submission
- See **inline validation errors** for: missing required fields, invalid email format
- Complete the form using **keyboard only**
- Have inputs, errors, and success message announced by **screen readers**
- Experience a **responsive layout** from 320px to large screens
- See **hover and focus states** on all interactive elements

## Architecture Notes

`src/App.tsx` currently contains the default Vite scaffold — it needs to be replaced with the contact form implementation. The form logic, validation state, and toast trigger all live in a single component or can be split into focused sub-components under `src/`.

Assets (images, fonts, design JPGs) live in `/assets` and `/public`. The design reference images are in `/design`.
