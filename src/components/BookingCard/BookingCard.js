import React from 'react';
import './BookingCard.css';

const BookingCard = ({ booking }) => {
    const { serviceName, orderDate, status, email } = booking;

    let statusColor;
    switch (status) {
        case 'pending':
            statusColor = 'text-danger';
            break;
        case 'ongoing':
            statusColor = 'text-warning';
            break;
        case 'done':
            statusColor = 'text-success';
            break;
        default:
            break;
    }
    return (
        <div className='col-lg-6'>
            <div className="p-3 m-2 shadow">
                <div className="d-flex align-items-center justify-content-between">
                    <h5 className='primary-color-text'>{serviceName}</h5>
                    <p className={`${statusColor} border p-2`}>{status}</p>
                </div>
                <p>Ordered in: {orderDate}</p>
                <p className='booking-mail'>Email: {email}</p>
            </div>
        </div>
    );
};

export default BookingCard;