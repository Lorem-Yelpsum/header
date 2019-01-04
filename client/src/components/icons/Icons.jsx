import React from 'react';
import './header-icons.svg';

const Icon = ({name, width, height, fill}) => (
  <svg width={width} height={height} fill={fill || '#000'}>
    <use xlinkHref={`#header-icons_${name}`} />
  </svg>
)

export default Icon;
