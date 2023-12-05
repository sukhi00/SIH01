import React from 'react';
import './Home.css';
import CheckGreen from '../Assets/checkGreen.svg';
import iphone from '../Assets/iPhone.png';

const Home = () => {
  return (
  

    <div className='home-background'>
      <div>
      <h2 className='home-heading'>Digital NRW Solution</h2>
      <p className='home-mddle-p'>Unlocking Potential </p>
      <span className='home-mddle-p'>In Every Droplet</span>
      </div>
      <div className='iphone-img'>
        <img src={iphone} alt='iPhone' />
      </div>
      <div className='home-box'>
        <ul>
          <li>
            <p>
              <img src={CheckGreen} alt='Check Green' /> Advance metering infrastructure
            </p>
          </li>
          <li>
            <p>
              <img src={CheckGreen} alt='Check Green' /> Bill and revenue manager
            </p>
          </li>
        </ul>
        <ul>
          <li>
            {' '}
            <p>
              <img src={CheckGreen} alt='Check Green' /> Connect to expert
            </p>
          </li>
          <li>
            <p>
              <img src={CheckGreen} alt='Check Green' /> Advance metering infrastructure
            </p>
          </li>
        </ul>
      </div>
      
    </div>
  );
};

export default Home;
