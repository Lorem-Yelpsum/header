import React from 'react';
import CSSModules from 'react-css-modules';
import style from './save.css';

const Save = props => {
  return (
    <div styleName="save">Save</div>
  )
}

export default CSSModules(Save, style, {allowMultiple: true});