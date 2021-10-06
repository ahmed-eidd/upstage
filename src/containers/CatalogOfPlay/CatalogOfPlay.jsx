import React from 'react';
import GridBox from '../../components/GridBox/GridBox';
import Table from '../../components/Table/Table';
import classes from './CatalogOfPlay.module.scss';
import Button from '../../components/Button/Button';
import MiniHeader from '../../components/MiniHeader/MiniHeader';

const CatalogOfPlay = () => {
  return (
    <GridBox>
      <MiniHeader className={classes.Header}>
        <Button>Go Back</Button>
        <p>Long Goodbye</p>
        
        <Button>Print All</Button>
      </MiniHeader>
      <div className={classes.TableContainer}>
        <Table>
          <thead>
            <tr>
              <th>ACT</th>
              <th>SCENE</th>
              <th>TITlE</th>
              <th>PROPS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>1</td>
              <td>The Inro</td>
              <td>
                <Button>View</Button> <Button>Print</Button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>1</td>
              <td>The Inro</td>
              <td>
                <Button>View</Button> <Button>Print</Button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>1</td>
              <td>The Inro</td>
              <td>
                <Button>View</Button> <Button>Print</Button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>1</td>
              <td>The Inro</td>
              <td>
                <Button>View</Button> <Button>Print</Button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>1</td>
              <td>The Inro</td>
              <td>
                <Button>View</Button> <Button>Print</Button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>1</td>
              <td>The Inro</td>
              <td>
                <Button>View</Button> <Button>Print</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className={classes.ProductionTeam}>
        <h3 className={classes.Title}>Prodcution Team</h3>
        <div className={classes.ProductionTeam__Container}>
          <div className={classes.RedDot}></div>
          <p>Jasime Guy</p>
        </div>
        <div className={classes.ProductionTeam__Container}>
          <div className={classes.RedDot}></div>
          <p>Larie Hardy</p>
        </div>
      </div>
    </GridBox>
  );
};

export default CatalogOfPlay;
