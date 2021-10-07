import React from 'react';
import classes from './Modal.module.scss';
import ReactModal from 'react-modal';
import {extendClasses} from '../../utilities/extendClasses.js'


ReactModal.setAppElement('#root');

const Modal = ({ open, onClose, children,className }) => {
  return (
      <ReactModal
        isOpen={open}
        className={extendClasses(classes.Modal,className)}
        onRequestClose={onClose}
        style={{
          overlay: {
            backgroundColor: '#434343c3',
            display:'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }
        }}
      >
        <div onClick={onClose} className={classes.Modal__CloseBtn}>
          <i className="fas fa-times"></i>
        </div>
        <h3 className={classes.Modal__Title}>Title</h3>
        {children}
      </ReactModal>

  );
};

export default Modal;
