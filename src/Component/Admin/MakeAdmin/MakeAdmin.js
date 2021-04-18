
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import AdminSidebar from '../AdminSidebar/AdminSidebar';

const MakeAdmin = () => {
    const { register, handleSubmit, errors } = useForm();
    const [ImageURL, setImageURL] = useState();
    const onSubmit = data =>{ 
      
        const adminData = {
            email : data.email,
        
            
        };
      

        const newData ={...adminData}

    delete newData._id;
       
        const url = `http://localhost:5000/makeAdmin`
        fetch(url,{
            method : 'POST',
            headers: {
                'content-Type': 'application/json'
            },
            body : JSON.stringify(newData)
        })
        .then(res => console.log('server side response here',res))  
        alert('Admin has added')
    };
    
    return (
       

        <div className="container-fluid">
        <div className="row">
            <div className="col-md-2">
                <AdminSidebar/>
            </div>
            <div className="col-md-5 container-all">
                <h4>Please add your email for make admin</h4>
      
        <form onSubmit={handleSubmit(onSubmit)}>
           <p>Email</p>
            <input name="email" placeholder="your email please" {...register("email")} />
            
            <input type="submit" />
        </form>
        </div>
            <div className="col-md-5"></div>
        </div>
        
    </div>
    );
};

export default MakeAdmin;