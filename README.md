![Is Webview](https://repository-images.githubusercontent.com/547424093/1ecc670a-803d-489d-b9d1-a289c351a14b)

![GitHub package.json version](https://img.shields.io/github/package-json/v/dvlden/is-webview?color=86c7ff&style=flat-square)
![npm bundle size (scoped)](https://img.shields.io/bundlephobia/minzip/@dvlden/is-webview?color=%2386c7ff&style=flat-square)

# Is Webview
A utility module that takes user-agent string and determines whether it uses webview or native browser. It has been tested for Android and Apple devices with a few samples collected by running ads.

For my very specific use-case, it successfully detects viewing from Facebook, Instagram, Tiktok and Snapchat.

> It does not rely on `window.navigator.standalone` for iOS, to allow Node.js to also use this module.

<br>

## Installation

Use your favourite package manager... In my case that's `pnpm`.

```bash
pnpm i @dvlden/is-webview
```

<br>

## Usage

**Browser**
```ts
import { isWebview } from '@dvlden/is-webview'

if (isWebview(window.navigator.userAgent)) {
  // do something
}
```

**Node**
```ts
const { isWebview } = require('@dvlden/is-webview')

if (isWebview(/* pass user-agent from the request */)) {
  // do something
}
```

<br>

### Why?

Did you know that all of the apps that offer a webview experience (in-app browser), are tracking their users through it. This is especially true for social media apps. That's the main reason why I made this module; to help some websites escape tracking by telling visitors to tap on the `...` from Webview and open the website in the browser, while keeping query parameters that social media appends for pixel tracking.
