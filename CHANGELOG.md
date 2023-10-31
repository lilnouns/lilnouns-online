# Changelog

All notable changes to this project will be documented in this file.

## [1.1.23] - 2023-10-31

### Refactor

- Update `package.json` scripts and `next.config.js` for new build process (#377)

## [1.1.21] - 2023-06-29

### Documentation

- Add funding to the packge configs
- Add crypto donate badge to the project readme
- Set sponsorships configuration for github

### Miscellaneous Tasks

- Switch `package-ecosystem` from `npm` to `pnpm` for Dependabot
- Change `package-ecosystem` back to `npm` on Dependabot configs

## [1.1.17] - 2023-05-21

### Miscellaneous Tasks

- Solve some issues over workflow configs

## [1.1.16] - 2023-05-21

### Miscellaneous Tasks

- Change pnpm version from ^7 to ^8 on build workflow

## [1.1.15] - 2023-05-21

### Miscellaneous Tasks

- Drop support for node version 17 and earlier

## [1.1.14] - 2023-05-10

### Miscellaneous Tasks

- Reorganize scripts on package file

## [1.1.13] - 2023-05-07

### Miscellaneous Tasks

- Add node version 20 on `build` workflow

## [1.1.12] - 2023-05-07

### Documentation

- Migrate to new github issue templates

### Miscellaneous Tasks

- Bump `pnpm` version from 7 to 8 on `pnpm` workflow
- Change `open-pull-requests-limit` from 10 to 20
- Cleanup and improve `pnpm` workflow configs

## [1.1.7] - 2023-03-28

### Refactor

- Migrate from `@next/font` to `next/font`

## [1.1.5] - 2023-02-08

### Bug Fixes

- Add missing prefixes for `tailwind` classes

### Miscellaneous Tasks

- Disable mangling class names logs on production
- Improve `classNameRegExp` for `tailwind` class names

### Performance

- Optimize fonts and remove external network requests

## [1.1.4] - 2023-02-03

### Bug Fixes

- Solve some minor issues and update dependencies

### Revert

- Bump ethers from 5.7.2 to 6.0.0

## [1.1.2] - 2023-01-23

### Documentation

- Add basic guidelines to contributing to the repository
- Update twitter badge due to depreciation

## [1.1.1] - 2023-01-22

### Documentation

- Add issue templates for bug report and feature requests

## [1.1.0] - 2023-01-18

### Features

- Add `tailwind` class names obfuscation by `webpack`

### Refactor

- Add missing `tw-` prefix for css classes

### Miscellaneous Tasks

- Change `open-pull-requests-limit` from 10 to 20

## [1.0.7] - 2023-01-03

### Miscellaneous Tasks

- Add caching for `pnpm` dependencies on `build` workflow

### Revert

- Bump actions/checkout from 3.1.0 to 3.2.0

## [1.0.6] - 2023-01-02

### Miscellaneous Tasks

- Remove pull request links from changelogs

## [1.0.5] - 2023-01-02

### Miscellaneous Tasks

- Overrides `json5` version `<2.2.2` by `>=2.2.2`
- Add a new `release` workflow to create releases

## [1.0.4] - 2023-01-02

### Miscellaneous Tasks

- Add a link to the github repository to the header
- Add frozen lockfile flag for `pnpm` over `build`
- Remove `strict-peer-dependencies` from `.npmrc`

## [1.0.3] - 2023-01-02

### Documentation

- Change project license to `APLv2`

## [1.0.2] - 2023-01-01

### Documentation

- Add some status badges to the readme
- Replace `yarn` by `pnpm` on project readme

### Miscellaneous Tasks

- Skip running `pnpm` workflow on ci dependencies
- Specifiy node version of cloudflare pages
- Setup stale bot to closes abandoned issues

## [1.0.0] - 2022-12-12

### Bug Fixes

- Solve some issues relate to recent migration

## [1.0.0-alpha.27] - 2022-12-12

### Bug Fixes

- Migrate from `wagmi` version `8.x` to `9.x`

## [1.0.0-alpha.26] - 2022-12-06

### Bug Fixes

- Replace `addressOrName` by `address` on `useEnsAvatar`
- Solve type error over `alchemyApiKey` and `infuraApiKey`

### Miscellaneous Tasks

- Add the `pnpm` workflow to update lock file

## [1.0.0-alpha.24] - 2022-10-27

### Features

- Add direct link to the events on time

## [1.0.0-alpha.23] - 2022-10-26

### Features

- Add link to the explorer over ens name component

## [1.0.0-alpha.22] - 2022-10-26

### Features

- Add infura to the `wagmi` providers

### Bug Fixes

- Add priority to the `wagmi` providers

## [1.0.0-alpha.21] - 2022-10-26

### Features

- Add alchemy to the `wagmi` providers

### Miscellaneous Tasks

- Add node version `19` to the `build` workflow

## [1.0.0-alpha.20] - 2022-10-25

### Bug Fixes

- Change body background color to container background
- Update copy right message

## [1.0.0-alpha.19] - 2022-10-25

### Refactor

- Improve index background appearance

## [1.0.0-alpha.17] - 2022-10-25

### Features

- Improve index appearance and separate components

## [1.0.0-alpha.16] - 2022-10-24

### Miscellaneous Tasks

- Improve `build` workflow based on template

## [1.0.0-alpha.15] - 2022-10-21

### Bug Fixes

- Solve a type issues related to `wagmi` new version

### Refactor

- Extract ens components to separate files
- Simplify conditions over `EnsName` component

### Miscellaneous Tasks

- Add node version `18` to the `build` workflow
- Suppress `next/no-img-element` for `eslint`

## [1.0.0-alpha.14] - 2022-10-12

### Bug Fixes

- Increase number of event from `50` to `100`

### Miscellaneous Tasks

- Add `images.unoptimized` to the next configs

## [1.0.0-alpha.13] - 2022-10-11

### Bug Fixes

- Increase number of event from `25` to `50`

## [1.0.0-alpha.12] - 2022-10-11

### Features

- Add ens instead of address if available
- Add ens avatar of address if available

### Bug Fixes

- Solve console errors related to duplicate keys

### Refactor

- Replace loading text with a spinner

## [1.0.0-alpha.11] - 2022-10-11

### Bug Fixes

- Disable `strict-peer-dependencies` on `npmrc`

### Miscellaneous Tasks

- Add a example file for environmental variables
- Update the lock file of `pnpm`

## [1.0.0-alpha.8] - 2022-09-23

### Refactor

- Remove reversing events from api and increase numbers

## [1.0.0-alpha.7] - 2022-09-22

### Refactor

- Change events full date to relative calendar format

## [1.0.0-alpha.6] - 2022-09-22

### Miscellaneous Tasks

- Exclude `functions` folder from root `tsconfig`

## [1.0.0-alpha.5] - 2022-09-22

### Features

- Add a pages middleware to proxy api requests
- Add recent proposal related events to the home page

## [1.0.0-alpha.3] - 2022-09-14

### Miscellaneous Tasks

- Enable automatic install of peer dependencies

## [1.0.0-alpha.2] - 2022-09-12

### Miscellaneous Tasks

- Replace `yarn` by `pnpm` over `build` workflow

## [1.0.0-alpha.1] - 2022-09-12

### Bug Fixes

- Solve missing url on next seo open graph
- Update home page title and description

### Miscellaneous Tasks

- Enable pre and post scripts runing by `pnpm`
- Add `wrangler` for develop and serve functions

## [1.0.0-alpha.0] - 2022-09-12

### Refactor

- Cleanup home page and styles
- Add `londrina-solid` font from google as default
- Add default seo config and information
- Add basic sitemap configuration

### Documentation

- Cleanup the project main readme file

### Miscellaneous Tasks

- Create new next project using creator
- Add an editor config configuration file
- Add a configuration file for `dependabot`
- Add new `build` github worklfow to run on pushs
- Add `export` to the package scripts
- Remove api folder due to static generation
- Add `git-clif` configuration file
- Replace default favicon by a nouns favicon
- Install and initialize tailwind css

<!-- generated by git-cliff -->
