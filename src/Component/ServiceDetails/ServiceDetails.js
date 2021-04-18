import React, {useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import Payment from '../Payment/Payment';

const ServiceDetails = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [products, setProducts] = useState([]);
    const [shippingData, setShippingData] = useState(null);

    const {productId}=useParams();

    useEffect(()=>{
        const url =`http://localhost:5000/shopProducts`
        fetch(url)
        .then(res => res.json())
        .then(data =>{
            setProducts(data);
        })
    },[])


   const product = products.find(pd => pd._id === productId)



   const orderProcess = () => {
    setShippingData(product)

}

const paymentSuccess = paymentId => {

const newOrder ={...loggedInUser,...shippingData,paymentId}
console.log(newOrder);
delete newOrder._id;
const url = `http://localhost:5000/addOrder`
fetch(url,{
    method : 'POST',
    headers: {
        'content-Type': 'application/json'
    },
    body : JSON.stringify(newOrder)
})
.then(res => console.log('server side response here',res))  
};



    return (
        <div className="container-fluid">
        <div className="row">
        <div className="col-md-4">
            <div style={{display: shippingData ? 'none' : 'block',width:'18rem',}} class="card m-2">
                <img src={product?.ImageURL} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title" >{product?.name}</h5>
                        <h5 class="card-title" >Price: {product?.price}</h5>
                        <p class="card-text">{product?.details}</p>
                        <button onClick={orderProcess}>Order Now</button>
                        {/* <Link to={`/ServiceDetails/${_id}`}><button onClick={handleCheckOut} className="btn btn-success">Buy Service</button></Link> */}
                 </div>
                 </div>

            </div>
            <div style={{display: shippingData ? 'block' : 'none', border:'1px solid gray'}} className="col-md-8 bg-light">
                <h4>Pay for your order and go to your Order List</h4>
                <Link to='/user/orderList'>User Order List</Link>
            <Payment handlePayment={paymentSuccess}></Payment>

            </div>
            </div>
            
          
        </div>
    );
};

export default ServiceDetails;