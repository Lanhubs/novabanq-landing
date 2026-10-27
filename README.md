# React + TypeScript + Vite

## Landing page configuration

Copy `.env.example` to `.env.local` and supply the official contact email,
Instagram URL, and LinkedIn URL when available. Restart Vite after changing
these values; production builds need the values set before `npm run build`.
Twitter links to https://x.com/usenovabanq. App-store buttons are awaiting their
destinations.

The waitlist form validates name and email but does not submit yet. The backend
README, `novabanq_doc.md`, `docs/api-contract.md`, and the live OpenAPI schema at
https://novabanq-api-5w9p.onrender.com/openapi.json did not specify a waitlist
endpoint when checked on 2026-10-27. Confirm the endpoint, request fields, and
response/error contract before connecting submissions. No signup data is logged.

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
