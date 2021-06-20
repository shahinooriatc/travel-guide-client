import React from 'react';
import './Footer.css';
import logo from '../../../icons/logo.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='py-5 px-3'>
            <div className="row">
                <div className="col-lg-3 col-md-6 p-4">
                    <h3 className='footer-logo'>
                        <img src={logo} className='footer-logo-svg' alt="logo" />
                        Travel Guide
                    </h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, debitis dolorem. Exercitationem ipsum doloremque ut.</p>
                </div>
                <div className="col-lg-3 col-md-6 p-3">
                    <h5 className='pb-1'>Desntinations</h5>
                    <ul className='footer-links'>
                        <li><Link to='/'>&#62;&#62; Africa</Link></li>
                        <li><Link to='/'>&#62;&#62; Asia</Link></li>
                        <li><Link to='/'>&#62;&#62; America</Link></li>
                        <li><Link to='/'>&#62;&#62; Australia</Link></li>
                        <li><Link to='/'>&#62;&#62; Europe</Link></li>
                    </ul>
                </div>
                <div className="col-lg-3 col-md-6 p-3">
                    <h5 className='pb-1'>Adventures</h5>
                    <ul className='footer-links'>
                        <li><Link to='/'>&#62;&#62; The Dead Man</Link></li>
                        <li><Link to='/'>&#62;&#62; The Cursed</Link></li>
                        <li><Link to='/'>&#62;&#62; Rock Climbing</Link></li>
                        <li><Link to='/'>&#62;&#62; Laugavegur</Link></li>
                    </ul>
                </div>
                <div className="col-lg-3 col-md-6 p-3">
                    <h5 className='pb-1'>Contact Info</h5>
                    <ul className='footer-links'>
                        <p>Phone: +8801888 123 456</p>
                        <p>Email: shahinooriatc@gmail.com</p>
                        <p>3100, Sylhet, Bangladesh</p>
                    </ul>
                </div>
            </div>
            <p className='text-center pt-3'>Copyright &copy; reserved {(new Date()).getFullYear()} by <cite>Shahinoor Alam</cite></p>
        </footer>
    );
};

export default Footer;