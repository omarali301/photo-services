import React, { useEffect, useState } from 'react';


import Service from '../Service/Service';


const OurServices = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        const url =`http://localhost:5000/shopProducts`
        fetch(url)
        .then(res => res.json())
        .then(data =>{
            setProducts(data);
        })
    },[])

    return (
        <section>
            <h1 className="text-center" style={{marginTop:'100px'}}> Our Services</h1>
            
            <div style={{marginLeft: '15%'}} className="container mt-5">
            <div className="row">
                {
                    products.map(service =><Service service={service}></Service>)
                }
            </div>
            </div>

        </section>
    );
};

export default OurServices;