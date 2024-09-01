import React, { useState } from 'react';
import { usePaymentInputs } from 'react-payment-inputs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router';


export default function BookingCard() {
const navigate = useNavigate();
  const { meta, getCardNumberProps, getExpiryDateProps, getCVCProps } = usePaymentInputs();
  const [cardInfo,setCardInfo]=useState({cardNumber:undefined,expiryDate:undefined,cvc:undefined});
  
  const notifyError = () =>{
    toast.error(meta.error, {
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light"
})}
const notifySuccess=()=>{
    toast.success('Enjoy your ride', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
}

  const handleChange=(e)=>{
    const {name,value}=e.target
    setCardInfo(prev=>{
        return{
            ...prev,[name]:value
        }})}
    const handleClick=()=>{
        meta.error?notifyError():notifySuccess()
        setTimeout(()=>{  
        if (!meta.error) navigate("/vans")
        },2000)
      }
    return (
        <>
    <div className='rent-form'>
      <span>Enter your Card information</span>
      <input className='card-number' {...getCardNumberProps({ onChange: handleChange })} value={cardInfo.cardNumber} />
      <div className="flex">
        <input className='expire-date'{...getExpiryDateProps({ onChange: handleChange })} value={cardInfo.expiryDate} />
        <input className='cvc' {...getCVCProps({ onChange: handleChange })} value={cardInfo.cvc} />
      </div>
      <button className="link-button" 
      onClick={handleClick} 
      disable={(
        cardInfo.cardNumber&&
        cardInfo.expiryDate&&
        cardInfo.cvc)}
      >
        Rent this van
    </button>
      <ToastContainer />
    </div>
    </>
  );
}