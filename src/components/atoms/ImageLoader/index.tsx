import React, {useEffect, useState} from 'react';
import {StyleSheet, Image} from 'react-native';
import {useTheme, CircleSnail, ImageProgress} from '~modules';
import {measures, ThemesType} from '~styles';

export default function ImageLoader(props: {
  imageUri: string;
  style?: object;
  width?: number;
}) {
  const [proportion, setProportion] = useState(1);
  const {imageUri, style, width} = props;
  const {colors}: ThemesType = useTheme();

  useEffect(() => {
    Image.getSize(imageUri, (imgWidth, imgHeight) =>
      setProportion(imgHeight / imgWidth),
    );
  }, []);

  const proportionalHeight = (width?: number) => (width || 1) * proportion;

  return (
    <ImageProgress
      source={{uri: imageUri}}
      indicator={CircleSnail}
      indicatorProps={{
        color: colors.tertiary,
      }}
      style={[
        styles.defaultStyle,
        {width, height: proportionalHeight(width)},
        {...style},
      ]}
    />
  );
}

const styles = StyleSheet.create({
  defaultStyle: {
    width: measures.fontSize.XXL,
    height: measures.fontSize.XXL,
  },
});
