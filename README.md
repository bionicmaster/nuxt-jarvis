# Webpack Jarvis Module

> [Jarvis Dashboard](https://github.com/zouhir/jarvis) integration for [Nuxt](https://github.com/nuxt/nuxt.js)

## Install

Install the package:

```sh
yarn add nuxt-jarvis -D
# or npm i nuxt-jarvis -D
```

## Setup

- Add `nuxt-jarvis` to `nuxt.config.js`:

```js
// nuxt.config.js

{
  modules: [
    'nuxt-jarvis',
  ]
}
```

In your browser open:

```
localhost:1337
```

and you are all set!


## Options

[Webpack plugin options](https://github.com/zouhir/jarvis#options) can be passed to Webpack Jarvis in Nuxt config's modules sections:

```js
// nuxt.config.js

{
  modules: [
    ['jarvisdashboard-module', {
      port: 1337
    }]
  ]
}
```

Or by adding a `jarvisDashboard` key:

```js
// nuxt.config.js

{
  jarvisDashboard: {
    port: 1337
  }
}
```
