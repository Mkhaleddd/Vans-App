import React,{ useContext, useState } from "react"
import {
    NavLink,
    useNavigate
} from "react-router-dom"
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../api'

export default function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [match, setMatch] = useState("");
  const navigate = useNavigate();
    const [error, setError] = useState("")
    const handleRegister = async (e) => {
        e.preventDefault();
        if(password!=match) {
            setError("Passwords are not match")
            return
        }
        try {
          await createUserWithEmailAndPassword(auth, email, password);
          navigate('/login')
          ;
        } catch (error) {
          setError(error.message)
         
        }}
    return (
        <div className="login-container">
            <h1>Create an account</h1>
            {error && <h3 className="red" aria-live="assertive">{error}</h3>}

            <form className="login-form"  onSubmit={handleRegister}>
                <input
                    name="email"
                    type="email"
                    placeholder="Email address"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                 <input
                    name="match-password"
                    type="password"
                    placeholder="Confirm Your Password"
                    onChange={(e) => setMatch(e.target.value)}
                    required
                />
                <button
                    
                >
                    sign up
                </button>
                <p>Already have an 
                    Account?</p><NavLink to="loginp">Sign In</NavLink>
            </form>
        </div>
    )
}
