import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Service = (props) => {

    const{ImageURL, name,price,details, _id} = props.service;
    const history = useHistory();
    
    const handleCheckOut = ()=>{
    history.push(`/product/${_id}`)
    
    }

    return (
        
            <div class="card m-2" style={{width:'18rem',}}>
                <img src={ImageURL} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title" >{name}</h5>
                        <h5 class="card-title" >Price: {price}</h5>
                        <p class="card-text">{details}</p>
                        <Link to={`/ServiceDetails/${_id}`}><button onClick={handleCheckOut} className="btn btn-success">Buy Service</button></Link>
                 </div>

            </div>
    );
};

export default Service;