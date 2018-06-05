import React from 'react';
import Modal from 'react-modal';
import AddOption from './AddOption';

const OptionModal = (props) => (
  <Modal
    isOpen = {!!props.selectedOption}
    style={customStyles}
    contentLabel = "Registro"
    ariaHideApp={false}
  >
      <h1> Elegiste: </h1>
      {props.selectedOption && <h2> {props.selectedOption} </h2>}
      <p> Comprueba que la actividad seleccionada fue la deseada.</p>
      <button onClick = {props.clearModal} > Ok </button>
  </Modal>
);

const customStyles = {
  overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.90)'
  },
  content : {
    top                   : '40%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-60%',
    transform             : 'translate(-50%, -50%)',
    backgroundColor: 'rgba(200, 171, 94, 0.8)'
  }
};

export default OptionModal;
