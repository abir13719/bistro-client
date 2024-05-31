import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/shared/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";

// TODO: Add Publishable Key
const stripePromise = loadStripe("");
const Payment = () => {
  return (
    <div>
      <SectionTitle title={"Payment"} subTitle={"Please Payment"}></SectionTitle>
      <div>
        <Elements stripe={stripePromise}></Elements>
      </div>
    </div>
  );
};

export default Payment;
