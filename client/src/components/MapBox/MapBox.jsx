import React from 'react';
import CSSModules from 'react-css-modules';
import style from './mapbox.css';
import mapimg from './staticmap.png';

const MapBox = props => {
  // console.log(props)
  return (
    <div styleName="mapbox-container">
      <div styleName="mapbox-map">
      <img src={mapimg} styleName="mapimg" />
      </div>
      <div styleName="mapbox-text">
        <ul>
          <li>address</li>
          <li><a href="#">Get Directions</a> </li>
          <li>phone</li>
          <li><a href="#">Send to your Phone</a></li>
        </ul>
      </div>
    </div>
  )
}

export default CSSModules(MapBox, style, {allowMultiple: true});
