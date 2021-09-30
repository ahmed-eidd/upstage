import React from 'react';
import Box from '../../../Box/Box';
import classes from './FeaturesSection.module.scss';
import Cover from '../../../Cover/Cover';
import Grid1 from '../../../../assests/Home/Grid-1.png';
import Grid2 from '../../../../assests/Home/Grid-2.png';
import Grid3 from '../../../../assests/Home/Grid-3.png';
import Grid4 from '../../../../assests/Home/Grid-4.png';
import Grid5 from '../../../../assests/Home/Grid-5.png';
import Grid6 from '../../../../assests/Home/Grid-6.png';
import Grid7 from '../../../../assests/Home/Grid-7.png';
import Grid8 from '../../../../assests/Home/Grid-8.png';

const FeaturesSection = () => {
  return (
    <Box >
      <h3 className='heading-3--red'>Recommended For You</h3>
      <div className={classes.featuresSection}>
        <Cover alt='grid-1' img={Grid1} />
        <Cover alt='grid-2' img={Grid2} />
        <Cover alt='grid-3' img={Grid3} />
        <Cover alt='grid-4' img={Grid4} />
        <Cover alt='grid-5' img={Grid5} />
        <Cover alt='grid-6' img={Grid6} />
        <Cover alt='grid-7' img={Grid7} />
        <Cover alt='grid-8' img={Grid8} />
      </div>
    </Box>
  );
};

export default FeaturesSection;
