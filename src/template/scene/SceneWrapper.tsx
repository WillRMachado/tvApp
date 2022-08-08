import {View} from 'react-native';
import {PropsWithChildren} from 'react';
import React from 'react';
import globalStyles from '~styles';
import {Spinner} from '~components';

export type Props = {
  isLoading?: boolean;
  style?: Record<string, string | number>;
};

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
