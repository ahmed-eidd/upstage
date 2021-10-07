import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import GridBox from '../../components/GridBox/GridBox';
import MiniHeader from '../../components/MiniHeader/MiniHeader';
import Modal from '../../components/Modal/Modal';
import Table from '../../components/Table/Table';
import classes from './PageTwo.module.scss';

const PageTwo = () => {
  const [open,setOpen] = useState(false)
  const onOpenModal = () => {
    setOpen(true)
  }
  const onCloseModal = () => {
    setOpen(false)
  }
  return (
    <GridBox>
      <Modal open={open} onClose={onCloseModal}>
        <h1>hello</h1>
      </Modal>
      <MiniHeader className={classes.PageTwo__Header}>
        <Button onClick={onOpenModal}>Go Back</Button>
        <p>Brian Stainley's Long Goodbye House / Bar Report</p>
        <Button>Email</Button>
      </MiniHeader>
      <div className={classes.PageTwo__TableContainer}>
        <Table>
          <thead>
            <tr>
              <th>Performance</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Date</td>
              <td></td>
              <td>House Open</td>
              <td></td>
            </tr>
            <tr>
              <td>Curtain Check</td>
              <td></td>
              <td>Curtain speech</td>
              <td></td>
            </tr>
            <tr>
              <td>Weather</td>
              <td></td>
              <td>Top of show</td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>Intermission Length</td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>End of show</td>
              <td></td>
            </tr>
          </tbody>
        </Table>

        <Table>
          <thead>
            <tr>
              <th>Staff</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Lead houes manager</td>
              <td></td>
              <td>Box office</td>
              <td></td>
            </tr>
            <tr>
              <td>House manager</td>
              <td></td>
              <td>Box office</td>
              <td></td>
            </tr>
            <tr>
              <td>Lead bartender</td>
              <td></td>
              <td>Box office</td>
              <td></td>
            </tr>
            <tr>
              <td>bartender</td>
              <td></td>
              <td>Security office</td>
              <td></td>
            </tr>
            <tr>
              <td>Event bartender</td>
              <td></td>
              <td>secutrity office</td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </div>
    </GridBox>
  );
};

export default PageTwo;
