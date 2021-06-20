import React, { useContext } from 'react';
import './ServiceBox.css';
import add from '../../../icons/service-add.svg';
import GlobalContext from '../../../context/GlobalContext';
import { selectedService } from '../../../context/actions';
import { useHistory } from 'react-router';

const ServiceBox = ({ service }) => {
    const history = useHistory();
    const { _id, name, price, description, image } = service;

    const { dispatch } = useContext(GlobalContext);

    const handleAddService = () => {
        dispatch(selectedService(_id));
        history.push('/book');
    }

    return (
        <div className='col-md-6'>
            <div className="m-3 shadow-lg service-box">
                <div className='service-box-img'>
                    <img src={`data:${image.contentType};base64,${image.img}`} className='img-fluid' alt="tour-place" />
                    <h1 className='service-box-price'>${price}</h1>
                    <div className='service-box-btn d-flex align-items-center justify-content-center'>
                        <img src={add} onClick={handleAddService} className='take-service' alt="take this service" />
                    </div>
                </div>
                <div className='service-box-details'>
                    <h4 className='pt-4 pl-2 service-box-title'>
                        {name}
                    </h4>
                    <h6 className='pl-2 pb-4 secondary-text'>
                        {description}
                    </h6>
                </div>
            </div>
        </div>
    );
};

export default ServiceBox;