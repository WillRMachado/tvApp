import React from 'react';
import {
  IconProps,
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
} from '~modules';

type Props = IconProps;

const IconsOptions = {
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

const CustomIcon: React.FC<Props> = ({family, ...params}) => {
  const choosenFamily = family || 'MaterialCommunityIconsI';
  const IconComponent = IconsOptions[choosenFamily];
  return <IconComponent {...params} />;
};

export default CustomIcon;
