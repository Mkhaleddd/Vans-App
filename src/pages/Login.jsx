import React ,{useState,useContext}from "react"
import {NavLink,useNavigate} from "react-router-dom"
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../api";


export default function Login() {

  const navigate = useNavigate();
    const [error, setError] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await signInWithEmailAndPassword(auth, email, password);
        navigate("/host")
        
      } catch (error) {
        setError(error.message)
      }
    };
  
   
   
    
    return (
        <div className="login-container">
            <h1>Sign in to your account</h1>
            {error && <h3 className="red" aria-live="assertive">{error}</h3>}

            <form className="login-form" onSubmit={handleSubmit}>
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
                <button
                  
                >
                    login
                </button>
                <p>Don't have an Account?</p><NavLink to="/signup">Sign Up</NavLink>
            </form>
        </div>
    )
}
