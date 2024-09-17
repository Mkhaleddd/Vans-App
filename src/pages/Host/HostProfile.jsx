import React from 'react'
import { sendPasswordResetEmail} from "firebase/auth";
import {auth} from '../../api';
import { useNavigate } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HostProfile = () => {
    const navigatet=useNavigate()
    const  resetPassword=async()=>{
        try{
            if(auth.currentUser){
           await sendPasswordResetEmail(auth,auth.currentUser.email).then(()=>{
               navigatet("/login",{replace:true})
           })}
        }
        catch(err){
          Error(err)
        }
         }
         const Error=(text)=>{
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
  return (
    <>
    <div className="reset-password-contaier">
            <h3> Reset your password in your email account</h3>
            <span>Email:{auth.currentUser.email}</span>
            <span></span>
            <button onClick={()=>resetPassword()}  className='link-button'>Reset Password</button>
    </div>
    <ToastContainer />
    
    </>
  )
}

export default HostProfile