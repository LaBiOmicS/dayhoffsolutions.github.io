# AI Development Rules for dayhoff.solutions

This document outlines the technical stack and development conventions for this project. Adhering to these rules ensures consistency, maintainability, and simplicity.

## Tech Stack Overview

The application is built with a modern, lightweight tech stack:

*   **Framework:** React 19 with TypeScript.
*   **Build Tool:** Vite for fast development and optimized builds.
*   **Styling:** Tailwind CSS for a utility-first styling approach.
*   **State Management:** Primarily React's built-in hooks (`useState`, `useContext`, `useRef`).
*   **Internationalization (i18n):** A custom, context-based provider that loads language files from `/i18n/locales`.
*   **Animations:** `tsParticles` for the interactive background, supplemented by Tailwind CSS transitions and animations.
*   **Icons:** `lucide-react` is the preferred library for a consistent and comprehensive icon set.
*   **Form Handling:** Controlled components using React state, with submissions handled by the native `fetch` API.

## Development & Library Rules

### 1. Styling & UI Components

*   **Tailwind CSS is Mandatory:** All styling MUST be done using Tailwind CSS utility classes. Avoid writing custom CSS files.
*   **Use `shadcn/ui`:** For common UI patterns (buttons, dialogs, inputs, etc.), use the pre-installed `shadcn/ui` components. This is the preferred method for building the UI.
*   **Custom Components:** If a `shadcn/ui` component is not suitable, create a new, reusable component in `src/components/` styled with Tailwind CSS.
*   **Global Styles:** Only add truly global styles (like base font settings or scrollbar styling) to the `<style>` tag in `index.html`.

### 2. Icons

*   **Use `lucide-react`:** For all icons, you MUST use the `lucide-react` library. This ensures visual consistency.
*   **No Custom SVGs:** Do not create custom SVG icon components unless the required icon is not available in `lucide-react`.

### 3. State Management

*   **Keep it Simple:** Use React's built-in hooks (`useState`, `useReducer`) for local component state.
*   **Global State:** For state that needs to be shared across the application, use the React Context API. Do not introduce complex state management libraries like Redux or Zustand.

### 4. Internationalization (i18n)

*   **No Hardcoded Text:** All user-facing strings MUST be placed in the translation files located at `i18n/locales/*.json`.
*   **Use the `useI18n` Hook:** Access all text through the `t()` function provided by the `useI18n` hook.

### 5. Forms

*   **Simple Forms:** Use controlled components with the `useState` hook for simple forms.
*   **API Submissions:** Use the native `fetch` API to submit form data to endpoints like Formspree. Do not add libraries like `axios`.

### 6. Code Structure

*   **Component Granularity:** Create small, single-purpose components. Each component should be in its own file within `src/components/`.
*   **File Naming:** Use PascalCase for component files (e.g., `MyComponent.tsx`).
*   **No Logic in `App.tsx`:** Keep `App.tsx` as a layout and composition root. Business logic should reside in child components or custom hooks.