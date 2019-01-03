import React from 'react';
import CSSModules from 'react-css-modules';
import style from './share.css';

const Share = props => {
  return (
    <div styleName="share">Share</div>
  )
}

export default CSSModules(Share, style, {allowMultiple: true});