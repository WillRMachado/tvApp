import 'react-native-gesture-handler';
import React from 'react';
import {Provider, NavigationContainer, PersistGate} from '~modules';
import MainNavigator from '~navigation/routes';
import reducersStore, {persistor} from './src/store';
import {mainTheme} from '~styles';

function NavigationWithRedux() {
  return (
    <NavigationContainer theme={mainTheme}>
      <MainNavigator />
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <Provider store={reducersStore}>
      <PersistGate persistor={persistor}>
        <NavigationWithRedux />
      </PersistGate>
    </Provider>
  );
}
