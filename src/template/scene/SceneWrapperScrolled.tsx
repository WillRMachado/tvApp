import {ScrollView, View} from 'react-native';
import {PropsWithChildren} from 'react';
import React from 'react';
import globalStyles from '~styles';

type Props = {style?: Record<string, string | number>};

const SceneWrapperScrolled: React.FC<PropsWithChildren<Props>> = ({
  children,
  style,
  ...params
}) => {
  const customStyle = style || {};
  return (
    <ScrollView
      style={[globalStyles.structure.contentContainer, customStyle]}
      {...params}>
      {children}
    </ScrollView>
  );
};

export default SceneWrapperScrolled;
