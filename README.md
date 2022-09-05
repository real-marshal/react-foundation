# react-foundation

**Project template for a React app in Typescript with Webpack & Babel**

- Stable familiar tools like Webpack and Babel for bundling, HMR, automatic polyfilling etc but pre-configured for best performance
- Yarn 3 with PnP enabled (read below if you want to opt out) and editor SDKs included
- Extensive ESLint config + prettier + commitlint to standartize code style with configured git hooks
- Established project structure for medium and large projects
- GitHub CI and CD workflows for running tests and deployment to GitHub Pages + simple build Dockerfile
- Long README to explain some stuff

## Usage

1. Make sure to have your environment set up by doing one of these:
   - Install `yarn` and `nvm` to use (and install if needed) the correct node version for the project.
   - Install `docker`. The included Dockerfile allows you to either run a dev server with HMR or make a build for deployment.
2. Clone the repo.
3. _(Optional)_ Configure your editor to be able to work with PnP packages (required if you use VS Code/vim/neovim/emacs)
   - For VS Code yarn SDKs are already included in the project, all you need to do is install [ZipFS](https://marketplace.visualstudio.com/items?itemName=arcanis.vscode-zipfs) addon to make go to definition work correctly.
   - For vim/neovim/emacs you need to do a bit [more](https://yarnpkg.com/getting-started/editor-sdks#vim).
   - Run `yarn dlx @yarnpkg/sdks` to update currently installed SDKs.
4. _(Optional)_ Make ESLint extension in your editor show the messages as warnings instead of errors. We need them to be errors in the config file so that CI/CD or pre-commit hook would stop with an error. But during development I really hate seeing them as errors as technically they are not errors and shouldn’t be in the same category as, say, TS errors. You can achieve this by doing the following:
   - For VS Code add to your project settings.json
     ```
     "eslint.rules.customizations": [
       { "rule": "*", "severity": "warn" }
     ]
     ```
   - For JetBrains IDEs take a look [here](https://www.jetbrains.com/help/webstorm/eslint.html#ws`eslint`configure`highlighting`override`configuration`severity)

## Yarn 3 with PnP enabled, but Zero Installs disabled?

I really like the idea behind PnP and how fast it is. Zero-Installs seemed like not a bad idea at first, not too exciting, but still, until I stumbled upon [this](https://github.com/yarnpkg/berry/issues/180#issuecomment-955166019). The increase of repo size over just 2 years is completely insane. And the more often you update or change your dependencies, the crazier it will get. LFS may be a potential solution but at this point I think it’s really not worth it.

You can also disable PnP, if you really want to use something more standard, have problems or use [unsupported packages](https://yarnpkg.com/features/pnp#incompatible) like React Native:

1. Set `nodeLinker` to `node-modules` (classic npm style) or `pnp` in `.yarnrc.yml`.
2. Remove `.pnp.cjs`.

## Regarding bundlers & compilers

- Storybook benchmarks show that `webpack 5` with lazy compilation and code splitting is as fast as `vite` (which uses `esbuild`). [Link](https://storybook.js.org/blog/storybook-performance-from-webpack-to-vite/).
- Looking at the issues I think `esbuild-loader` isn’t mature enough to be used for any serious work.[Link 1](https://github.com/privatenumber/esbuild-loader/issues/267) [Link 2](https://github.com/privatenumber/esbuild-loader/issues/268) [Link 3](https://github.com/privatenumber/esbuild-loader/issues/250) [Link 3.1](https://github.com/evanw/esbuild/issues/645). Also no support for esbuild or babel plugins.
- I don’t think `babel` is really needed nowadays, unless you need some specific plugins or you’re not using TS. But even to just get react hot reloading (with `react-refresh`) you need `babel` or `swc`. There’s `react-refresh-typescript` but looking at the issues it seems they have problems keeping up with the upstream.
- There’s also `swc` which is a fast alternative to `babel` that is worth consideration if all `babel` plugins you use are ported to `swc`. But as I can see in most cases these ports are maintained by Next team which means they won’t be updated as fast as original babel plugins and can contain their own bugs.

This all leads me to believe that `webpack` + `babel` is still the most versatile, reliable and future proof solution.

## Formatting decisions

1. JSX single quotes - Dan said [this](https://github.com/airbnb/javascript/issues/269#issuecomment-134990455) and explained more [here](https://github.com/airbnb/javascript/issues/269#issuecomment-135201861). You can’t be smarter than Dan. And also you don’t have to press shift to type quotes, how cool is that? Plus everyone loves consistency.
2. 100 line width because 80 is too small and 120 feels bad when doing file comparisons side by side.
3. Why add new lines at the end of a file (apart from it being POSIX standard, easy concatenation bla bla) [Link](https://github.com/prettier/prettier/issues/6360#issuecomment-999192730)

## Some other free deployment options

- https://fly.io
- https://render.com
