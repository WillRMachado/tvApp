import React from 'react';
import {StyleSheet, View} from 'react-native';

import {CircleSnail, Text, TextProps, useTheme} from '~modules';
import globalStyles, {measures, ThemesType} from '~styles';

const Spinner: React.FC = () => {
  const {colors}: ThemesType = useTheme();

  return (
    <View style={styles.pageLoadingWrapper}>
      <CircleSnail size={measures.fontSize.XXL} color={colors.primary} />
    </View>
  );
};

export default Spinner;

const styles = StyleSheet.create({
  pageLoadingWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
});
