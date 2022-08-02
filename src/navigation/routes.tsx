import React from 'react';
import {DisplaySeriesScene, SerieDetailScene} from '~scenes';
import {createStackNavigator} from '~modules';
import routes from './routeNames';
const {series} = routes;

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
      }}>
      <Stack.Screen
        name={series.displaySeries}
        component={DisplaySeriesScene}
      />
      <Stack.Screen name={series.displayDetails} component={SerieDetailScene} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
