import React from 'react';
import Button from '../../components/Button/Button';
import GridBox from '../../components/GridBox/GridBox';
import MiniHeader from '../../components/MiniHeader/MiniHeader';
import Table from '../../components/Table/Table';
import classes from './PageFive.module.scss';
import Icon1 from '../../assests/Login/Group 544.png';
import Icon2 from '../../assests/Login/Group 545.png';
import Icon3 from '../../assests/Login/Group 546.png';

const PageFive = () => {
  return (
    <GridBox>
      <MiniHeader className={classes.Header}>
        <Button>Go Back</Button>
        <div className={classes.Header__SideButtons}>
          <Button>View All</Button>
          <Button>Print All</Button>
        </div>
      </MiniHeader>
      <Table className={classes.Table}>
        <thead>
          <tr>
            <th>Show Date</th>
            <th className={classes.FullWidth}>Reports</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1/23/20 7:00 PM</td>
            <td className={classes.FullWidth}>
              <div className={classes.Table__IconsRow}>
                <div className={classes.Table__IconsRow__Icon}>
                  <div>
                    <img src={Icon1} alt='' />
                  </div>
                  <p>Performance</p>
                </div>

                <div className={classes.Table__IconsRow__Icon}>
                  <div>
                    <img src={Icon2} alt='' />
                  </div>
                  <p>House</p>
                </div>

                <div className={classes.Table__IconsRow__Icon}>
                  <div>
                    <img src={Icon3} alt='' />
                  </div>
                  <p>Incident</p>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>1/23/20 7:00 PM</td>
            <td className={classes.FullWidth}>
              <div className={classes.Table__IconsRow}>
                <div className={classes.Table__IconsRow__Icon}>
                  <div>
                    <img src={Icon1} alt='' />
                  </div>
                  <p>Performance</p>
                </div>

                <div className={classes.Table__IconsRow__Icon}>
                  <div>
                    <img src={Icon2} alt='' />
                  </div>
                  <p>House</p>
                </div>

                <div className={classes.Table__IconsRow__Icon}>
                  <div>
                    <img src={Icon3} alt='' />
                  </div>
                  <p>Incident</p>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>1/23/20 7:00 PM</td>
            <td className={classes.FullWidth}>
              <div className={classes.Table__IconsRow}>
                <div className={classes.Table__IconsRow__Icon}>
                  <div>
                    <img src={Icon1} alt='' />
                  </div>
                  <p>Performance</p>
                </div>

                <div className={classes.Table__IconsRow__Icon}>
                  <div>
                    <img src={Icon2} alt='' />
                  </div>
                  <p>House</p>
                </div>

                <div className={classes.Table__IconsRow__Icon}>
                  <div>
                    <img src={Icon3} alt='' />
                  </div>
                  <p>Incident</p>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </Table>
    </GridBox>
  );
};

export default PageFive;
