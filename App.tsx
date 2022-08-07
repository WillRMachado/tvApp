import 'react-native-gesture-handler';
import React from 'react';
import {
  ReduxProvider,
  NavigationContainer,
  PersistGate,
  MaterialProvider,
} from '~modules';
import MainNavigator from '~navigation/routes';
import reducersStore, {persistor} from './src/store';
import {mainTheme} from '~styles';

function NavigationWithRedux() {
  return (
    <NavigationContainer theme={mainTheme}>
      <MaterialProvider>
        <MainNavigator />
      </MaterialProvider>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <ReduxProvider store={reducersStore}>
      <PersistGate persistor={persistor}>
        <NavigationWithRedux />
      </PersistGate>
    </ReduxProvider>
  );
}
