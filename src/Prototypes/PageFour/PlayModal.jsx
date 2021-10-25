import React from 'react';
import Modal from '../../components/Modal/Modal';
import PlayImg from '../../assests/Home/Grid-3.png';
import classes from '../PageSix/PageSix.module.scss';

const PlayModal = ({ open, onClose }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      title='Playbill'
      className={classes.PlayBillModal}
      size='s'
    >
      <div className={classes.PlayBillModal__Img}>
        <img src={PlayImg} alt='play' />
      </div>
      <p className={classes.PlayBillModal__Text}>Sept 3-13, 2021</p>
      <p className={classes.PlayBillModal__Text}>777 N. Green Chicago, IL 60607</p>
      <p className={classes.PlayBillModal__Text}>7pm-10pm</p>
    </Modal>
  );
};

export default PlayModal;
