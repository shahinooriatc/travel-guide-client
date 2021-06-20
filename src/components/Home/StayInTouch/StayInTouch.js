import React from 'react';
import './StayInTouch.css';

const StayInTouch = () => {
    return (
        <div className='padding-big contact-form' id='contact'>
            <div className="contact-form-inner">
                <h2>Stay in touch</h2>
                <input type="text" placeholder='Your Name' />
                <input type="email" placeholder='Your email address' />
                <textarea placeholder='Write your feedback'></textarea>
                <button className="btn-main btn-danger">
                    Send feedback
            </button>
            </div>
        </div>
    );
};

export default StayInTouch;