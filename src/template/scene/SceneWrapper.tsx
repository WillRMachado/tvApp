import {ScrollView, View} from 'react-native';
import {PropsWithChildren} from 'react';
import React from 'react';
import globalStyles from '~styles';
import {ActivityIndicator} from '@react-native-material/core';
import {useTheme, CircleSnail, ImageProgress} from '~modules';
import {Spinner} from '~components';

type Props = {style?: Record<string, string | number>};

const SceneWrapper: React.FC<PropsWithChildren<Props>> = ({
  children,
  style,
  isLoading,
  ...params
}) => {
  const customStyle = style || {};
  return (
    <View
      style={[globalStyles.structure.contentContainer, customStyle]}
      {...params}>
      {isLoading ? <Spinner /> : children}
    </View>
  );
};

export default SceneWrapper;
