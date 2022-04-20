/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react'
import type {Node} from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen'

import { NavigationContainer } from "@react-navigation/native";
import LeftDrawer from './src/components/navigators/LeftDrawer'


const App: () => Node = () => {

  return (
    <NavigationContainer>
      <LeftDrawer />
    </NavigationContainer>
  );
};


export default App;
