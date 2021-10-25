import React, { useState } from 'react';
import GridBox from '../../components/GridBox/GridBox';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import classes from './PageFour.module.scss';
import PlayImg from '../../assests/Home/Grid-1.png';
import RedTitledBox from '../../components/RedTitledBox/RedTitledBox';
import ActorCard from '../../components/ActorCard/ActorCard';
import ActorImg from '../../assests/Login/avatar.jpg';
import PlayModal from './PlayModal';
import FollowModal from './FollowModal';
import ReviewModal from './ReviewModal';
import Button from '../../components/Button/Button';
import FollowIcon from '../../assests/Login/follow.png';
import ReviewIcon from '../../assests/Login/favourite.png';

const PageFour = () => {
  const [followModalOpen, setFollowModal] = useState(false);
  const [reviewModalOpen, setReviewModal] = useState(false);
  const [playModalOpen, setPlayModal] = useState(false);
  return (
    <GridBox addRows>
      <ProfileCard className={classes.PlayCard} img={PlayImg}>
        <div className={classes.PlayCard__Main}>
          <h3 className={classes.PlayCard__Title}>Blood Brothers</h3>
          <div className={classes.PlayCard__Stars}>
            <i className='far fa-star'></i>
            <i className='far fa-star'></i>
            <i className='far fa-star'></i>
            <i className='far fa-star'></i>
            <i className='far fa-star'></i>
          </div>
          <p className={classes.PlayCard__Description}>
            Best friends grow apart from each other. One has a plan. The other
            goes down a dark path.
          </p>
          <p className={classes.PlayCard__Ratings}>
            Rating: <span>Parental Direction</span>
          </p>
          <p className={classes.PlayCard__Address}>
            Address: <span>3400 Broadway, Gary, IN, USA</span>
          </p>
          <p className={classes.PlayCard__Phone}>
            Phone: <span>7739950314</span>
          </p>
          <i className='fas fa-wheelchair'></i>
          <div
            onClick={() => setFollowModal(true)}
            className={classes.PlayCard__Info__FollowBtn}
          >
            <img src={FollowIcon} /> Follow this play
          </div>
          <div
            onClick={() => setReviewModal(true)}
            className={classes.PlayCard__Info__ReviewBtn}
          >
            <img src={ReviewIcon} /> Add a review
          </div>

          <div className={classes.PlayCard__Info__ActionBtnsContainer}>
            <Button onClick={() => setPlayModal(true)}> View PlayBill</Button>
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
      <RedTitledBox
        slider
        className={classes.PlayActors}
        sliderClassName={classes.PlayActors__List}
        title='Play Actor'
      >
        <ActorCard img={ActorImg} name='Ramon Anderson' role='Jeoy (Teen)' />
        <ActorCard img={ActorImg} name='Ramon Anderson' role='Jeoy (Teen)' />
        <ActorCard img={ActorImg} name='Ramon Anderson' role='Jeoy (Teen)' />
        <ActorCard img={ActorImg} name='Ramon Anderson' role='Jeoy (Teen)' />
        <ActorCard img={ActorImg} name='Ramon Anderson' role='Jeoy (Teen)' />
        <ActorCard img={ActorImg} name='Ramon Anderson' role='Jeoy (Teen)' />
      </RedTitledBox>
      <FollowModal
        open={followModalOpen}
        onClose={() => setFollowModal(false)}
      />

      <ReviewModal
        open={reviewModalOpen}
        onClose={() => setReviewModal(false)}
        title='Add a review'
        className={classes.ReviewModal}
      ></ReviewModal>

      <PlayModal open={playModalOpen} onClose={() => setPlayModal(false)} />
    </GridBox>
  );
};

export default PageFour;
