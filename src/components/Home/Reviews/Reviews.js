import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import { fetchReviews } from '../../../context/actions';
import GlobalContext from '../../../context/GlobalContext';
import ReviewBox from '../ReviewBox/ReviewBox';

const Reviews = () => {

    const { state, dispatch } = useContext(GlobalContext);
    const history = useHistory();

    useEffect(() => {
        fetch('http://localhost:5000/allReviews')
            .then(res => res.json())
            .then(data => {
                if (data) {
                    dispatch(fetchReviews(data));
                }
            })
    }, [dispatch])

    const reviews = state.reviews;
    return (
        <section className='padding-big container'>
            <h2 className="heading">Testimonail</h2>
            <h4 className='sub-heading'>What our customers say</h4>
            <div className="row py-5">
                {
                    reviews.map(review => <ReviewBox key={review._id} reviewDetails={review} />)
                }
            </div>
            <div className="w-100 py-3 text-center">
                <button className="btn-main" onClick={() => history.push('/review')}>Add a review</button>
            </div>
        </section>
    );
};

export default Reviews;