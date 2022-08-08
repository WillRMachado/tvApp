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
      <MainNavigator />
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <ReduxProvider store={reducersStore}>
      <MaterialProvider>
        <PersistGate persistor={persistor}>
          <NavigationWithRedux />
        </PersistGate>
      </MaterialProvider>
    </ReduxProvider>
  );
}
