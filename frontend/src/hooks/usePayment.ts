import { useState } from 'react';
import { paymentAPI } from '../services/api';
import { auth } from '../config/firebase';
import { useNavigate } from 'react-router-dom';

declare global {
  interface Window {
    Razorpay: any;
  }
}

export const usePayment = (onPaymentSuccess?: () => void) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const initializePayment = async (courseId: string) => {
    setLoading(true);
    try {
      console.log('Initializing payment for course:', courseId);

      // 1. Create Order (Secure API)
      const orderResponse = await paymentAPI.createOrder(courseId);
      console.log('Order response:', orderResponse.data);

      const { orderId, amount, currency, courseTitle } = orderResponse.data;

      const options = {
        key: 'rzp_test_8CxHBNuMQt1Qn8', // Ideally from env: import.meta.env.VITE_RAZORPAY_KEY_ID
        amount,
        currency,
        name: 'Design Dharma',
        description: courseTitle || 'Course Enrollment',
        order_id: orderId,
        handler: async (response: any) => {
          try {
            console.log('Payment success, verifying...', response);
            // 2. Verify Payment
            await paymentAPI.verifyPayment({
              orderId: response.razorpay_order_id,
              paymentId: response.razorpay_payment_id,
              signature: response.razorpay_signature
            });

            // 3. Show success popup or redirect
            if (onPaymentSuccess) {
              onPaymentSuccess();
            } else {
              alert('Payment successful! You now have access.');
              navigate('/dashboard');
            }
          } catch (error) {
            console.error('Payment verification error:', error);
            alert('Payment successful but verification failed. Please contact support.');
            navigate('/dashboard');
          }
        },
        prefill: {
          name: auth.currentUser?.displayName || '',
          email: auth.currentUser?.email || '',
        },
        theme: {
          color: '#00F076',
        },
        modal: {
          ondismiss: function () {
            setLoading(false);
          }
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.on('payment.failed', function (response: any) {
        alert(response.error.description);
        setLoading(false);
      });
      rzp.open();
    } catch (error: any) {
      console.error('Payment initialization error:', error);
      const errorMessage = error.response?.data?.error || error.message || 'Payment initialization failed';
      alert(errorMessage);
      setLoading(false);
    }
  };

  return { initializePayment, loading };
};