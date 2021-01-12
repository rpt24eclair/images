import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import styles from './css/Gallery.module.css';

const ImageBox = (props) => {

  const handleClick = (e) => {
    props.click(props.location);
  }

  return (
    <div className={styles.imageCell} onClick={() => handleClick()}>
      <img className={styles.image} key={props.location} src={props.url} height={1000} width={1000}/>
      <div className={styles.circle}></div>
    </div>

  )
}

export default ImageBox;