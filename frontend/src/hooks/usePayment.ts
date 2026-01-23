import { useState } from 'react';
import axios from 'axios';
import { auth } from '../config/firebase';

declare global {
  interface Window {
    Razorpay: any;
  }
}

export const usePayment = () => {
  const [loading, setLoading] = useState(false);

  const initializePayment = async (courseId: string) => {
    setLoading(true);
    try {
      console.log('Initializing payment for course:', courseId);
      
      // Use your working Razorpay endpoint
      const orderResponse = await axios.post(`http://localhost:4000/api/payments/orders/24999`);
      console.log('Order response:', orderResponse.data);
      
      const { id: orderId, amount, currency } = orderResponse.data;

      const options = {
        key: 'rzp_test_8CxHBNuMQt1Qn8', // Your actual Razorpay key
        amount,
        currency,
        name: 'Course Platform',
        description: 'Modern Robot Learning from Scratch',
        order_id: orderId,
        handler: async (response: any) => {
          try {
            // Get user data
            const user = auth.currentUser;
            
            // Call success endpoint with purchase data
            await axios.post('http://localhost:4000/api/payments/success', {
              orderId: response.razorpay_order_id,
              paymentId: response.razorpay_payment_id,
              courseId: courseId,
              uid: user?.uid
            });
            
            alert('Payment successful! Course added to your dashboard.');
            window.location.href = '/dashboard';
          } catch (error) {
            console.error('Payment success error:', error);
            alert('Payment completed! Please check your dashboard.');
            window.location.href = '/dashboard';
          }
        },
        prefill: {
          name: 'User Name',
          email: 'user@example.com',
        },
        theme: {
          color: '#00F076',
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error: any) {
      console.error('Payment initialization error:', error);
      const errorMessage = error.response?.data?.error || error.message || 'Payment initialization failed';
      alert(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return { initializePayment, loading };
};