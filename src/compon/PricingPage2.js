import * as React from 'react';
import logo from '../image/logo.png';
import Navbar from './Navbar';
function PricingPage2() {
  //   (async () => {
  //     const {paymentIntent} = await stripe.retrievePaymentIntent(clientSecret);
  //     if (paymentIntent && paymentIntent.status === 'succeeded') {
  //       // Handle successful payment here
  //     } else {
  //       // Handle unsuccessful, processing, or canceled payments and API errors here
  //     }
  //   })();
  // Paste the stripe-pricing-table snippet in your React component
  return (
    <div>
      <div style={{ paddingBottom: 70 }}>
        <Navbar />
      </div>
      <div style={{ padding: 50 }}>

        <stripe-pricing-table pricing-table-id="prctbl_1MmiRWSGVovBYar9CEKd2Uma"
          publishable-key="pk_test_51Mmi6pSGVovBYar9iT7cbC0cpZuHbuuCtQHGrmUixIvg4hGcVkFx0WX12mfrYjKlifZ0TxLjWlMeFIxiRjC9tshO00Yn6vvVx4">
        </stripe-pricing-table>
      </div>
    </div>

  );
}

export default PricingPage2;