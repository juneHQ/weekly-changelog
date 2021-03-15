/* eslint-disable react/jsx-props-no-spreading */
import { createIcon } from '@chakra-ui/icons';
import React from 'react';
import PropTypes from 'prop-types';
import icons from './icons';
import logos from './logos';
import avatars from './avatars';
import illustrations from './illustrations';
import templateIcons from './templateIcons';

function Icon(props) {
  const { name, iconType } = props;

  let iconSvg;
  switch (iconType) {
    case 'icon':
      iconSvg = icons[name];
      break;
    case 'logo':
      iconSvg = logos[name];
      break;
    case 'templateIcon':
      iconSvg = templateIcons[name];
      break;
    case 'avatar':
      iconSvg = avatars[name];
      break;
    case 'illustration':
      iconSvg = illustrations[name];
      break;
    default:
      iconSvg = icons[name];
      break;
  }

  const IconComponent = createIcon(iconSvg);
  return <IconComponent {...props} />;
}

Icon.propTypes = {
  name: PropTypes.string,
  iconType: PropTypes.string,
};

export default Icon;
