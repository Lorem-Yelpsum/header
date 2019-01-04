import React from 'react';
import CSSModules from 'react-css-modules';
import style from './mapbox.css';
import Icon from '../icons/Icons.jsx';

const MapBox = props => {
  return (
    <div styleName="mapbox-container">
      <div styleName="mapbox-map">
      <img src="https://s3.amazonaws.com/fec-sample-imgs/imgs/staticmap.png" styleName="mapimg" />
      </div>
      <div styleName="mapbox-text">
        <ul>
          <li>
            <Icon name={`18x18_marker`} height={18} width={18} fill="#666" />
            address</li>
          <li>
            <Icon name={`18x18_directions`} height={18} width={18} fill="#666" />
            <a href="#">Get Directions</a></li>
          <li>
            <Icon name={`18x18_phone`} height={18} width={18} fill="#666" />
            phone</li>
          <li>
            <Icon name={`18x18_mobile`} height={18} width={18} fill="#666" />
            <a href="#">Send to your Phone</a></li>
        </ul>
      </div>
    </div>
  )
}

export default CSSModules(MapBox, style, {allowMultiple: true});
