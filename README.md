## About

This is a react-native app, loading imformation by using [Fake JSON API](https://mocki.io/fake-json-api).

## Features

- Drawer navigator
- Bottom tabs navigator
- Fetch API data

## Technologies

- React
- React Native
- React Navigation
- Axios

## Consumed Time

- Creating new project and preparing virtual devices: 3hr
- Implementing Drawer navigator: 3hr
- Implementing Bottom tabs navigator: 3hr
- Fetching API data: 2hr
- Displaying data: 1hr
- Styling: 3hr

## Folder Structure

```
├── Readme.md                   
├── App.js
├── index.js                         
└── src                      
    └── components
        └── atoms 
            └── UserCard.js
        └── molecules
            └── BottomTabs.js
        └── navigators
            ├── HomeStack.js
            ├── LeftDrawer.js
            └── MainTabs.js
        └── pages                       //分頁
            ├── AboutScreen.js
            ├── AlbumsScreen.js
            ├── FeedScreen.js
            ├── HomeScreen.js
            └── SettingsScreen.js
    └── theme                           //主題顏色與樣式
        ├── colors.js
        └── fonts.js
```

## How to publish the app

### Google Play Store

1. [Digitally signing your Android app](https://developer.android.com/studio/publish/app-signing#app-signing-google-play)

    For security and encryption, it is mandatory to digitally sign the apps before publishing.
    You need a hash key, a release key, to sign an app. This key is used to sign all the future updates, so it’s important to keep it safe; otherwise, you may lose access to your app.

2. Generating an upload key

    You can generate an upload key using [Java keytool](https://docs.oracle.com/javase/8/docs/technotes/tools/unix/keytool.html).

3. Updating Gradle files

4. Generating the APK release build

5. Testing the release build

    If you want to test your release build without manually installing it on your phone,
    run it with the following command:
    ```
    $ npx react-native run-android --variant=release
    ```

### Apple App Store

1. Enable App Transport Security

2. Configure release scheme

3. Build app for release

    You can also use the React Native CLI to perform this operation using the option --configuration with the value Release.
    Run the command below:
    ```
    $ npx react-native run-ios --configuration Release
    ```




