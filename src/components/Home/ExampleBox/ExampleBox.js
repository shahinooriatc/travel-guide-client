import React from 'react';
import './ExampleBox.css';

const ExampleBox = ({ example }) => {
    return (
        <div className='col-md-6'>
            <div className="m-3 example">
                <img src={example.img} className='img-fluid' alt="place" />
                <div className='example-hover'>
                    <h4 className='example-subject'>{example.subject}</h4>
                </div>
            </div>
        </div>
    );
};

export default ExampleBox;