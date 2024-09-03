import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';

export const Referral = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_8tan0jb", "template_pwpbnbr", form.current, {
        publicKey: 'Sy5KpsogNlOvR7R2s',
      })
      .then(
        () => {
          toast.success("Email Sent", {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light"
        })
        },
        (error) => {
          toast.error(error.text, {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light"
        })}
      );
  };

  return (
    <>
        <div className="grid-container">
        <div class="grid">
            <div class="card">   
                <h4>+10%</h4>
                <p>
                When Car Is Live
                You get a $200 bonus when your friend becomes a host and list their first car.
                </p>
                <div class="shine"></div>
                <div class="background">
                <div class="tiles">
                    <div class="tile tile-1"></div>
                    <div class="tile tile-2"></div>
                    <div class="tile tile-3"></div>
                    <div class="tile tile-4"></div>

                    <div class="tile tile-5"></div>
                    <div class="tile tile-6"></div>
                    <div class="tile tile-7"></div>
                    <div class="tile tile-8"></div>

                    <div class="tile tile-9"></div>
                    <div class="tile tile-10"></div>
                </div>

                <div class="line line-1"></div>
                <div class="line line-2"></div>
                <div class="line line-3"></div>
                </div>
            </div>
            <div class="card">
                <h4>+25%</h4>
                <p>
                    Referred Host Earnings
                    You'll also get the equivalent of 25% of your friend's earnings for their first 60 days after listing a car.
                </p>
                <div class="shine"></div>
                <div class="background">
                <div class="tiles">
                    <div class="tile tile-1"></div>
                    <div class="tile tile-2"></div>
                    <div class="tile tile-3"></div>
                    <div class="tile tile-4"></div>

                    <div class="tile tile-5"></div>
                    <div class="tile tile-6"></div>
                    <div class="tile tile-7"></div>
                    <div class="tile tile-8"></div>

                    <div class="tile tile-9"></div>
                    <div class="tile tile-10"></div>
                </div>

                <div class="line line-1"></div>
                <div class="line line-2"></div>
                <div class="line line-3"></div>
                </div>
            </div>
        </div>
        <form ref={form} onSubmit={sendEmail} className='referral-form'>
        <h3>Refer A Friend</h3>
        <span>Input Your Information To Get Your Referral Link Or Submit A Referee.</span>
        <input type="text" name="to_name" id="to_name" placeholder='Name'/>
        <input type="text" name="email" id="email"  placeholder='Email' required/> 
        <input type="submit" value="Refer a Friend" />
        </form>
        <ToastContainer />
        </div>
        
    </>
  );
};
export default Referral