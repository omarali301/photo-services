import React from 'react';

const Reviews = ({rev}) => {
    return (
        <div class="card ms-4 mt-5 p-2" style={{width: '25rem'}}>
          <div class="card-body">
          <h4 class="card-title text-center">{rev.name}</h4>
          <h5 class="card-title text-center">{rev.companyName}</h5>
          <p class="card-text text-center">{rev.details}</p>
          <h1 class="card-text text-center">{rev.star}</h1>
         
        </div>
      </div>
      
       
    );
};

export default Reviews;