import React from 'react';
import SectionTitles from '../../../Components/SectionTitles/SectionTitles';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';


// todo provide pusblish key 
import UseCart from './../../../hooks/UseCart';
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_pk)

const Payment = () => {
    const [cart] = UseCart();
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2))

    return (
        <div className='w-11/12'>
            <SectionTitles subHeading="please process" heading="Payment"></SectionTitles>
            <h2 className="text-3xl"> Teka o teka tumi uira uira aso...</h2>
            <Elements stripe={stripePromise}>
                <CheckoutForm cart={cart} price={price}></CheckoutForm>
                
            </Elements>

        </div>
    );
};

export default Payment;