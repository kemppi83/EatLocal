/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable max-len */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { useHistory } from 'react-router-dom';

import Map from './Map/Map';

const Home = () => {
  const history = useHistory();
  const buttonHandler = e => {
    history.push(e.target.value);
  };
  return (
    <>
      <section className="landing-page">
        {/* <hr /> */}
        <section className="hero">
          <h1 className="hero__tagline">
            Quality food from
            <br />
            Local Swedish farms
            <br />
            to your door!
          </h1>
          <div className="hero__cta">
            <p className="hero__cta__info">Contact-free delivery</p>
            <button type="button" className="hero__btn--subscribe btn-green" value="/boxes" onClick={e => buttonHandler(e)}>Subscribe</button>
          </div>
        </section>
      </section>

      <section className="boxes-page">

        {/* <h2 className="content__title">Our Food Boxes</h2> */}
        <div className="section__content boxes__content card-container">
          <div className="column-three vegeterian-img">
            <button type="button" className="btn btn-white box__btn--info" value="/boxes/#Vegetarian" onClick={e => buttonHandler(e)}>Vegetarian</button>
          </div>
          <div className="column-three family-img">
            <button type="button" className="btn btn-white box__btn--info" value="/boxes/#Family" onClick={e => buttonHandler(e)}>Family</button>
          </div>
          <div className="column-three vegan-img">
            <button type="button" className="btn btn-white box__btn--info" value="/boxes/#Vegan" onClick={e => buttonHandler(e)}>Vegan</button>
          </div>
        </div>

      </section>

      <section className="section about-page">

        <div className="section__content about__content">
          <h2 className="content__title">About Us</h2>
          <p className="content__info-about">
            We  are
            {' '}
            <span className="accent">Mobsters 4 Justice</span>
            {' '}
            - team of talanted & passionate web developers who want to connect bussy professional and local farm producers.
            <br />
            Our mission is
            {' '}
            <span className="accent">Justice for Farmers</span>
            {' '}
            who have to sell their produce for lower prices since only a few big companies buy the produce in bulk. We give regular consumers the possibility to buy directly from farmers and give more control over prices to the farmers.
          </p>
        </div>

        <img className="about__img img" src="/images/home/artichokes.jpg" alt="artichokes" />

      </section>

      <section className="section farmers">
        <div className="section__content farmers__content">
          <h2 className="content__title">Swedish Farms</h2>
          <div className="content__info card-container">
            <div className="column-two">
              <img className="content__info__img img-farm" src="/images/home/farmer.jpg" alt="farmer" />
              <p className="content__info__txt">We work with some of the best independent farmers and fisherman of Sweden. Find out more about them here.</p>
              <a className="btn btn--info content__info--btn" href="/farmers">Meet Our Farmers</a>
            </div>
            <div className="column-two">
              <img className="content__info__img img-farm" src="/images/home/tomatoes.jpg" alt="tomatoes" />
              <p className="content__info__txt">Share your agricultural practices that focus on growing food through natural ecosystem management by joining our network.</p>
              <a className="btn btn--info content__info--btn" href="/apply">Become Our Member</a>
            </div>
          </div>
        </div>
      </section>
      <Map farmersPage={false} />
      <section className="section authors">
        <div className="section__content authors_content">
          <h2 className="content__title">Developed By</h2>
          <div className="content__info card-container">
            <div className="column__author column-four">
              <img className="content__info__img img img_author" src="/images/authors/juha.jpg" alt="juha" />
              <div className="content__info__name">Juha Kemppinen</div>
              <div className="content__info__socials">
                <a href="https://www.linkedin.com/in/juhakemppinen/"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="https://github.com/kemppi83"><FontAwesomeIcon icon={faGithub} /></a>
              </div>
            </div>
            <div className="column__author column-four">
              <img className="content__info__img img img_author" src="/images/authors/anastasia.jpg" alt="anastasia" />
              <div className="content__info__name">Anastasia Ponomarenko</div>
              <div className="content__info__socials">
                <a href="https://www.linkedin.com/in/ana-ponomarenko/"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="https://github.com/anastasia-pon"><FontAwesomeIcon icon={faGithub} /></a>
              </div>
            </div>
            <div className="column__author column-four">
              <img className="content__info__img img img_author" src="/images/authors/madalina.jpg" alt="madalina" />
              <div className="content__info__name">Madalina Andreea</div>
              <div className="content__info__socials">
                <a href="https://www.linkedin.com/in/andreea-madalina-pascariu/"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="https://github.com/MadaPas"><FontAwesomeIcon icon={faGithub} /></a>
              </div>
            </div>
            <div className="column__author column-four">
              <img className="content__info__img img img_author" src="/images/authors/valentina.jpg" alt="valentina" />
              <div className="content__info__name">Valentina</div>
              <div className="content__info__socials">
                <a href="https://www.linkedin.com/in/ko-va/"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="https://github.com/ko-va"><FontAwesomeIcon icon={faGithub} /></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
