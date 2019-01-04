import React from 'react';
import CSSModules from 'react-css-modules';
import style from './addPhoto.css';
import Icon from '../icons/Icons.jsx';

const AddPhoto = props => {
  return (
    <div styleName="addPhoto">
    <Icon name={`18x18_add_photo`} height={18} width={18} fill="#666" />
    Add Photo</div>
  )
}

export default CSSModules(AddPhoto, style, {allowMultiple: true});