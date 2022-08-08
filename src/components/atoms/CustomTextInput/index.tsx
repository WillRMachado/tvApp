import React from 'react';

import {
  TextInput,
  TextInputProps,
  IconButton,
  IconProps as IconPropsType,
  useTheme,
} from '~modules';
import {ThemesType} from '~styles';

import CustomIcon from '../CustomIcon';

type Props = TextInputProps & {
  iconProps?: IconPropsType;
  trailingIconName?: string;
};

const CustomText: React.FC<Props> = ({
  variant,
  children,
  iconProps,
  trailingIconName,
  ...params
}) => {
  const defaultVariant = 'outlined';
  const customVariant = variant || defaultVariant;
  const {colors}: ThemesType = useTheme();

  return (
    <TextInput
      variant={customVariant}
      inputContainerStyle={{backgroundColor: colors.primary}}
      inputStyle={{color: colors.tertiary}}
      {...params}
      trailing={
        trailingIconName
          ? (props) => (
              <IconButton
                icon={(props) => (
                  <CustomIcon
                    name={trailingIconName}
                    {...iconProps}
                    {...props}
                  />
                )}
                {...props}
              />
            )
          : null
      }>
      {children}
    </TextInput>
  );
};

export default CustomText;
