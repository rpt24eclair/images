import React from 'react';
import styles from './css/Gallery.module.css';

const ImageBox = (props) => {

  return (
    <div className={styles.imageCell}>
      <img className={styles.image} key={props.i} src={props.url} height={372} width={372}/>
    </div>
  )
}

export default ImageBox;