import React from 'react';

import {
  TextInput,
  TextInputProps,
  IconButton,
  IconProps as IconPropsType,
} from '~modules';

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
  return (
    <TextInput
      variant={customVariant}
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
