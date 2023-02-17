# Installation

To start you need to clone [this git repository](https://github.com/CodersCrew/hsm-website).  
Run `npm install` and `npm run dev` for development environment.

## Requirements

Application requires few tools installed on your system

- Node.js - **12.22.0 or later**
- yarn

# Development

Each change in this repository should be made by pull request. Pull requests are merged through `Squash and Merge` to present consistent merge history.  
Pull request should contain `Closes #<issue number>` text in description, eg. `Closes #9`, be titled accordingly to the issue with number in square brackets before, eg. `[9] Add name's rules for PR to readme` and be linked with issue through `Development` tab in pull request options. Make sure the linked issue contains all informations about pull request.  
After merge process every temporary branch will be deleted.

Commit messages should contain core of features. Every commit will trigger code linting and formatting using [Husky](https://github.com/typicode/husky). Do not use `--no-verify` flag for commits.

Branch types:

- main - last stable version of app
- develop - incoming changes to the next release, should be merged to main
- feature/bugfix (temporary) - any new changes, should be merged into develop, name should contain issue number and title, eg. `9-add-names-rules-for-pr-to-readme`

# Project structure

Every directory can be imported through the names listed below:

- `@common`:
  - `@assets` - Contains assets used in the app, eg. images, svg.
  - `@fonts` - Contains fonts used in the app.
- `@components` - Contains component files. A component should have its own directory and be written in the `index.tsx` file. Every file closely related to the component should be inside its directory, eg. `sample.spec.tsx`, `sample.stories.tsx`. A component should be exported in the root `index.ts` file (`export * from './Sample'`).
- `@context` - Contains React Context API files. Similar structure to `@components`.
- `@hooks` - Contains React Hooks files. Similar structure to `@components`.
- `@layouts` - Contains layout files. Similar structure to `@components`.
- `@pages` - Contains Next.js pages.
- `@services` - Contains services (like API service, ticket buy service, etc.). Similar structure to `@components`.
- `@utils` - Contains common functions used in the app. Similar structure to `@components`.
