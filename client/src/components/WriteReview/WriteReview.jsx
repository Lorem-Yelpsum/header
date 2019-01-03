import React from 'react';
import CSSModules from 'react-css-modules';
import style from './writeReview.css';

const Review = props => {
  return (
    <div onClick={props.onClick} styleName="writeReviewBtn">Write a Review</div>
  )
}

export default CSSModules(Review, style, {allowMultiple: true});