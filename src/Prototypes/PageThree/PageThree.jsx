import React from 'react';
import classes from './PageThree.module.scss';
import GridBox from '../../components/GridBox/GridBox';
import Avatar from '../../assests/Login/avatar.jpg';
import Button from '../../components/Button/Button';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import Table from '../../components/Table/Table';
import Play1 from '../../assests/Home/Grid-1.png';
import Play2 from '../../assests/Home/Grid-2.png';
import Play3 from '../../assests/Home/Grid-3.png';
import RedTitledBox from '../../components/RedTitledBox/RedTitledBox';

const PageThree = () => {
  return (
    <GridBox addRows>
      <ProfileCard className={classes.Profile} img={Avatar}>
        <div className={classes.Profile__Info}>
          <h3 className={classes.Profile__Name}>Ibunkun Fashunhan</h3>
          <p>
            Legendary Talent, Entertainer & Television Host. ... Expert Coach in
            media, business, acting, modeling, dance and voice
          </p>
          <Button>Follow</Button>
        </div>
      </ProfileCard>
      <RedTitledBox className={classes.Profile__Table} title='Actor Info'>
        <div className={classes.Profile__Table__Content}>
          <h4 className={classes.Profile__Table__Content__Title}>Name:</h4>
          <p className={classes.Profile__Table__Content__Paragraph}>
            IBunkun Fasunhan
          </p>
          <h4 className={classes.Profile__Table__Content__Title}>Speciality</h4>
          <p className={classes.Profile__Table__Content__Paragraph}>-</p>
          <h4 className={classes.Profile__Table__Content__Title}>
            Actor's euqity union:
          </h4>
          <p className={classes.Profile__Table__Content__Paragraph}>No</p>
          <h4 className={classes.Profile__Table__Content__Title}>Agent:</h4>
          <p className={classes.Profile__Table__Content__Paragraph}>-</p>
          <h4 className={classes.Profile__Table__Content__Title}>Agent No:</h4>
          <p className={classes.Profile__Table__Content__Paragraph}>-</p>
          <h4 className={classes.Profile__Table__Content__Title}>Webiste</h4>
          <p className={classes.Profile__Table__Content__Paragraph}>-</p>
        </div>
      </RedTitledBox>
      {/* <Table allwhite className={classes.Profile__Table}>
        <thead>
          <tr>
            <th>Actor Info</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <div className={classes.Profile__Table__Content}>
            <h4 className={classes.Profile__Table__Content__Title}>Name:</h4>
            <p className={classes.Profile__Table__Content__Paragraph}>
              IBunkun Fasunhan
            </p>
            <h4 className={classes.Profile__Table__Content__Title}>
              Speciality
            </h4>
            <p className={classes.Profile__Table__Content__Paragraph}>-</p>
            <h4 className={classes.Profile__Table__Content__Title}>
              Actor's euqity union:
            </h4>
            <p className={classes.Profile__Table__Content__Paragraph}>No</p>
            <h4 className={classes.Profile__Table__Content__Title}>Agent:</h4>
            <p className={classes.Profile__Table__Content__Paragraph}>-</p>
            <h4 className={classes.Profile__Table__Content__Title}>
              Agent No:
            </h4>
            <p className={classes.Profile__Table__Content__Paragraph}>-</p>
            <h4 className={classes.Profile__Table__Content__Title}>Webiste</h4>
            <p className={classes.Profile__Table__Content__Paragraph}>-</p>
          </div>
        </tbody>
      </Table> */}

      <RedTitledBox title='Plays' className={classes.Profile__PlaysTable}>
        <div className={classes.Profile__PlaysTable__Plays}>
          <div className={classes.Profile__PlaysTable__Plays__Img}>
            <img src={Play1} alt='playimg' />
          </div>
          <div className={classes.Profile__PlaysTable__Plays__Img}>
            <img src={Play2} alt='playimg' />
          </div>
          <div className={classes.Profile__PlaysTable__Plays__Img}>
            <img src={Play3} alt='playimg' />
          </div>
        </div>
      </RedTitledBox>
    </GridBox>
  );
};

export default PageThree;
