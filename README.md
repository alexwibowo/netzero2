## Setup

### Node version
```
❯ npm -v
8.19.2
❯ node -v
v16.18.1
❯ npm install -g yarn
❯ yarn -v
1.22.19
```

### Initialising project

``` 
yarn create expo-app netZero2
```

When i first created the project, i got an error when trying to start expo web. It turns out i missed a few packages from the default expo creation.

``` 
npx expo install react-native-web@~0.18.9 react-dom@18.1.0 @expo/webpack-config@^0.17.2
```


## Running Project

If you are inside corporate network (e.g. with artifactory proxy), you might need to remove yarn.lock and re-install the project.
``` 
❯ rm yarn.lock
❯ yarn install
yarn install v1.22.19
info No lockfile found.
[1/4] 🔍  Resolving packages...
warning @expo/webpack-config > copy-webpack-plugin > cacache > @npmcli/move-file@1.1.2: This functionality has been moved to @npmcli/fs
warning @expo/webpack-config > webpack-dev-server > chokidar@2.1.8: Chokidar 2 does not receive security updates since 2019. Upgrade to chokidar 3 with 15x fewer dependencies
warning @expo/webpack-config > webpack-dev-server > chokidar > fsevents@1.2.13: fsevents 1 will break on node v14+ and could be using insecure binaries. Upgrade to fsevents 2.
warning @expo/webpack-config > webpack-dev-server > url > querystring@0.2.0: The querystring API is considered Legacy. new code should use the URLSearchParams API instead.
warning @expo/webpack-config > webpack-dev-server > sockjs > uuid@3.4.0: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.
warning @expo/webpack-config > webpack-dev-server > webpack-log > uuid@3.4.0: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.
warning @expo/webpack-config > webpack > watchpack > watchpack-chokidar2 > chokidar@2.1.8: Chokidar 2 does not receive security updates since 2019. Upgrade to chokidar 3 with 15x fewer dependencies
warning @expo/webpack-config > webpack > micromatch > snapdragon > source-map-resolve@0.5.3: See https://github.com/lydell/source-map-resolve#deprecated
warning @expo/webpack-config > optimize-css-assets-webpack-plugin > cssnano > cssnano-preset-default > postcss-svgo > svgo@1.3.2: This SVGO version is no longer supported. Upgrade to v2.x.x.
warning @expo/webpack-config > webpack > micromatch > snapdragon > source-map-resolve > source-map-url@0.4.1: See https://github.com/lydell/source-map-url#deprecated
warning @expo/webpack-config > webpack > micromatch > snapdragon > source-map-resolve > resolve-url@0.2.1: https://github.com/lydell/resolve-url#deprecated
warning @expo/webpack-config > webpack > micromatch > snapdragon > source-map-resolve > urix@0.1.0: Please see https://github.com/lydell/urix#deprecated
warning @expo/webpack-config > optimize-css-assets-webpack-plugin > cssnano > cssnano-preset-default > postcss-svgo > svgo > stable@0.1.8: Modern JS already guarantees Array#sort() is a stable sort, so this library is deprecated. See the compatibility table on MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#browser_compatibility
warning expo > uuid@3.4.0: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.
warning expo > expo-file-system > uuid@3.4.0: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.
warning expo > expo-constants > uuid@3.4.0: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.
warning expo > @expo/cli > uuid@3.4.0: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.
warning react-native > @react-native-community/cli > @react-native-community/cli-plugin-metro > metro > metro-minify-uglify > uglify-es@3.3.9: support for ECMAScript is superseded by `uglify-js` as of v3.13.0
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
warning "react-native > react-native-codegen > jscodeshift@0.13.1" has unmet peer dependency "@babel/preset-env@^7.1.6".
[4/4] 🔨  Building fresh packages...
success Saved lockfile.
✨  Done in 87.25s.
```

Now, you can try to run the app (while still connected to corporate network):
```
❯ yarn run web
yarn run v1.22.19
$ expo start --web
Starting project at /Users/wibowoa/dev/hackathon/netZero2
Unable to reach Expo servers. Falling back to using the cached dependency map (bundledNativeModules.json) from the package "expo" installed in your project.
Starting Metro Bundler
Starting Webpack on port 19006 in development mode.
⚠ ｢wds｣: transportMode is an experimental option, meaning its usage could potentially change without warning

<SOME QR CODE HERE>
<SOME QR CODE HERE>
<SOME QR CODE HERE>
<SOME QR CODE HERE>

› Metro waiting on exp://192.168.0.5:19000
› Scan the QR code above with Expo Go (Android) or the Camera app (iOS)

› Web is waiting on http://localhost:19006

› Press a │ open Android
› Press i │ open iOS simulator
› Press w │ open web

› Press j │ open debugger
› Press r │ reload app
› Press m │ toggle menu

› Press ? │ show all commands

Logs for your project will appear below. Press Ctrl+C to exit.

```

# FAQ

I initially got this error while trying to run ```yarn run web``` :

```
❯ yarn run web
yarn run v1.22.19
$ expo start --web
Starting project at /Users/wibowoa/dev/hackathon/netZero2
Unable to reach Expo servers. Falling back to using the cached dependency map (bundledNativeModules.json) from the package "expo" installed in your project.
FetchError: request to https://api.expo.dev/v2/versions/latest failed, reason: self signed certificate in certificate chain
FetchError: request to https://api.expo.dev/v2/versions/latest failed, reason: self signed certificate in certificate chain
at ClientRequest.<anonymous> (/Users/wibowoa/dev/hackathon/netZero2/node_modules/node-fetch/lib/index.js:1491:11)
at ClientRequest.emit (events.js:375:28)
at TLSSocket.socketErrorListener (_http_client.js:475:9)
at TLSSocket.emit (events.js:375:28)
at emitErrorNT (internal/streams/destroy.js:106:8)
at emitErrorCloseNT (internal/streams/destroy.js:74:3)
at processTicksAndRejections (internal/process/task_queues.js:82:21)
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```

To fix the issue, I installed ```expo-cli``` as dependency:
```
npm install --save-dev expo-cli
```


## Install React Navigation

```
❯ yarn add @react-navigation/native                                           
yarn add v1.22.19                                                                                                                                            
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...   
[3/4] 🔗  Linking dependencies...      
warning "react-native > react-native-codegen > jscodeshift@0.13.1" has unmet peer dependency "@babel/preset-env@^7.1.6".
[4/4] 🔨  Building fresh packages...
success Saved lockfile.    
success Saved 8 new dependencies.                                                                                                                            
info Direct dependencies                                                      
└─ @react-navigation/native@6.0.14
info All dependencies
├─ @react-navigation/core@6.4.1
├─ @react-navigation/native@6.0.14
├─ @react-navigation/routers@6.1.3
├─ filter-obj@1.1.0
├─ query-string@7.1.1
├─ split-on-first@1.1.0
├─ strict-uri-encode@2.0.0
└─ use-latest-callback@0.1.5
✨  Done in 8.57s.
```

``` 
❯ npx expo install react-native-screens react-native-safe-area-context

This command is being executed with the global Expo CLI. Learn more: https://blog.expo.dev/the-new-expo-cli-f4250d8e3421
To use the local CLI instead (recommended in SDK 46 and higher), run:
› npx expo install

Installing 2 SDK 47.0.0 compatible native modules using Yarn.
> yarn add react-native-screens@~3.18.0 react-native-safe-area-context@4.4.1
yarn add v1.22.19
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
[4/4] 🔨  Building fresh packages...
success Saved lockfile.
success Saved 4 new dependencies.
info Direct dependencies
├─ react-native-safe-area-context@4.4.1
└─ react-native-screens@3.18.2
info All dependencies
├─ react-freeze@1.0.3
├─ react-native-safe-area-context@4.4.1
├─ react-native-screens@3.18.2
└─ warn-once@0.1.1
✨  Done in 6.70s.

```