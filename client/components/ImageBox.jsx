import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import styles from './css/Gallery.module.css';

const ImageBox = (props) => {

  // const [modalStatus, setModalStatus] = useState(false);
  // const [index, setIndex] = useState(props.i);

  const handleClick = (e) => {
    props.click();
  }

  /////// MODAL SETTINGS /////////
  // const customStyles = {
  //   content : {
  //     top                   : '50%',
  //     left                  : '50%',
  //     right                 : 'auto',
  //     bottom                : 'auto',
  //     marginRight           : '-50%',
  //     transform             : 'translate(-50%, -50%)'
  //   }
  // };

  // var subtitle;
  // const [modalIsOpen,setIsOpen] = useState(false);
  // const openModal = () => {
  //   setIsOpen(true);
  // }

  // const afterOpenModal = () => {
  //   // references are now sync'd and can be accessed.
  //   subtitle.style.color = '#f00';
  // }

  // const closeModal = () => {
  //   setIsOpen(false);
  // }

  return (
    <div className={styles.imageCell} onClick={() => handleClick()}>
      <img className={styles.image} key={props.i} src={props.url} height={1000} width={1000}/>
    </div>
  )
}

export default ImageBox;