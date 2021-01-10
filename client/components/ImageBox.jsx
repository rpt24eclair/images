import React from 'react';
import styles from './css/Gallery.module.css';

const ImageBox = (props) => {

  return (
    <div className={styles.imageCell}>
      <img className={styles.image} key={props.i} src={props.url} height={1000} width={1000}/>
    </div>
  )
}

export default ImageBox;