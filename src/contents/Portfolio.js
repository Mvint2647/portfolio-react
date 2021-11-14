import React from 'react';
import './portfolio.css';
import Fitness from '../../src/images/Fitness.png';
import Note from '../../src/images/Note.png';
import Weather from '../../src/images/Weather.png';
import Quickfix from '../../src/images/QuickFixRecipie.png';
import Keyboard from '../../src/images/KeyboardBattle.gif';

function Project() {
  return (
    <section>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='card col-12 col-md-4 text-white m-4 bg-transparent'>
            <img src={Fitness} className='card-img' alt='...'></img>
            <div
              id='hiddenText'
              className='card-img-overlay row align-items-center'
            >
              <div className='text-center'>
                <a
                  className='card-text mx-4 fs-3 text-success text-decoration-none bg-light'
                  href='frozen-atoll-30244.herokuapp.com/?id=6168b60b0ad1a20017cdc799'
                >
                  Website
                </a>
                <a
                  className='card-text  mx-4 fs-3 text-success text-decoration-none bg-light'
                  href='https://github.com/Mvint2647/Fitness-Tracker'
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
          <div className='card col-12 col-md-4 text-white m-4 bg-transparent'>
            <img src={Note} className='card-img' alt='...'></img>
            <div
              id='hiddenText'
              className='card-img-overlay row align-items-center'
            >
              <div className=' text-center'>
                <a
                  className='card-text  mx-4 fs-3 text-success text-decoration-none bg-light'
                  href='gentle-everglades-44862.herokuapp.com'
                >
                   Website  
                </a>
                <a
                  className='card-text mx-4 fs-3 text-success text-decoration-none bg-light'
                  href='https://github.com/Mvint2647/The-Note-Tracker'
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
          <div className='card col-12 col-md-4 text-white m-4'>
            <img src={Weather} className='card-img' alt='...'></img>
            <div
              id='hiddenText'
              className='card-img-overlay row align-items-center'
            >
              <div className=' text-center'>
                <a
                  className='card-text mx-4 fs-3 text-success text-decoration-none bg-light'
                  href='https://mvint2647.github.io/Weather-App/'
                >
                  Website
                </a>
                <a
                  className='card-text mx-4 fs-3 text-success text-decoration-none bg-light'
                  href='https://github.com/Mvint2647/Weather-App/'
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
          <div className='card col-12 col-md-4 text-white m-4'>
            <img src={Keyboard} className='card-img' alt='...'></img>
            <div
              id='hiddenText'
              className='card-img-overlay row align-items-center'
            >
              <div className=' text-center'>
                <a
                  className='card-text mx-4 fs-3 text-success text-decoration-none bg-light'
                  href='https://github.com/jboybokungu/keyboard-battle'
                >
                  Website
                </a>
                <a
                  className='card-text mx-4 fs-3 text-success text-decoration-none bg-light'
                  href='https://github.com/jboybokungu/keyboard-battle'
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
          <div className='card col-12 col-md-4'>
            <img src={Quickfix} className='card-img' alt='...'></img>
            <div
              id='hiddenText'
              className='card-img-overlay row align-items-center'
            >
              <div className=' text-center'>
                <a
                  className='card-text  mx-4 fs-3 text-success text-decoration-none bg-light'
                  href='https://kerilp.github.io/quick-fix-recipe/'
                >
                  Website
                </a>
                <a
                  className='card-text mx-4 fs-3 text-success text-decoration-none bg-light'
                  href='https://github.com/kerilp/quick-fix-recipe'
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
