import React from 'react';
import CSSModules from 'react-css-modules';
import style from './save.css';
import Icon from '../icons/Icons.jsx';

const Save = props => {
  return (
    <div styleName="save">
    <Icon name={`14x14_save`} height={14} width={14} fill="#666" />
    Save</div>
  )
}

export default CSSModules(Save, style, {allowMultiple: true});