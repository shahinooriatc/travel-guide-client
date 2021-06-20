import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import GlobalContext from '../../context/GlobalContext';

const Review = () => {
    const { state } = useContext(GlobalContext);

    const notify = () => toast('Your reviews added');

    const user = state.loggedInUser.name;
    const email = state.loggedInUser.email;
    const [reviewText, setreviewText] = useState('');
    const image = state.loggedInUser.img;

    const handleSubmit = e => {
        e.preventDefault();
        setreviewText('');
        const reviewInfo = {
            user,
            email,
            review: reviewText,
            image
        }
        fetch('https://travel-guides.herokuapp.com/addReview', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(reviewInfo)
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    notify();
                }
            })
            .catch(err => {
                console.log(err);
            })
    };

    return (
        <div className='p-3'>
            <h2 className='primary-color-text'>Add A Review</h2>
            <form onSubmit={handleSubmit} style={{ maxWidth: '500px' }}>
                <div>
                    <div className="input-group d-flex flex-column">
                        <label className='pt-1'>User: </label>
                        <input className='form-control w-100 mb-3' type="text" name="name" value={user} readOnly />
                    </div>
                    <div className="input-group d-flex flex-column">
                        <label className='pt-1'>Email: </label>
                        <input className='form-control w-100 mb-3' type="text" name="name" value={email} readOnly />
                    </div>
                    <div className="input-group d-flex flex-column">
                        <label className='pt-1'>Your review: </label>
                        <textarea style={{ height: '150px' }} className='form-control mb-3 w-100' type="text" name="write your review" placeholder='Write your review' value={reviewText} onChange={e => setreviewText(e.target.value)} required />
                    </div>
                    <div className="text-center">
                        <button type='submit' className='btn-main'>Add a review</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Review;