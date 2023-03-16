import * as React from 'react';
import logo from './logo.png';
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
      <div style={{ paddingBottom: 20 }}>
        <Navbar />
      </div>
      <div style={{ padding: 50 }}>

        <stripe-pricing-table
          pricing-table-id="prctbl_1MkLIpAfIGR0KUvj8Xvtb8aW"
          publishable-key="pk_test_51Mjc6FAfIGR0KUvjHVH3urBMpUvPUjU4NBCXKDWgwFGc2vgaE1XlBp6AQTmpKHH2sJ5AlDFRF0CQdMrpHxLA5ndw00YGYwymWL"
        >
        </stripe-pricing-table>
      </div>
    </div>

  );
}

export default PricingPage2;