import React from 'react';
import CSSModules from 'react-css-modules';
import style from './share.css';
import Icon from '../icons/Icons.jsx';

const Share = props => {
  return (
    <div styleName="share">
    <Icon name={`18x18_share`} height={18} width={18} fill="#666" />
    Share</div>
  )
}

export default CSSModules(Share, style, {allowMultiple: true});