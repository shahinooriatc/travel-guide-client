import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { deleteService } from '../../context/actions';
import GlobalContext from '../../context/GlobalContext';

const ManageCard = ({ service }) => {
    const { _id, name, price } = service;
    const { dispatch } = useContext(GlobalContext);

    const notify = () => toast("One service deleted");


    const handleDelete = id => {
        fetch(`https://travel-guides.herokuapp.com/deleteService/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    dispatch(deleteService(id));
                    notify();
                }
            })
    }
    return (
        <div className='col-lg-6'>
            <div className="m-2 p-4 shadow mx-auto" style={{ maxWidth: '600px' }}>
                <div className='d-flex flex-wrap justify-content-between align-content-center pb-3'>
                    <h4>{name}</h4>
                    <h3>${price}</h3>
                </div>
                <button onClick={() => handleDelete(_id)} className="btn btn-danger">
                    Delete Service
                </button>
            </div>
        </div>
    );
};

export default ManageCard;