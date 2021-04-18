import React from 'react';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import { Link } from 'react-router-dom';
const SimplePayment = ({handlePayment}) => {
  console.log(handlePayment);
    const stripe = useStripe();
    const elements = useElements();
  
    const handleSubmit = async (event) => {
      
      event.preventDefault();
  
      if (!stripe || !elements) {

        return;
      }
  
      
      const cardElement = elements.getElement(CardElement);
      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      });
  
      if (error) {
        console.log('[error]', error);
      } else {
        console.log('[PaymentMethod]', paymentMethod );
        
        handlePayment(paymentMethod.id)
        // console.log(paymentMethod.id);
        alert('your order successful')

      }
    };
  
    return (

      
      <form onSubmit={handleSubmit}>
    
      <CardElement />
      
      <button className="btn btn-success mt-5" type="submit" disabled={!stripe}>Pay Now</button>
    </form>
    );
};

export default SimplePayment;