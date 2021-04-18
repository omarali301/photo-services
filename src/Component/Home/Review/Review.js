import React, { useEffect, useState } from 'react';

import Reviews from '../Reviews/Reviews';


const Review = () => {

    const [userReview, setUserReview] = useState()

    useEffect(()=>{
        const url =`http://localhost:5000/showReview`
        fetch(url)
        .then(res => res.json())
        .then(data =>{
            setUserReview(data);
        })
    },[]);
    // console.log(userReview);

    return (
        <div className="row">
            <h1 className="mt-5 pt-5 text-center">Our Client Review</h1>
            {
                userReview?.map(rev =><Reviews rev={rev}></Reviews>)

            }
        </div>
    );
};

export default Review;