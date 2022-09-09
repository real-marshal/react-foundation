# react-foundation

**Project template for a React app in Typescript with Webpack & Babel**

- Stable familiar tools like Webpack and Babel for bundling, HMR, automatic polyfilling etc but pre-configured for best performance
- Yarn 3 with PnP enabled (read below if you want to opt out) and editor SDKs included
- Extensive ESLint config + prettier + commitlint to standartize code style with configured git hooks
- Established project structure for medium and large projects
- GitHub CI/CD workflows for running tests, making releases with automatic release notes from conventional commits and deployment to GitHub Pages
- Long README to explain some stuff

## Usage

1. Make sure to have your environment set up by doing one of these:
   - Install `yarn` and `nvm` to use (and install if needed) the correct node version for the project.
   - Install `docker`. The included Dockerfile allows you to make a build for manual deployment.
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
5. Continue reading to configure CI/CD

## CI/CD

You don't have to do anything to get CI for tests working, just push any branch and see the results on GitHub.

For CD you need to do a few things first:

1. Create a PAT (we can't use default `GITHUB_TOKEN` as it [limits our ability to trigger other workflows](https://docs.github.com/en/actions/using-workflows/triggering-a-workflow#triggering-a-workflow-from-a-workflow)). Go to GitHub Settings -> Developer Settings -> Personal access tokens, generate a new one with `repo` scope and no expiration and copy it.
2. Create a secret to store the PAT. Go to your repository settings -> Secrets and create a new one with name `PAT` and the value from the previous step.
3. Choose GitHub Pages source. Go to your repository settings -> Pages and set the source to GitHub Actions.
4. Change environment protection rules (required because tags are used to make deployments). Go to your repository settings -> Environments -> github-pages and add new deployment branch rule with pattern `v*`

Now create some cool features or make fixes and commit them with messages adhering to standard conventional commits rules. When you are ready and all tests are green, go to GitHub Actions -> Release and run the workflow. This will check if your code still builds, create/update a `CHANGELOG.md` from the commit messages of types `feature` or `fix`, bump major/minor/patch version in `package.json` according to your commits' types, create a new tag with this version, create a release on GitHub with the generated release notes (same as new changes in `CHANGELOG.md`). If the release is successful, Deployment workflow starts to build and deploy the app to GitHub Pages.

To make releases [semantic-release](https://github.com/semantic-release/semantic-release) is used so you can read their docs for more details (keep in mind that their assumed workflow is to automatically release on every push to master which is not used here as it doesn't really make sense in my opinion).

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

## Why use modern-normalize.css?

I see 3 popular projects for normalizing CSS, i.e. `normalize.css`, `modern-normalize.css` and `sanitize.css`. Everyone heard about `normalize.css`, but currently it doesn't look maintained, has too many rules specifically for IE, which I think is rarely targeted now, and doesn't contain box-sizing: border-box for everything for some weird reason. On the other hand, `sanitize.css` seems to be too opinionated. This leaves `modern-normalize.css` as the perfectly balanced solution.

## Formatting decisions

1. JSX single quotes - Dan said [this](https://github.com/airbnb/javascript/issues/269#issuecomment-134990455) and explained more [here](https://github.com/airbnb/javascript/issues/269#issuecomment-135201861). You can’t be smarter than Dan. And also you don’t have to press shift to type quotes, how cool is that? Plus everyone loves consistency.
2. 100 line width because 80 is too small and 120 feels bad when doing file comparisons side by side.
3. Why add new lines at the end of a file (apart from it being POSIX standard, easy concatenation bla bla) [Link](https://github.com/prettier/prettier/issues/6360#issuecomment-999192730)

## Some other free deployment options

- https://fly.io
- https://render.com
