import React from 'react';
import './FeatureBox.css';

const FeatureBox = ({ feature }) => {
    const { icon, heading, description } = feature;
    return (
        <div className='col-lg-4'>
            <div className="p-3 m-2 text-center">
                <img src={icon} className='feature-icon py-2' alt="feature" />
                <h3 className='primary-text py-2'>{heading}</h3>
                <p className='secondary-text pt-2'>{description}</p>
            </div>
        </div>
    );
};

export default FeatureBox;