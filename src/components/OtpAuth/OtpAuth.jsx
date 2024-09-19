import React, { useState, useEffect } from 'react';
import { CgSpinner } from 'react-icons/cg';
import OtpInput from 'otp-input-react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { auth } from '../../api'; // Ensure this path is correct
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import styles from './OtpAuth.module.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const OtpAuth = () => {
  const [otp, setOtp] = useState('');
  const [ph, setPh] = useState('');
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        size: 'normal',
        callback: () => {},
      });
    }
  }, []);

  const onSignup = () => {
    setLoading(true);
    setError(''); // Clear any previous error

    const appVerifier = window.recaptchaVerifier;
    const formatPh = `+${ph}`;

    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOTP(true);
      })
      .catch((error) => {
        setError(`Failed to send OTP. Please try again. ${error.message}`);
        toast.error(error.message, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setLoading(false);
      });
  };

  const onOTPVerify = () => {
    setLoading(true);
    setError(''); // Clear any previous error

    window.confirmationResult
      .confirm(otp)
      .then(() => {
        setLoading(false);
        toast.success('Phone number verified successfully!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((err) => {
        setError(`Invalid OTP. Please try again. ${err.message}`);
        toast.error(err.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setLoading(false);
      });
  };

  return (
    <section className={styles.container}>
      <div className={styles.card}>
        <div id="recaptcha-container" className={styles.recaptchaContainer}></div>
        <div className={styles.flexCol}>
          {showOTP ? (
            <>
              <div className={styles.otpInput}>
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  OTPLength={6}
                  otpType="number"
                  autoFocus
                  className={styles.otpContainer}
                />
              </div>
              <button
                onClick={onOTPVerify}
                className={styles.button}
                disabled={loading}
              >
                {loading && <CgSpinner size={20} className={styles.spinner} />}
                <span>Verify OTP</span>
              </button>
            </>
          ) : (
            <>
              <PhoneInput country="eg" value={ph} onChange={setPh} className={styles.phoneInput} />
              <button
                onClick={onSignup}
                className={styles.button}
                disabled={loading}
              >
                {loading && <CgSpinner size={20} className={styles.spinner} />}
                <span>Send code via SMS</span>
              </button>
              {error && <p className={styles.errorMessage}>{error}</p>}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default OtpAuth;
