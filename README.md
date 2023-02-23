# LitPlaylist

This project is generated from the `lit-starter-js` package in [the main Lit
repo](https://github.com/lit/lit). Issues and PRs for this template should be
filed in that repo.

## Mocking Data
This project requires mocked data. Tool used for development: [mockoon](https://mockoon.com/)

## Setup

Install dependencies:

```bash
npm i
```

## Dev Server

To run the dev server and open the project in a new browser tab:

```bash
npm run serve
```

## Linting

Linting of JavaScript files is provided by [ESLint](eslint.org). In addition, [lit-analyzer](https://www.npmjs.com/package/lit-analyzer) is used to type-check and lint lit-html templates with the same engine and rules as lit-plugin.

The rules are mostly the recommended rules from each project, but some have been turned off to make LitElement usage easier. The recommended rules are pretty strict, so you may want to relax them by editing `.eslintrc.json`.

To lint the project run:

```bash
npm run lint
```

## Formatting

[Prettier](https://prettier.io/) is used for code formatting. It has been pre-configured according to the Lit's style. You can change this in `.prettierrc.json`.

Prettier has not been configured to run when committing files, but this can be added with Husky and `pretty-quick`. See the [prettier.io](https://prettier.io/) site for instructions.

## More information

See [Get started](https://lit.dev/docs/getting-started/) on the Lit site for more information.
