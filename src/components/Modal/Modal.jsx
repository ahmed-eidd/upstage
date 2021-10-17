import React from 'react';
import classes from './Modal.module.scss';
import ReactModal from 'react-modal';
import {extendClasses} from '../../utilities/extendClasses.js'


ReactModal.setAppElement('#root');

const Modal = ({ open, onClose, children,className, title, size='m' }) => {
  return (
      <ReactModal
        isOpen={open}
        className={extendClasses(classes.Modal,className,size === 'm' && classes.size_m, size === 's' && classes.size_s)}
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
        <h3 className={classes.Modal__Title}>{title}</h3>
        <div className={classes.Modal__Content}>

        {children}
        </div>
      </ReactModal>

  );
};

export default Modal;
