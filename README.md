# IdeaCrew Corporate Website

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

## Making Changes

There are 2 different types of changes that can be done to the website. [Tina CMS](https://tina.io/docs/) is used to quickly and easily modify specific content on the website (no developement experience req) [Admin Link](https://www.ideacrew.com/admin/). Not all content is able to modified through the CMS. Any content that can not be modified through the CMS can be done through local development of the code base by a developer. This should be done by creating [an issue](https://github.com/ideacrew/idc-web/issues/new) and assigning a developer to the issue. The developer will then make the changes and integrate the updates through a pull request.

Changes to the website should be done through feature branches and pull requests. The `trunk` branch is protected and requires a pull request to be merged.

For each pull request, a preview build will be created and a link to the preview will be added to the pull request in GitHub. View the PR in GitHub to see the link.

When the pull request is merged, the preview build will be removed and the app will be deployed to production.

## Deploying the App

- The app deploys automatically to Netlify on every push to the `trunk` branch.
- When the pull request is merged, the preview build will be removed and the app will be deployed to production.

## Contact Form

The website has 1 form on the contact page that uses Netlify forms, allowing us to take advantage of the SMTP and Akismet services. Each submissions will be sent to `info@ideacrew.com` and also to the [#company-website Slack Channel](https://ideacrew.slack.com/archives/C05GKB2RPNK) (Currently 🔒)

Form Submissions can be viewed here:
- [Real Submissions](https://app.netlify.com/sites/idc-web/forms/64b05d28c31b6b00080fc362?filter=ham)
- [Spam Submissions](https://app.netlify.com/sites/idc-web/forms/64b05d28c31b6b00080fc362?filter=spam)

Read more on Netlify Docs:
- [Form Submissions](https://docs.netlify.com/forms/submissions/)
- [Spam Filters](https://docs.netlify.com/forms/spam-filters/)
- [Form Notifications](https://docs.netlify.com/forms/notifications/)
