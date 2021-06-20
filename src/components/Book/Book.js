import React, { useContext, useState } from 'react';
import GlobalContext from '../../context/GlobalContext';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import './Book.css';
import PaymentCard from '../PaymentCard/PaymentCard';
import { useHistory } from 'react-router';

const Book = () => {
    const { state } = useContext(GlobalContext);
    const [bookingInfo, setbookingInfo] = useState({});
    const [showPayment, setshowPayment] = useState(false);
    const [showBookingInfo, setshowBookingInfo] = useState(true);
    const [userName, setuserName] = useState(state.loggedInUser.name);
    const [userEmail, setuserEmail] = useState(state.loggedInUser.email);
    const serviceName = state.selectedService[0]?.name;
    const bill = state.selectedService[0]?.price;

    const history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();
        setshowBookingInfo(false);
        setshowPayment(true);
        setbookingInfo({
            user: userName,
            email: userEmail,
            serviceName,
            bill,
            orderDate: (new Date()).toDateString(),
            status: 'pending'
        })
    }

    const stripePromise = loadStripe('pk_test_51Ie0iKGjokFP6Zd2vxFTqWrwPf7M47GJEzcQpH3AlfgEGCxIVz43YkSM729W0tw7NnldqeRUTPVDkCoSQW6yeHXF00K3cXdAbv');

    return (
        <div className='p-3 book'>
            {
                serviceName && showBookingInfo && <>
                    <h2>Book a service</h2>
                    <form className='book-form'>
                        <label className='pt-1'>Name:</label>
                        <input className='form-control' type="text" value={userName} onBlur={e => setuserName(e.target.value)} />
                        <label className='pt-1'>Email:</label>
                        <input className='form-control' type="text" value={userEmail} onBlur={e => setuserEmail(e.target.value)} />
                        <label className='pt-1'>Package:</label>
                        <input className='form-control' type="text" value={serviceName} readOnly />
                        <h5 className='pt-3'>Bill: ${bill}</h5>
                        <input type="submit" className='btn-main mt-3' onClick={handleSubmit} />
                    </form>
                </>
            }
            {
                serviceName ? <span></span> :
                    <>
                        <h3 className='py-4'>
                            Select a service first
                        </h3>
                        <button className="btn-main py-2" onClick={() => history.push('/')}>&larr; Go to home</button>
                    </>
            }
            {
                showPayment && <div style={{ maxWidth: '500px' }} >
                    <h2>Billing Information</h2>
                    <Elements stripe={stripePromise}>
                        <PaymentCard bookingInfo={bookingInfo} setbookingInfo={setbookingInfo} />
                    </Elements>
                </div>
            }
        </div>
    );
};

export default Book;