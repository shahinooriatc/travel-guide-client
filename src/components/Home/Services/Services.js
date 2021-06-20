import React, { useContext, useEffect } from 'react';
import { fetchServices } from '../../../context/actions';
import GlobalContext from '../../../context/GlobalContext';
import ServiceBox from '../ServiceBox/ServiceBox';

const Services = () => {

    const { state, dispatch } = useContext(GlobalContext);

    useEffect(() => {
        fetch('https://travel-guides.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                if (data) {
                    dispatch(fetchServices(data));
                }
            })
    }, [dispatch])

    const services = state.services;
    return (
        <section id='service' className='container padding-big'>
            <h2 className="heading">Services</h2>
            <h4 className="sub-heading">Checkout our all packages</h4>
            <div className="row">
                {
                    services.map(service => <ServiceBox key={service._id} service={service} />)
                }
            </div>
            <div className="text-center py-3">
                <button className="btn-main">all packages</button>
            </div>
        </section>
    );
};

export default Services;