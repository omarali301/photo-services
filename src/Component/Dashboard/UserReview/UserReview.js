import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";

const UserReview = () => {
 const { register, handleSubmit, errors } = useForm();

const [review, setreview] = useState();

    const onSubmit = data =>{ 
        console.log(data);
        const reviewData = {
            name : data.name,
            companyName : data.companyName,
            details : data.details,
            star : data.star,
           
        };
     
       
        const url = `http://localhost:5000/addReview`
        fetch(url,{
            method : 'POST',
            headers: {
                'content-Type': 'application/json'
            },
            body : JSON.stringify(reviewData)
        })
        .then(res => console.log('server side response here',res))  
        alert('Thank you so much for your review')
    };
    
    return (
        <div className="container-fluid">
        <div className="row">
            <div className="col-md-2">
                <Sidebar/>
            </div>
            <div style={{marginLeft:'25%', padding:'50px'}} className="col-md-5 container-all">
            <h3>Please Review Here</h3>
           
        <form onSubmit={handleSubmit(onSubmit)}>
           
            <input name="name" defaultValue="name" {...register("name")} />
            <br/>
           <input name="companyName" defaultValue="company Name" {...register("companyName")} />
           <br/>
           <input name="details" defaultValue="details here" {...register("details")} />
           <br/>
           <input name="star" defaultValue="star mark here" {...register("star")} />
           <br/>
           <input type="submit" />
        </form>
    </div>
              
            <div className="col-md-5"></div>
            </div>
        </div>
  
    );
};

export default UserReview;