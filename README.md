# Storybook

## Run

`yarn`

`yarn storybook`


## Sync Storybook and Console

Yalc is a package that allows you to use packages locally without having to publish a new version to NPM. It allows you to link the package.json to a .yalc folder which works like the node_modules folder.

Install Yalc globally
`npm i -g yalc`

Build and push modification or new version
`npm run local-publish`

Install the Storybook package locally on a project (you need to run this on console or another project)
`yalc add @numaryhq/storybook`

After installation, each time you run the build and push command, the package will be automatically updated on all projects where the package was installed with Yalc

**Be careful to modify the package.json on console before putting it into production!**