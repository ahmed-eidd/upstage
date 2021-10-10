import React from 'react';
import classes from './PageSix.module.scss';
import GridBox from '../../components/GridBox/GridBox';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import PlayImg from '../../assests/Home/Grid-3.png';
import Button from '../../components/Button/Button';
import FollowIcon from '../../assests/Login/follow.png';
import ReviewIcon from '../../assests/Login/favourite.png';
import RedTitledBox from '../../components/RedTitledBox/RedTitledBox';
import ActorCard from '../../components/ActorCard/ActorCard';
import Avatar from '../../assests/Login/avatar.jpg';
import Slider from 'react-slick';

const PageSix = () => {

  return (
    <GridBox addRows>
      <ProfileCard className={classes.PlayCard} img={PlayImg}>
        <div className={classes.PlayCard__Info}>
          <p className={classes.PlayCard__Info__SubInfo}>Sept 3-13, 2021</p>
          <p className={classes.PlayCard__Info__SubInfo}>
            777 N. Green Chicago, IL 60607
          </p>
          <p className={classes.PlayCard__Info__SubInfo}>7pm - 10pm</p>
          <h3 className={classes.PlayCard__Info__Title}>Redemption</h3>
          <p className={classes.PlayCard__Info__Description}>
            Best friends grow apart from each other. One has a plan. The other
            goes down a dark path.
          </p>
          <div className={classes.PlayCard__Info__Stars}>
            <i className='far fa-star'></i>
            <i className='far fa-star'></i>
            <i className='far fa-star'></i>
            <i className='far fa-star'></i>
            <i className='far fa-star'></i>
          </div>
          <p className={classes.PlayCard__Info__Rating}>
            Ratings: <span>Parental Direction</span>
          </p>

          <div className={classes.PlayCard__Info__FollowBtn}>
            <img src={FollowIcon} /> Follow this play
          </div>
          <div className={classes.PlayCard__Info__ReviewBtn}>
            <img src={ReviewIcon} /> Add a review
          </div>

          <div className={classes.PlayCard__Info__ActionBtnsContainer}>
            <Button> View PlayBill</Button>
            <Button color='black'>Buy Tickets</Button>
          </div>
        </div>
      </ProfileCard>
      <div className={classes.PlayVideo}>
        <iframe
          width='100%'
          height='100%'
          src='https://www.youtube.com/embed/Oq5HKX1vicM?controls=0'
          title='YouTube video player'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen
        ></iframe>
      </div>

      <RedTitledBox title='Actor/Actress' className={classes.PlayActors} slider sliderClassName={classes.PlayActors__List}>
       
          <ActorCard img={Avatar} name='Ramon Anderson' role='Joey (Teen)' />
          <ActorCard img={Avatar} name='Shonda Williams' role='Mom' />
          <ActorCard
            img={Avatar}
            name='Nicholas Richardson'
            role='June (Teen)'
          />
          <ActorCard img={Avatar} name='Marvin Vega' role='Ray-Ray' />
  
      </RedTitledBox>
        <RedTitledBox title='Play stage crew / production team' className={classes.PlayProductionTeam} slider sliderClassName={classes.PlayActors__List}>
       
          <ActorCard img={Avatar} name='Ramon Anderson' role='Joey (Teen)' />
          <ActorCard img={Avatar} name='Shonda Williams' role='Mom' />
          <ActorCard
            img={Avatar}
            name='Nicholas Richardson'
            role='June (Teen)'
          />
          <ActorCard img={Avatar} name='Marvin Vega' role='Ray-Ray' />
  
      </RedTitledBox>
    </GridBox>
  );
};

export default PageSix;
