import React, { useState } from 'react';
import { toast } from 'react-toastify';
import './MakeAdmin.css';

const MakeAdmin = () => {

    const [email, setemail] = useState('');

    const notify = () => toast("An admin added");


    const handleAdminSubmit = e => {
        setemail('');
        e.preventDefault();

        fetch('https://travel-guides.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email })
        })
            .then(data => data.json())
            .then(result => {
                if (result) {
                    notify();
                }
            })
    }
    return (
        <div className='make-admin'>
            <h2>Make admin</h2>
            <form onSubmit={handleAdminSubmit} className='p-3'>
                <label>
                    Email:
                </label>
                <input type="email" className='form-control mb-4' placeholder="New admin's email" value={email} onChange={e => setemail(e.target.value)} required />
                <input type="submit" value="Make admin" className='btn-main py-2' />
            </form>
        </div>
    );
};

export default MakeAdmin;