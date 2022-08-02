import {View} from 'react-native';
import {PropsWithChildren} from 'react';
import React from 'react';
import globalStyles from '~styles';

type Props = {style?: Record<string, string | number>};

const SceneWrapper: React.FC<PropsWithChildren<Props>> = ({
  children,
  style,
  ...params
}) => {
  const customStyle = style || {};
  return (
    <View
      style={[globalStyles.structure.contentContainer, customStyle]}
      {...params}>
      {children}
    </View>
  );
};

export default SceneWrapper;
