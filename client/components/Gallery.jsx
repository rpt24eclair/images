import React, { useState, useEffect }from 'react';
import ReactDOM from 'react-dom';
import ImageBox from './ImageBox.jsx';
const axios = require('axios');

const Gallery = (props) => {

  const [images, setImages] = useState([]);
  const [render, setRender] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    let shoeId = props.modelId
    axios.get(`/products/${shoeId}/gallery`)
      .then((images) => {
        setImages(images.data);
        setRender(true);
      })
      .catch((err) => {
        setErrorMessage('Unable to retrieve images');
      });
  }, [])

  const buildImageComponents = (imageUrls) => {
    return imageUrls.map((image, i)=> {
      return <ImageBox url={image} location={i} />
    });
  }


  return (
    <div className='images'>
      {render && <div>
        {buildImageComponents(images)}
      </div>}
    </div>
  )
}

export default Gallery