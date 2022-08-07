//material
export {
  Text,
  TextInput,
  IconButton,
  Provider as MaterialProvider,
} from '@react-native-material/core';
export type {
  TextProps,
  TextInputProps,
  IconProps,
} from '@react-native-material/core';

//redux
export {PersistGate} from 'redux-persist/integration/react';
export {useSelector, Provider as ReduxProvider} from 'react-redux';
export {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
export type {ActionReducerMapBuilder} from '@reduxjs/toolkit';

//navigation
export {
  CommonActions,
  useNavigation,
  NavigationContainer,
  useTheme,
} from '@react-navigation/native';
export {createStackNavigator} from '@react-navigation/stack';
export type {StackNavigationProp as StackNavigationPropType} from '@react-navigation/stack';
export type {NativeStackScreenProps} from '@react-navigation/native-stack';

//icons
import {default as MaterialCommunityIconsI} from 'react-native-vector-icons/MaterialCommunityIcons';
import {default as SimpleLineIconsI} from 'react-native-vector-icons/SimpleLineIcons';
import {default as MaterialIconsI} from 'react-native-vector-icons/MaterialIcons';
import {default as FontAwesomeI} from 'react-native-vector-icons/FontAwesome';
import {default as FoundationI} from 'react-native-vector-icons/Foundation';
import {default as EvilIconsI} from 'react-native-vector-icons/EvilIcons';
import {default as OcticonsI} from 'react-native-vector-icons/Octicons';
import {default as IoniconsI} from 'react-native-vector-icons/Ionicons';
import {default as FeatherI} from 'react-native-vector-icons/Feather';
import {default as EntypoI} from 'react-native-vector-icons/Entypo';
import {default as ZocialI} from 'react-native-vector-icons/Zocial';

export {
  MaterialCommunityIconsI,
  SimpleLineIconsI,
  MaterialIconsI,
  FontAwesomeI,
  FoundationI,
  EvilIconsI,
  OcticonsI,
  IoniconsI,
  FeatherI,
  EntypoI,
  ZocialI,
};

export const IconsOptions = {
  MaterialCommunityIconsI,
  SimpleLineIconsI,
  MaterialIconsI,
  FontAwesomeI,
  FoundationI,
  EvilIconsI,
  OcticonsI,
  IoniconsI,
  FeatherI,
  EntypoI,
  ZocialI,
};

// general
export {default as ImageProgress} from 'react-native-image-progress';
export {CircleSnail} from 'react-native-progress';
export {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
export {default as Modal} from 'react-native-modal';
