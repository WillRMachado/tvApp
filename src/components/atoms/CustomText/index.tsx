import React from 'react';
import {StyleSheet} from 'react-native';

import {Text, TextProps} from '~modules';

type Props = TextProps & {title?: boolean};

const CustomText: React.FC<Props> = ({variant, title, children, ...params}) => {
  const defaultVariant = title ? 'h4' : 'body1';
  const customVariant = variant || defaultVariant;
  const removeTagsRegex = /(<([^>]+)>)/gi;
  return (
    <Text
      variant={customVariant}
      style={[styles.text, title && styles.title]}
      {...params}>
      {typeof children === 'string'
        ? children.replace(removeTagsRegex, '')
        : children}
    </Text>
  );
};

export default CustomText;

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
  },
  title: {
    fontWeight: 'bold',
  },
});
