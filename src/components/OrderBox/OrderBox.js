import React, { useState } from 'react';
import { toast } from 'react-toastify';
import './OrderBox.css';

const OrderBox = ({ order, index }) => {
    const { _id, user, email, serviceName, card, status } = order;
    const [orderStatus, setorderStatus] = useState(status);

    const notify = () => toast("Status successfully updated")

    const handleStatusChange = (id, e) => {
        setorderStatus(e.target.value);
        fetch(`https://travel-guides.herokuapp.com/updateStatus/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ orderStatus: e.target.value })
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setorderStatus(e.target.value);
                    notify();
                }
            })
    }
    return (
        <>
            <tr>
                <span className='d-none'>{_id}</span>
                <th scope='row'>{index}</th>
                <td>{user}</td>
                <td>{email}</td>
                <td>{serviceName}</td>
                <td>{card} Card</td>
                <td>
                    <select value={orderStatus} onChange={(e) => handleStatusChange(_id, e)} className='form-control' style={{ width: '120px' }}>
                        <option value="pending" className='text-danger'>pending</option>
                        <option value="ongoing" className='text-warning'>ongoing</option>
                        <option value="done" className='text-success'>done</option>
                    </select>
                </td>
            </tr>
        </>
    );
};

export default OrderBox;