import React, { useState, useEffect } from 'react';

const RazorpayPaymentButton = () => {
  const [keyId, setKeyId] = useState('rzp_test_leUA0bEa3bg2JH'); // Replace with your actual Razorpay Key ID
  const [orderId, setOrderId] = useState('order_NYOcr190c8jCMZ'); // Replace with your actual Razorpay Order ID

  useEffect(() => {
    // Fetch Order ID from server-side in production (not exposed here)
    // Use a secure mechanism to avoid exposing secrets on the client-side

    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePaymentSuccess = (response) => {
    // Process successful payment here, e.g., send payment confirmation to server
    alert('Payment Successful!');
    console.log('Payment ID:', response.razorpay_payment_id);
    console.log('Order ID:', response.razorpay_order_id);
  };

  const handlePaymentFailure = (error) => {
    // Handle payment failure here, e.g., display error message to user
    alert('Payment Failed!');
    console.error('Payment Error:', error);
  };

  const openRazorpayCheckout = () => {
    const options = {
      key: keyId,
      amount: 50000, // Amount in paise
      currency: 'INR',
      name: 'Acme Corp',
      description: 'Test Transaction',
      image: 'https://example.com/your_logo', // Replace with your logo URL
      order_id: orderId,
      handler: handlePaymentSuccess,
      prefill: {
        name: 'Gaurav Kumar',
        email: 'gaurav.kumar@example.com',
        contact: '9000090000',
      },
      notes: {
        address: 'Razorpay Corporate Office',
      },
      theme: {
        color: '#3399cc',
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.on('payment.failed', handlePaymentFailure);
    rzp1.open();
  };

  return (
    <button onClick={openRazorpayCheckout} class="ml-4 px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 py-2">Pay</button>
  );
};

export default RazorpayPaymentButton;

