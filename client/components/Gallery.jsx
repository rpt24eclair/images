import React, { useState, useEffect }from 'react';
import ReactDOM from 'react-dom';
import ImageBox from './ImageBox.jsx';
import styles from './css/Gallery.module.css';
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
    <div className={styles.wrapper}>
      {render && buildImageComponents(images)}
      {/* <div className={styles.imageCell}>
        <img className={styles.image} src="https://source.unsplash.com/random/372x372" alt="Example image"/>
      </div>
      <div className={styles.imageCell}>
        <img className={styles.image} src="https://source.unsplash.com/random/372x372" alt="Example image"/>
      </div>
      <div className={styles.imageCell}>
        <img className={styles.image} src="https://source.unsplash.com/random/372x372" alt="Example image"/>
      </div>
      <div className={styles.imageCell}>
        <img className={styles.image} src="https://source.unsplash.com/random/372x372" alt="Example image"/>
      </div>
      <div className={styles.imageCell}>
        <img className={styles.image} src="https://source.unsplash.com/random/372x372" alt="Example image"/>
      </div>
      <div className={styles.imageCell}>
        <img className={styles.image} src="https://source.unsplash.com/random/372x372" alt="Example image"/>
      </div> */}
    </div>
  )
}

export default Gallery