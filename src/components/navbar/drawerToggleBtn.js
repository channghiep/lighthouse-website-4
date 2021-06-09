import React, { useState } from 'react';
import {HashLink} from 'react-router-hash-link';

import './drawerToggleBtn.css';

// import logo from '../assets/logo-menubar-white.svg'

export default function DrawerToggleBtn() {

    const [open, setOpen] = useState(false)
    // const [toggle, setToggle] = useState(false)

    function openMenuBar() {
        setOpen(!open)
    }

    return (

        <div className="toggle-btn">
            <button className={`${open ? "changed-btn" : " "}`} onClick={() => openMenuBar()}>
                <div className="toggle-btn__line"></div>
                <div className="toggle-btn__line"></div>
                <div className="toggle-btn__line"></div>
            </button>
            <nav className="side-drawer">
                <div className="side-drawer-items">
                    <HashLink onClick= {openMenuBar} to="/#landing">
                        <svg className='burger-logo' width="148" height="150" viewBox="0 0 148 150">
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
                    </HashLink>
                    <HashLink onClick= {openMenuBar} style={{textDecoration:'none',color:'#FFF'}} to="/#projects">
                        <p>projects</p>
                    </HashLink>
                    <HashLink onClick= {openMenuBar} style={{textDecoration:'none',color:'#FFF'}} to="/about/#about-landing">
                        <p>about us</p>
                    </HashLink>
                    <HashLink onClick= {openMenuBar} style={{textDecoration:'none',color:'#FFF'}} to="/#contact">
                        <p>contact</p>
                    </HashLink>

                    {/* <ul>
                        <li><Link onClick= {openMenuBar} to="/"><a href="/">works</a></Link></li>
                        <li><Link onClick= {openMenuBar} to="/contact"><a href="/">contact</a></Link></li>
                    </ul> */}
                </div>
            </nav>
        </div>
        
    )
}