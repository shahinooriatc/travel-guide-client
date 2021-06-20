import React, { useContext } from 'react';
import GlobalContext from '../../context/GlobalContext';
import ManageCard from '../ManageCard/ManageCard';

const Manage = () => {

    const { state } = useContext(GlobalContext);
    const services = state.services;

    return (
        <div className='p-3'>
            <h2 className='primary-color-text pb-3'>Manage Services</h2>
            <div className='row'>
                {
                    services.map(service => <ManageCard key={service._id} service={service} />)
                }
            </div>
        </div>
    );
};

export default Manage;