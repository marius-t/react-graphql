# Simple React App With GraphQL

This application is a simple example of a react app based on react-create-app with GraphQL
In order to be able to use the Github API you will need to generate a [token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token), it should contain the `public_repo` scope

## Running the application locally

1. `cp .env.example .env` - copy the `.env.example` to `.env` and adjust the variables
2. `nvm use` - [Unix Install Guide](https://github.com/nvm-sh/nvm#install--update-script) - [Windows Install Guied](https://github.com/coreybutler/nvm-windows)
3. `yarn install` - [Installation Guide](https://classic.yarnpkg.com/en/docs/install)
4. `yarn generate:certificates` - this will generate local certificates to serve the app via `https`
5. `yarn start:dev`  - by default the app will start on `https://localhost:3000` - make sure the port is not blocked by any other app

### Guide about tests

In order to run the tests you need to run `yarn test`.

While you are working and writing tests please use `yarn test:watch`