import React from 'react';
import CSSModules from 'react-css-modules';
import style from './writeReview.css';
import Icon from '../icons/Icons.jsx';

const Review = props => {
  return (
    <div onClick={props.onClick} styleName="writeReviewBtn">
    <Icon name={`24x24_star`} height={24} width={24} fill="#ffffff" />
    Write a Review</div>
  )
}

export default CSSModules(Review, style, {allowMultiple: true});
