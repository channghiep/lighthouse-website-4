import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import DrawerToggleBtn from './drawerToggleBtn';
import './navbar.css';

export default function Navbar() {

    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
          setScroll(window.scrollY > '60');
        });
    }, []); 

    return (

        <div className={`${scroll ? "navbar-body scroll" : "navbar-body" }`}>
    
            <Link to="/">
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
            </Link>
            <DrawerToggleBtn/>

        </div>

    )

}