import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdOutlineLocationOn,MdDateRange  } from "react-icons/md";
import { useNavigate } from 'react-router';


export default function BookingCard({price}) {
    const navigate = useNavigate();
    const notifyBookingError=(text)=>{
        toast.error(text, {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light"
        })
    }
    const handleBook=()=>{
        let location=new Date(document.getElementById("location")?.value);
        let pickup = document.getElementById("pickup")?.value;
        let pickupDate = new Date(pickup);//dd-mm-YYYY
        let dropoff = document.getElementById("dropoff")?.value;
        let dropoffDate = new Date(dropoff);//dd-mm-YYYY
        let today = new Date();
        let pickupTime=document.getElementById("pickup-time")?.value;
        let dropoffTime=document.getElementById("dropoff-time")?.value;
        
        if(!location||!pickup||!dropoff||!dropoffTime||!pickupTime) notifyBookingError("Add missing Input")
        if( today>=pickupDate ) {
        notifyBookingError("Date can not exist in the past")
        }
        if(pickupDate>=dropoffDate){
        notifyBookingError("Drop-Off can not be at the same the Pick Up day ") 
        }
        if(pickupTime&&dropoffTime&&dropoffDate>pickupDate&&pickupDate>today) {
        const success=()=>toast.success('Successful Booking', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        })
        success()
        navigate("../vans/booking")
    }}
    
    return (
        <>
        <div className="rent-form start">
            <div className="flex">
                <MdOutlineLocationOn />
                <label htmlFor="location">Location</label>
                
            </div>
            <input type="text" name="loaction" id="location" />   
            <div className="flex">
            <MdDateRange />
             <label htmlFor="pickup">Pick-Up</label>
            </div> 
            <div className="flex">
             <input type="date" name="pickup-day" id="pickup" />
             <input type="time" name="pickup-time"  id='pickup-time'/>   
            </div>
             <div className="flex">
                <MdDateRange />
                <label htmlFor="dropoff">Drop-Off</label>
             </div>
            <div className="flex">
              <input type="date" name="dropff-day" id="dropoff" />
              <input type="time" name="dropoff-time" id='dropoff-time' />  
            </div>
          <span className='price-box'>Rent price${price}</span>
          <button className="link-button" 
          onClick={handleBook} 
          >
                Book the van
         </button>
         <ToastContainer />
        </div>
    </>
  );
}