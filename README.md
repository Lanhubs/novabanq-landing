# React + TypeScript + Vite

## Landing page configuration

Copy `.env.example` to `.env.local` and supply the official contact email,
Instagram URL, and LinkedIn URL when available. Restart Vite after changing
these values; production builds need the values set before `npm run build`.
Twitter links to https://x.com/usenovabanq. App-store buttons are awaiting their
destinations.

The waitlist form submits to `POST /api/v1/waitlist`. `src/lib/waitlist-api.ts`
holds the base URL as a constant rather than an env var, so changing backend
means editing that one line; the test instance is
`https://novabanq-api-5w9p.onrender.com/api/v1`. The request body uses the API's
snake_case names — `full_name`, `email`, and `phone` only when the visitor typed
one — because the backend rejects an unknown or camelCased key instead of
ignoring it.

Feedback goes through the form's single status line, which branches on
`error.code`: `WAITLIST_EMAIL_EXISTS` (409) reads as "you're already on the
list", `RATE_LIMITED` (429) as a wait-a-few-minutes notice, `VALIDATION_ERROR`
(422) as a check-your-details notice, and anything else — including a blocked
origin, which the browser reports without any server-side code — as a generic
retry. No signup data is logged.

Before publishing, the deployed API must list this site's origin in
`CORS_ALLOWED_ORIGINS`. A JSON POST is prefighted, so a missing origin fails in
the browser with no backend log.

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
