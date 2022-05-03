/* eslint-disable */
import axios from "axios";
import { showAlert } from './alerts';
const stripe = Stripe('pk_test_51Kv3dWSJKlKQybFA345agXhdQdRUahDX3hC4obctAqwEygLxQuk8u8jJpVmWSmb8m81YnZMWqEb88AxDdnyE7EAc00wHFwt2i7');

export const bookTour = async tourId => {
    try {
        // 1) Get checkout session from API    
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);
    // console.log(session);

    // 2) Create checkout from + change credit card
        await stripe.redirectToCheckout({
            sessionId: session.data.session.id
        })
    } catch (err) {
        showAlert('error',err);
    }
    
};