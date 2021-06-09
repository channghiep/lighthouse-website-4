import React from 'react';
import {HashLink as Link} from 'react-router-hash-link';

import Projects from './projects';
import Contact from '../contact/contact';

import './home.css';

function Home() {
    return (
      <div className="homepage-body">
          <div className='homepage-section-1'>
            <div className="landing-body" id='landing'>
              <div className='landing-intro'>
                <h1>creative studio for product design and digital experience solutions.</h1>
                <p>Lighthouse e-system is a Vancouver based studio that offers multiple-platforms solutions for your business, from
                  UX research, Branding, Motion design to Web app, Android app development and supervising.
                </p>
              </div>

              <Link smooth to="/#projects">
                <div className='landing-scroll-btn smooth-scroll-btn'>
                  <p className='scroll-callto'>check our works</p>
                  <div className='scroll-arrow'>
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          
          <div className='homepage-section-2'>
            <Projects/>
          </div>
          
          <div className='homepage-section-3'>
            <Contact/>
            <Link smooth to="/#landing">
              <div className='btm-scroll-btn smooth-scroll-btn'>
                <div className='scroll-arrow'>
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
                  </svg>
                </div>
                <p className='scroll-callto'>back to home</p>
              </div>
            </Link>
          </div>
          
      </div>
    );
  }
  
export default Home;