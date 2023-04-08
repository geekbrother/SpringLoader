# 🌈 SpringLoader [![npm version](https://badge.fury.io/js/spring-loader.svg)](https://badge.fury.io/js/spring-loader)

Gradient spring animated loading activity indicator component for React Native. 

The animation is created in pure [reanimated2](https://docs.swmansion.com/react-native-reanimated/) and [SVG](https://developer.mozilla.org/en-US/docs/Web/SVG).

It's lightweight, made in TypeScript, and can be used in the Splash screen (unlike Lottie and Rove animations).

## Showcase

![alt Showcase](https://github.com/geekbrother/SpringLoader/blob/main/assets/showcase.gif)

## How to use

The package uses TypeScript and provides types when importing. 

Add package to the React Native project by `npm i spring-loader`. 

Import the `SpringLoader` component `import { AnimationTypes, SpringLoader } from 'spring-loader';`.

Find a full usage example in [examples/expo-app/App.tsx](https://github.com/geekbrother/SpringLoader/blob/main/examples/expo-app/App.tsx).

## Example app

There is an `Expo` example app with the showcase in the `examples/expo-app` folder.

## Todo

Implement a [Skia](https://github.com/Shopify/react-native-skia) version
