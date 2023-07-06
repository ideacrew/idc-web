# IdeaCrew Company Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/7e81fc76-3451-4354-a2cb-cb0df0e522e8/deploy-status)](https://app.netlify.com/sites/idc-web/deploys)

## Prerequisites

You will need a personal Netlify account for any development or building of this app. Get an account here [Netlify IdeaCrew Team](https://app.netlify.com/teams/ideacrew/members).

Once you have an account, you will need to be added to the IDC team. Contact a team member to be added.

- One Time Setup

  - Install packages: `npm install`
  - Login to Netlify CLI: `npx netlify login` (notice the `npx` command)

## Development

- Run the app: `npm start`
- App will be available on http://localhost:1313/

## Building the App locally

- Build the app: `npm run build:local`
- App will be built to `public/` directory

## Testing the Netlify Build

To mirror the Netlify build locally, you can run the following command: `npm run build:netlify`. This will allow you to quickly test the build locally before pushing to Netlify.

## Deploying the App

- The app deploys automatically to Netlify on every push to the `trunk` branch.

- Pushes to the `trunk` branch will be guarded and require a pull request to be merged.
- For each pull request, a preview build will be created and a link to the preview will be added to the pull request in GitHub.
- When the pull request is merged, the preview build will be removed and the app will be deployed to production.
