# AlburyEsportsSite

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.0.5.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.


## CSR-only setup

This app now runs as a **client-side rendered (CSR) Angular app**.

### What changed

- Removed Angular SSR server entrypoints and config files:
  - `src/server.ts`
  - `src/main.server.ts`
  - `src/app/app.config.server.ts`
  - `src/app/app.routes.server.ts`
- Removed SSR build options from `angular.json` (`server`, `outputMode`, and `ssr` in build options).
- Removed hydration provider from `src/app/app.config.ts` (`provideClientHydration(withEventReplay())`).
- Removed SSR-only dependencies and scripts from `package.json`:
  - `@angular/ssr`
  - `@angular/platform-server`
  - `express`
  - `@types/express`
  - `serve:ssr:albury-esports-site` script

### Result

- `ng serve` now runs a standard CSR dev server.
- `ng build` now outputs a browser build only (no Node server bundle).

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
