import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import AdminSidebar from '../AdminSidebar/AdminSidebar';

const AddService = () => {
    const { register, handleSubmit, errors } = useForm();
    const [ImageURL, setImageURL] = useState();
    const onSubmit = data =>{ 
        console.log(data);
        const shopData = {
            name : data.name,
            price : data.price,
            ImageURL: ImageURL,
            
        };
        console.log(shopData)

        const newData ={...shopData}
// console.log(newOrder);
    delete newData._id;
       
        const url = `http://localhost:5000/addProduct`
        fetch(url,{
            method : 'POST',
            headers: {
                'content-Type': 'application/json'
            },
            body : JSON.stringify(newData)
        })
        .then(res => console.log('server side response here',res))  
        alert('Service has added')
    };
    
    const handleImageUpload = event =>{
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '1096af0da178957723e48210631cd209');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',imageData)
        .then(function(response){
            setImageURL(response.data.data.display_url);
        })
        .catch(function(error){
            console.log(error);
        })
    }
    return (


        <div className="container-fluid">
        <div className="row">
            <div className="col-md-2">
                <AdminSidebar/>
            </div>
            <div className="col-md-5 container-all">
                <h4>Please Add Service Here</h4>
      
        <form onSubmit={handleSubmit(onSubmit)}>
           
            <input name="name" defaultValue="product name" {...register("name")} />
            <br/>
           <input name="price" defaultValue="product price" {...register("price")} />
           <br/>
           {/* <input name="details" defaultValue="details" {...register("details")} /> */}
  
            <br/>
            <input name="exampleRequired" type="file" onChange={handleImageUpload} />
           <br/>
            <input type="submit" />
        </form>
        </div>
            <div className="col-md-5"></div>
        </div>
        
    </div>
    );
};

export default AddService;