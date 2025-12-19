# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development
npm run dev          # Start Vite dev server (port 5173)
npm run storybook    # Start Storybook dev server (port 6006)

# Build
npm run build        # TypeScript check + Vite production build
npm run build-storybook  # Build Storybook static files

# Quality
npm run lint         # Run ESLint

# Testing
npx vitest --project=storybook  # Run Storybook component tests
```

## Architecture

This is a React component catalog built with Vite, TypeScript, and Storybook.

### Component Structure

Components live in `src/stories/` with the pattern:
- `ComponentName.tsx` - Component implementation
- `ComponentName.stories.ts` - Storybook stories
- `component-name.css` - Component styles (CSS)

### Styling

- **Tailwind CSS** is available via `@tailwindcss/vite` plugin
- Import Tailwind in CSS files with `@import "tailwindcss";`
- Component-specific styles use plain CSS files

### Key Configuration

- `vite.config.ts` - Vite + Tailwind + Storybook Vitest integration
- `eslint.config.js` - Flat config with TypeScript, React Hooks, React Refresh
- `.storybook/` - Storybook configuration

### React Import

React 19 with automatic JSX runtime - no need to import React for JSX. Only import specific hooks:
```tsx
import { useState } from 'react';
```
