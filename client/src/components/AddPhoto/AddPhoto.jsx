import React from 'react';
import CSSModules from 'react-css-modules';
import style from './addPhoto.css';

const AddPhoto = props => {
  return (
    <div styleName="addPhoto">Add Photo</div>
  )
}

export default CSSModules(AddPhoto, style, {allowMultiple: true});