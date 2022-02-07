import {CardElement, PaymentElement, useElements, useStripe} from "@stripe/react-stripe-js";
import axios from "axios";
import React, {useState, useEffect} from "react";

const orderSocket = new WebSocket(
  'ws://' + window.location.host + '/ws/order_socket/'
)

export default function CheckoutForm() {

    const [error, setError] = useState(null);
    const [email, setEmail] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [Cart,SetCart] = useState([])


    const GetCart = () => {
      axios.get('/api/get_cart').then((response) => {
          SetCart(response.data)
      })
    }

    useEffect(() => {
        GetCart()
    },[])


    const Send = () => {
      let list = Cart.map((x) => x.id )
      
      orderSocket.send(JSON.stringify({
          'message': list
      }))
    }   


    useEffect(() => {
      if (!stripe) {
        return;
      }
  
      const clientSecret = new URLSearchParams(window.location.search).get(
        "payment_intent_client_secret"
      );
  
      if (!clientSecret) {
        return;
      }
  
      stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
        switch (paymentIntent.status) {
          case "succeeded":
            setMessage("Payment succeeded!");
            break;
          case "processing":
            setMessage("Your payment is processing.");
            break;
          case "requires_payment_method":
            setMessage("Your payment was not successful, please try again.");
            break;
          default:
            setMessage("Something went wrong.");
            break;
        }
      });
    }, [stripe]);

    const handleChange = (event) => {
        if (event.error) {
          setError(event.error.message);
        } else {
          setError(null);
        }
      }
    
   

    const handleSubmit = async (event) => {
      event.preventDefault();
      // const card = elements.getElement(CardElement);       
      
      // const {paymentMethod, error} = await stripe.createPaymentMethod({
      //    type: 'card',
      //    card: card
      //   });
      // console.log(paymentMethod);

      // axios.post('/api/payment',{email, payment_method_id: paymentMethod.id}).then((response) => {
      //   console.log(response.data)
      // }).catch(error => {console.log(error)});

      const { error } = await stripe.confirmPayment({
        elements,
        redirect : 'if_required',
        confirmParams: {
          // Make sure to change this to your payment completion page
          return_url: "http://127.0.0.1:8000/",
          receipt_email: email
        },
        
      }).then((response) => {
        if (response.error) {
          console.log(response.error)
        }
        else {
          Send()
        }
      })

      if (error.type === "card_error" || error.type === "validation_error") {
        setError(error.message);
      } else {
        setError("An unexpected error occured.");
      }

      }  
      

    return (

        <form onSubmit={handleSubmit} className='p-3 w-full my-auto h-[40rem] flex flex-col mx-0 rounded-md bg-gray-50'>
            <label htmlFor='email' className='ml-[2px]'>Email Address</label>
            <input type="email" placeholder="jenny.rosen@example.com" autoComplete='off' required id='email' value={email} onChange={(event) => { setEmail(event.target.value)}} className=" mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 "/>
            <PaymentElement id='payment-element' className="mt-1 p-3" id="card-element" onChange={handleChange}/>
            <button className="bg-gray-300 rounded-md p-2" disabled={isLoading || !stripe || !elements} id="submit">
              <span id="button-text">
                {isLoading ? <div className="spinner" id="spinner">Hi</div> : "Pay now"}
              </span>
            </button>
            <div role="alert">{error}</div>
            <div>{message}</div>
        </form>


    )

}