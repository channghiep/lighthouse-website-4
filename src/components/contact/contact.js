import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
import ReactMapGL, { Marker } from 'react-map-gl';

import './contact.css';

// import Inclass from '../assets/inclass-expand.jpg';
// import Greenfill from '../assets/greenfill-expand.jpg';
// import Gover from '../assets/gover-expand.jpg';
// import Trustnews from '../assets/trustnews-expand.jpg';

function Contact() {

    // mapboxgl.accessToken = 'pk.eyJ1IjoibXRobmd1eWVuMjQiLCJhIjoiY2toY3E3YTcwMDB3bDJ0cGpjend6Zm5qNyJ9.aPAtcv47LwhRZstz2tRINg';

    const [viewport, setViewport] = useState({
      latitude: 49.211,
      longitude: -122.811,
      zoom: 12
    });

    return (
      <div className="contact-body" id='contact'>

          <ReactMapGL className="contact-map"
            {...viewport}
            width="100%"
            height="100%"
            mapboxApiAccessToken="pk.eyJ1IjoibXRobmd1eWVuMjQiLCJhIjoiY2toYmhkMHI4MjR0bjJybzhiMzgwN3RsOCJ9.LKFdDlibq9RUvv6bCs-v5w"
            onViewportChange={(viewport) => {
              setViewport(viewport);
            }}
            mapStyle="mapbox://styles/mthnguyen24/ckhd3cz4x0u4f19qs96hx1zeh"
          >
              <Marker latitude={49.191341} longitude={-122.808350} offsetLeft={-20} offsetTop={-10}>
                <div className='contact-marker'>
                  <svg viewBox="0 0 24 24"><path d="M12 0c-5.522 0-10 4.395-10 9.815 0 5.505 4.375 9.268 10 14.185 5.625-4.917 10-8.68 10-14.185
                  0-5.42-4.478-9.815-10-9.815zm0 18c-4.419 0-8-3.582-8-8s3.581-8 8-8 8 3.582 8 8-3.581 8-8 8z"/>
                  </svg>
                  <svg className='nav-logo' width="60" height="auto" viewBox="0 0 148 150">
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
                  <p>we are here</p>
                </div>
              </Marker>

          </ReactMapGL>

          <div className='contact-wrapper'>
            <p className='contact-h2'>address</p>
            <p>#105 - 14914 104 Avenue</p>
            <p>Surrey, British Columbia</p>
            <p>V3R 1M7</p>

            <p className='contact-h2'>phone number</p>
            <p>604 312 1923</p>

            <p className='contact-h2'>email</p>
            <p>info@lhe.systems</p>

            {/* <h1>let's collaborate</h1>
            <form>
              <div className='contact-name contact-input'>
                <input type="text" id="name" name="name" placeholder="your name"/>
              </div>
              <div className='contact-company contact-input'>
                <input type="text" id="company" name="company" placeholder="your company (optional)"/>
              </div>
              <div className='contact-email contact-input'>
                <input type="text" id="email" name="email" placeholder="your email address"/>
              </div>
              <div className='contact-number contact-input'>
                <input type="number" id="number" name="number" placeholder="your number (optional)"/>
              </div>
              <div className='contact-msg contact-input'>
                <textarea type="text" id="message" name="message" placeholder="your message"/>
              </div>
              <input className='contact-submit-btn' type="submit" value="send"/>
            </form> */}
          </div>

      </div>
    );
  }
  
export default Contact;