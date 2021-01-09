import React, { useState, useEffect }from 'react';
import ReactDOM from 'react-dom';
const axios = require('axios');

const Gallery = (props) => {

  const [images, setImages] = useState([]);

  useEffect(() => {
    let shoeId = props.modelId
    axios.get(`/products/${shoeId}/gallery`)
      .then((images) => {
        console.log(images);
        setImages(images);
      });
  }, [])

  return (
    <div>
      <p>Testing our first render</p>
    </div>
  )
}

export default Gallery