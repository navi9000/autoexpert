# Repository Guidelines

## Project Structure & Module Organization

This is a Nuxt 4/Vue 3 presentation site. Application code lives in `app/`:

- `app/pages/` contains file-based routes such as `index.vue`, `repairs.vue`, and `contacts.vue`.
- `app/components/` holds reusable UI components. Nuxt auto-imports these, so use them in templates as PascalCase (for example, `<MainServiceCard />`).
- `app/layouts/default.vue` defines the shared page shell; `app/kernel/` contains site-level data such as navigation.
- `app/utils/` contains composables and helpers, including responsive and asset-path utilities.
- `public/` contains static files served unchanged, primarily images in `public/img/`.

## Build, Test, and Development Commands

Use pnpm (the repository includes `pnpm-lock.yaml`):

- `pnpm install` installs dependencies.
- `pnpm dev` starts the local Nuxt development server.
- `pnpm build` creates the production build and is the primary pre-merge validation.
- `pnpm generate` produces a static site.
- `pnpm preview` serves the production build locally.

The GitHub Pages workflow builds with `NUXT_APP_BASE_URL=/autoexpert/`; preserve asset-path handling when adding static assets or routes.

## Coding Style & Naming Conventions

Write Vue single-file components with `<template>`, `<style scoped>`, and `<script setup lang="ts">`, matching nearby files. Use two-space indentation, double quotes in TypeScript, no semicolons, and trailing commas in multiline objects. Name components and pages in kebab-case (`main-service-card.vue`, `repairs.vue`); use camelCase for composables and utilities, prefixed with `use` where appropriate (`useAssetPath.ts`). Keep component-specific CSS scoped and use existing CSS custom properties before introducing new values.

## Testing Guidelines

No automated test or lint script is currently configured. For every change, run `pnpm build` and manually check the affected page with `pnpm dev`, including desktop and mobile layouts. Add tests alongside new test infrastructure if it is introduced; name them after the unit or behavior they cover.

## Commit & Pull Request Guidelines

Recent commits use concise, imperative, lower-case subjects, for example `fix images` or `extract navigation and improve its types`. Keep each commit focused. Pull requests should explain the user-visible change, reference related issues when applicable, and include before/after screenshots for visual updates. Confirm the production build succeeds before requesting review.
