# spotify-challenge

**Live Demo:** [http://nicholastaylor.org/spotify-challenge/](http://nicholastaylor.org/spotify-challenge/)

This is a little React app I threw together in response to a task in a Spotify job posting:
```
If you want to jumpstart the process of talking to us about this role, here’s a little challenge: write a program that outputs the largest unique set of characters that can be removed from this paragraph without letting its length drop below 50.
```

# Config Setup

From the project root, go to the constants directory and change config-SAMPLE.js to config.js:
`cd src/constants && mv config-SAMPLE.js config.js`

Now, if you have certain webfonts you want to use on your implementation, go to the webfont provider of your choice and build your font package. These providers typically give you a URL to put into the `<link rel="stylesheet">` tag. Copy that URL to your clipboard. warm up the IDE of your choice and open this config.js file. The file should be a simple JS object:

```
export const config = {
    fontURL: '',
    fontFamily: ''
}
```

A quick rundown of what these properties do:

## fontURL
Controls where the app grabs its webfonts from. This is where you should paste your URL.

## fontFamily
A typical CSS-friendly comma-delimited font stack. (ex. `"Helvetica Neue", Helvetica, Arial, sans-serif'`)  Don't put the semi-colon at the end.

# Testing, Building, Etc.

Now, you should be good to launch the app. All the typical React NPM commands apply:
* `npm start` – Starts the app in dev mode
* `npm test` – Starts the app in interactive watch mode
* `npm run build`  – Generates an optimized production build for you to upload to your site and run

Have fun!
-Nick
