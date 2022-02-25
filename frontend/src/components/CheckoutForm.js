import {CardElement, PaymentElement, useElements, useStripe} from "@stripe/react-stripe-js";
import axios from "axios";
import React, {useState, useEffect} from "react";

// const orderSocket = new WebSocket(
//   'ws://' + window.location.host + '/ws/order_socket/'
// )

export default function CheckoutForm() {

    const [error, setError] = useState(null);
    const [email, setEmail] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [Cart,SetCart] = useState([])
    const [Ready,SetReady] = useState(false)
    const [number, SetNumber] = useState(0)


    
    const pp = () => {
      console.log('ready')
      SetReady(true)    
    }


    const GetCart = () => {
      axios.get('/api/get_cart').then((response) => {
          SetCart(response.data)
          
      })
    }


    

    useEffect(() => {
        GetCart()
    },[])

    const press = () => {
      let note = Cart.map((x) => ({'item': x.item.id, 'num': x.num}) )

      


    }

    // const Send = () => {
    //   let list = Cart.map((x) => ({'id': x.item.id, 'num': x.num, 'note': x.item.note}) )
    //   let note = Cart.map((x) => x.note)

      
      
    //   orderSocket.send(JSON.stringify({
    //       'message': list,
    //   }))
    // }

    useEffect(() => {
      console.log(elements)
    })

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
    
    const renderLoading = () => {
      return(
        <div className="top-0 z-20 flex flex-col left-0 bottom-0 right-0 fixed bg-orange-burger">
          <div className="w-[300px] mt-40  mx-auto h-[350px]">
          <dotlottie-player
                  src='/staticfiles/images/loading.lottie'
                  autoplay
                  loop
                  style={{ height: '100%', width: '100%' }}
          />
                    <div className="text-center font-bold -mt-9 text-3xl">Prosimy czekać</div>
          </div>
        </div>
      )
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
        confirmParams: {
          // Make sure to change this to your payment completion page
          return_url: "http://127.0.0.1:8000/complete",
          // receipt_email: email
        },
        
      })

      if (error.type === "card_error" || error.type === "validation_error") {
        setError(error.message);
      } else {
        setError("An unexpected error occured.");
      }

      }
      

    return (

        <form onSubmit={handleSubmit} className='p-3 w-full my-auto min-h-[400px] transition-all flex max-w-[615px] mx-auto flex-col rounded-md bg-dark-gray'>
              {Ready ? null : renderLoading()}
            <PaymentElement onReady={pp} id='payment-element' className="mt-3 px-[2px]" id="card-element" onChange={handleChange}/>
            <button className="bg-strip-blue text-white mb-0 mt-5 rounded-md p-2" disabled={isLoading || !stripe || !elements} id="submit">
              <span id="button-text">
                {isLoading ? <div className="spinner" id="spinner">Hi</div> : "Zapłać teraz"}
              </span>
            </button>
            <div role="alert">{error}</div>
            {/* <button className="bg-white" onClick={Send}>SEND</button> */}
            <div>{message}</div>
        </form>


    )

}