import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import SimplePayment from '../SimplePayment/SimplePayment';


const stripePromise = loadStripe('pk_test_51IeVD2CovAXKW9gL8Pdby6eGCOMgP1mcvRUPfa1ubc9v6rALeUN8hUTz373hvBcE3XbG33ddsOOrEMJdjL49FntI00TWvq6zzk');

const Payment = ({handlePayment}) => {
    // console.log(paymentSuccess);
    return (
        <Elements stripe={stripePromise}>
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8 mt-5">
                <SimplePayment handlePayment={handlePayment}></SimplePayment>
                </div>
                <div className="col-md-2"></div>
            </div>
     
      </Elements>
    );
};

export default Payment;