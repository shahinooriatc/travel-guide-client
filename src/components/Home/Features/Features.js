import React from 'react';
import camera from '../../../icons/camera.svg';
import bicycle from '../../../icons/bicycle.svg';
import forest from '../../../icons/forest.svg';
import FeatureBox from '../FeatureBox/FeatureBox';

const featuresData = [
    {
        id: 1,
        icon: camera,
        heading: 'LOCAL COMMITMENT',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    {
        id: 2,
        icon: forest,
        heading: 'ECO-FRIENDLY EXPERIENCES',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    {
        id: 3,
        icon: bicycle,
        heading: 'ETHICAL AWARENESS',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    }
]

const Features = () => {
    return (
        <section className='container padding-big'>
            <h2 className='heading'>Your Next Holiday</h2>
            <h4 className='sub-heading'>Promising a happy journey</h4>
            <div className="row">
                {
                    featuresData.map(feature => <FeatureBox key={feature.id} feature={feature} />)
                }
            </div>
            <div className="text-center">
                <button className='btn-main'>Travel with us</button>
            </div>
        </section>
    );
};

export default Features;