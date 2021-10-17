import React from 'react';
import classes from './Professionals.module.scss';
import Box from '../../../Box/Box';
import Flex from '../../../Flex/Flex';
import Icon1 from '../../../../assests/Home/proIcon-1.png';
import Icon2 from '../../../../assests/Home/proIcon-2.png';
import Icon3 from '../../../../assests/Home/proIcon-3.png';
import Icon4 from '../../../../assests/Home/proIcon-4.png';
import Icon5 from '../../../../assests/Home/proIcon-5.png';
import Icon6 from '../../../../assests/Home/proIcon-6.png';
import Icon7 from '../../../../assests/Home/proIcon-7.png';
import Icon8 from '../../../../assests/Home/proIcon-8.png';
import Icon9 from '../../../../assests/Home/proIcon-9.png';
import ProfessionalsIcon from './ProfessionalsIcon/ProfessionalsIcon';

const Professionals = () => {
  return (
    <Box className={classes.Professionals}>
      <h4 className={`heading-4 ${classes.Professionals__Title} `}>
        THEATRE PROFESSIONALS
      </h4>
      <Flex justify='space-between' align='flex-start' gap='1rem'>
        <ProfessionalsIcon title='Actors' icon={Icon1}>
          These professionals determine what types of plays you see on the
          stage. This includes self producing playwrights.
        </ProfessionalsIcon>
        <ProfessionalsIcon title='PlayWrights' icon={Icon2}>
          These professionals write the shows that theare companies produce on
          the stage.
        </ProfessionalsIcon>
        <ProfessionalsIcon
          title='Production Team /'
          title2='Stage Crew'
          icon={Icon3}
        >
          These professionals work diligently behind the curtain to make sure
          the show runs without a hitch. The director, light/sound/light techs.
        </ProfessionalsIcon>
        <ProfessionalsIcon title='Theater Companies' icon={Icon4}>
          These professionals that bring the play to life on the stage.
        </ProfessionalsIcon>
        <ProfessionalsIcon title='Venue' icon={Icon5}>
          This is the place where the show happens. Sometimes the theatre
          company owns their own space as well.
        </ProfessionalsIcon>
      </Flex>
      <h4 className={`heading-4 ${classes.Professionals__Title} `}>
        THEATRE RESOURCES
      </h4>
      <Flex justify='space-around' align='flex-start' gap='1rem'>
        <ProfessionalsIcon
          title='Professional'
          title2='Organization'
          icon={Icon6}
        >
          Professional organizations exist to help us learn industry standards
          and trends in the world of theatre.
        </ProfessionalsIcon>
        <ProfessionalsIcon title='Workshops / Classes' icon={Icon7}>
          Workshops and Classes help us improve our talent. People who conduct
          them also use this resource to list their class, workshop or festival.
        </ProfessionalsIcon>
        <ProfessionalsIcon title='Invest / Donate' icon={Icon8}>
          Invest or donate to help keep the lights on the stage shining
          brightly. Most theatre companies are a non for profit organization.
        </ProfessionalsIcon>
        <ProfessionalsIcon title='Props / Costume' icon={Icon9}>
          Costumes and props are the tools of the thespians. If you have a
          costume or prop to sale or rent list it here.
        </ProfessionalsIcon>
      </Flex>
    </Box>
  );
};

export default Professionals;
