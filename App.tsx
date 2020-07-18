
import React from 'react';


import { IndexScreen } from './src/screens/IndexScreen';
import { RouterApp } from './src/routes/RouterApp';
import { AppRegistry } from 'react-native';

const App = () => {
  return (
    <>
      <RouterApp />
    </>
  );
};


export default App;

AppRegistry.registerComponent('App', () => App)
