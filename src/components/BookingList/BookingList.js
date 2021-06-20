import React, { useContext, useEffect } from 'react';
import { fetchBooking } from '../../context/actions';
import GlobalContext from '../../context/GlobalContext';
import BookingCard from '../BookingCard/BookingCard';

const BookingList = () => {

    const { state, dispatch } = useContext(GlobalContext);
    const email = state.loggedInUser?.email;

    useEffect(() => {
        fetch('https://travel-guides.herokuapp.com/allOrders', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email })
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    dispatch(fetchBooking(data));
                }
            })
    }, [email, dispatch])

    const bookings = state.bookings;

    return (
        <div className='p-3'>
            <h2 className='primary-color-text'>Booking List</h2>
            <div className='row'>
                {
                    bookings && bookings.map(booking => <BookingCard key={booking._id} booking={booking} />)
                }
            </div>
        </div>
    );
};

export default BookingList;