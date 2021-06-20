import React from 'react';
import asia from '../../../images/asia.jpg';
import adventure from '../../../images/adventure.jpg';
import history from '../../../images/history.jpg';
import mountain from '../../../images/mountain.jpg';
import ExampleBox from '../ExampleBox/ExampleBox';

const examplesData = [
    {
        id: 1,
        img: asia,
        subject: 'asia'
    },
    {
        id: 2,
        img: adventure,
        subject: 'adventure'
    },
    {
        id: 3,
        img: history,
        subject: 'history'
    },
    {
        id: 4,
        img: mountain,
        subject: 'mountain'
    }
]

const Examples = () => {
    return (
        <section className='container padding-big'>
            <h2 className='heading'>What are you looking for?</h2>
            <h4 className='sub-heading'>Go on a tremendous journey with us</h4>
            <div className="row py-4">
                {
                    examplesData.map(example => <ExampleBox key={example.id} example={example} />)
                }
            </div>
            <div className="text-center">
                <button className='btn-main'>all experience</button>
            </div>
        </section>
    );
};

export default Examples;