import { useSelector, useDispatch  } from "react-redux";
import { useNavigate, useLocation} from "react-router-dom";
import { useRef } from "react";
import { Typography } from "@material-ui/core";
import { CardNumberElement, CardCvcElement, CardExpiryElement, useStripe, useElements, Elements } from "@stripe/react-stripe-js";
import axios from "axios";
import { loadStripe } from '@stripe/stripe-js';
import "./payment.css";
import  CreditCardIcon  from "@material-ui/icons/CreditCard";
import  EventIcon  from "@material-ui/icons/Event";
import  VpnKeyIcon  from "@material-ui/icons/VpnKey";
import { toast } from "react-toastify";
import { Fragment } from "react";
import { createMember, renewMember} from "../../actions/paymentAction";

const Payment =({stripeApiKey})=>{

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation()
  const stripe = useStripe();
  const Elements = useElements();
  const payBtn = useRef(null);
  const {user} =useSelector((state)=> state.user);
  const { loading, success, member } = useSelector((state) => state.createMember);

  // error from payment renew TODO

  const paymentdata = {
    amount: Math.round(location.state.member ? location.state.member.amount * 100 : location.state.mem.amount * 100),

  }


  const submitHandler= async(e)=>{
e.preventDefault();
payBtn.current.disabled = true;

try {

  const config = {
    headers: {
      "Content-Type": "application/json",

    },
  };
const {data}  = await axios.post(
  `/api/payment/process`,
  paymentdata,
  config
  );
  const client_secret = data.client_secret;
  
  if(!stripe || !Elements) return;
  
  const result = await stripe.confirmCardPayment(
    client_secret, {
      payment_method : {
        card: Elements.getElement(CardNumberElement),
  
        billing_details: {
          name: user.name,
          email: user.email
          // address Todo
        }
      },
    }
  )

if(result.error) {
  payBtn.current.disabled = false
  toast.error(result.error.message)
}else{
  if(result.paymentIntent.status === "succeeded"){
    //Here can be the create membership will come

    if(location.state.isRenew){
      dispatch(renewMember(location.state.member._id))
      toast.success("Membership Renewed Successfully")
    }else{
      dispatch(createMember(location.state.mem._id))
      toast.success("Membership created succesfully!")
    }
    navigate("/success")
  }else{
    toast.error("There is some issue while processing payment")
  }
}


  
} catch (error) {
  payBtn.current.disabled = false;
  toast.error(error)
}

  }


  return(
    <Fragment>
      <div className="paymentContainer">
        {/* <Elements stripe={stripePromise}> */}
          <form className="paymentForm" onSubmit={(e) => submitHandler(e)}>
            <Typography>Card Info</Typography>
            <div>
              <CreditCardIcon />
              <CardNumberElement className="paymentInput" />
            </div>
            <div>
              <EventIcon />
              <CardExpiryElement className="paymentInput" />
            </div>
            <div>
              <VpnKeyIcon />
              <CardCvcElement className="paymentInput" />
            </div>

            <input
              type="submit"
              value={`Pay -${location.state.member ? location.state.member.amount : location.state.mem.amount}₹$`}
              ref={payBtn}
              className="paymentFormBtn"
            />
          </form>
        {/* </Elements> */}
      </div>
    </Fragment>
  )
}

export default Payment;
