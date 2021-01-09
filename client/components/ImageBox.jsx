import React from 'react';

const ImageBox = (props) => {

  return (
    <div className='singleImage' key={props.i}>
      <img src={props.url}/>
    </div>
  )
}

export default ImageBox;