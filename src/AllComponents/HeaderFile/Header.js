import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <div className='px-4 header-style'>
            <nav className=''>
                <div className="row d-flex align-items-center justify-content-between">
                    <div className="col-2">
                        <img src={logo} alt="" className='px-3 pb-1' />                        
                    </div>
                    <div className="nav-item-style col-10 d-flex justify-content-end">
                        <li><a href="/home">Home</a></li>
                        <li><a href="/home">News</a></li>
                        <li><a href="/home">About Us</a></li>
                        <li><a href="/home">Contact Us</a></li>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;