[![CircleCI](https://circleci.com/gh/Venatus/market-monalisa.svg?style=svg&circle-token=5aa7ab555399a529ac02e71a86c4cf1250d2e30e)](https://circleci.com/gh/Venatus/market-monalisa)

# market-monalisa

## **New Market UI Project**

The application was developed using React, CSS Modules and Apollo.

The archicture follows the atomic design guidelines in order to develop resuable components that are easy to compose together to form more complex ones.

The idea is to have small building blocks that are identified as atoms that can then be composed to form molecules, organisms, templates and pages.

The pages components map directory to the applications routes.

## Available Scripts

In the project directory, you can run:

### `yarn`

Before anything else run yarn to install all dependencies otherwise the project won't build

### `yarn start`

Launches the app in dev mode using webpack dev server and hot module replacement enabled

### `yarn build`

Builds the app for production to the `dist` folder

### `yarn build:dev`

Builds the app in development mode generating source maps.

### `yarn env:dev`

Sets the environment to dev

### `yarn env:prod`

Sets the environment to produciton

### `yarn check-types`

Runs typescipt tsm type checking command

### `yarn cleanup`

Removes the node_modules, dist and auto generated type definition files

### `yarn format:fix`

Runs the prettier formatter and fix formatting violations automatically

### `yarn lint:tslint`

Runs tslint

### `yarn lint:css`

Runs stylelint

### `yarn css:fix`

Runs the stylelint formatter and fix css/scss style formatting violations automatically

### `yarn storybook`

Builds storybook interactive component explorer

### `yarn test`

Launches the test runner in the interactive watch mode.
