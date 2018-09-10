import React from 'react';
import ArrowRight from './ArrowRight.jsx';

const PhotoRight = (props) => {
  return (
    <div>
      <ArrowRight />
      <img className='photo' images={props.images} src={`${props.images[2]}`} />
    </div>
  )
}

export default PhotoRight;
