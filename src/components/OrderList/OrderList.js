import React, { useContext, useEffect } from 'react';
import { fetchOrder } from '../../context/actions';
import GlobalContext from '../../context/GlobalContext';
import OrderBox from '../OrderBox/OrderBox';

const OrderList = () => {
    const { state, dispatch } = useContext(GlobalContext);

    const orders = state.orders;

    useEffect(() => {
        fetch('https://travel-guides.herokuapp.com/allBookings')
            .then(res => res.json())
            .then(data => {
                if (data) {
                    dispatch(fetchOrder(data));
                }
            })
    }, [dispatch]);
    return (
        <div>
            <h2 className='primary-color-text pb-3'>All Orders</h2>
            <div style={{ overflowX: 'auto' }}>
                <table className='table table-borderless'>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Service</th>
                            <th scope="col">Pay with</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, i) => <OrderBox key={order._id} index={i + 1} order={order} />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrderList;