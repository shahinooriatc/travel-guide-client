import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router';
import './PaymentCard.css';

const PaymentCard = ({ bookingInfo }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [paymentError, setpaymentError] = useState(null);
    const [paymentSuccess, setpaymentSuccess] = useState(null);
    const history = useHistory();

    const notify = () => toast('Order successfully placed');

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const cardElement = elements.getElement(CardElement);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setpaymentError(error.message);
            setpaymentSuccess(null);
        } else {
            setpaymentError(null);
            setpaymentSuccess(paymentMethod.id);
            const paymentInfo = {
                card: paymentMethod.card.brand,
                country: paymentMethod.card.country,
                expiry: `${paymentMethod.card.exp_month} / ${paymentMethod.card.exp_year}`,
                last4digit: paymentMethod.card.last4
            }
            const allInfo = { ...bookingInfo, ...paymentInfo };
            fetch('https://travel-guides.herokuapp.com/addOrder', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(allInfo)
            })
                .then(result => {
                    if (result) {
                        notify();
                        history.push('/bookingList');
                    }
                })
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} style={{ margin: '10px', display: 'block' }}>
                <CardElement className='payment-card' style={{ margin: '10px' }} />
                <button className='btn-main py-2 my-3' type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
            {
                paymentError && <p className='text-danger p-2'>{paymentError}</p>
            }
            {
                paymentSuccess && <p className='text-success p-2'>Your payment was successfull</p>
            }
        </>
    );
};
export default PaymentCard;