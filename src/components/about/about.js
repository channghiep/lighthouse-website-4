import React, {useState, useEffect} from 'react';
import {HashLink} from 'react-router-hash-link';

import './about.css';

import Denis from '../assets/denis.png';
import Brian from '../assets/brian.png';
import Thanh from '../assets/thanh.png';
import ContactBanner from '../assets/lighthouse-ctc-banner.png';

export default function About() {

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
      window.addEventListener("scroll", () => {
        setScroll(window.scrollY > '60');
      });
  }, []);

  return (
    <div className={`${scroll ? "about-body scroll" : "about-body" }`} id='about'>

        <HashLink smooth to="/about/#about-landing">
          <div className='top-scroll-btn smooth-scroll-btn'>
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
            </svg>
          </div>
        </HashLink>

        <div className="about-landing" id='about-landing'>
          <svg className='nav-img' width="148" height="150" viewBox="0 0 148 150">
              <g id="Layer_2" data-name="Layer 2" transform="translate(-0.003 0.002)">
                  <g id="Layer_1" data-name="Layer 1" transform="translate(0.003 -0.002)">
                      <path id="Path_114" data-name="Path 114" d="M147.383,89.445l-54.4-19.617a.938.938,0,0,1,0-1.76L143.745,49.68a.938.938,0,0,0,.556-1.224A75.7,75.7,
                      0,0,0,1.976,51.388.943.943,0,0,0,2.548,52.6L54.435,71.4a.933.933,0,0,1,0,1.755L.625,92.533a.948.948,0,0,0-.6,1.1,75.913,75.913,0,0,0,57.064,
                      56.341.946.946,0,0,0,1.138-.854L63.49,75.3a.936.936,0,0,1,1.247-.812l18.987,6.879a.937.937,0,0,1,.613.812L89.108,149.1a.941.941,0,0,0,1.133.854,
                      75.9,75.9,0,0,0,57.745-59.45.943.943,0,0,0-.6-1.062ZM81.915,66.656,65.22,60.605a.937.937,0,0,1-.613-.948l.1-8.723a.954.954,0,0,1,.27-.594l8.035-7.525a.929.929,
                      0,0,1,1.315,0l8.55,7.525a.927.927,0,0,1,.27.594V65.709a.936.936,0,0,1-1.232.948Z" transform="translate(-0.003 0.002)"/>
                  </g>
              </g>
          </svg>
          <div className='about-intro'>
            <h1>who we are</h1>
            <p><span>Lighthouse e-systems</span> was built by a group of friends with
              different backgrounds in graphic design, visual art, product
              sales and web development. As a team, we are not only
              trying to solve daily problems with technology but also to
              bring a positive impact to the community through our design
              solutions, to address social awareness and environmental issues.
            </p>
          </div>
        </div>

        <div className="about-members">
          <h1>board members</h1>

          <div className='member-intro'>
            
            <div className='member-wrapper member-brian'>
              <img src={Brian} alt='brian-photo'/>
              <p className='member-name'>brian nguyen</p>
              <p className='member-role'>lead developer</p>
            </div>

            <div className='member-wrapper member-denis'>
              <img src={Denis} alt='denis-photo'/>
              <p className='member-name'>denis billette</p>
              <p className='member-role'>managing partner</p>
            </div>

            <div className='member-wrapper member-thanh'>
              <img src={Thanh} alt='thanh-photo'/>
              <p className='member-name'>thanh nguyen</p>
              <p className='member-role'>lead designer</p>
            </div>

          </div>
        </div>

        <div className='about-banner'>
          <img src={ContactBanner} alt='contact banner'/>
          <h1>contact us</h1>
          <div><p>info</p><p>@lhe.systems</p></div>
        </div>

    </div>
  )

}