import React,{ useEffect, useState } from "react"
import {
    NavLink,
    useNavigate
} from "react-router-dom";
import { 
    createUserWithEmailAndPassword
    ,signInWithEmailAndPassword
    ,GoogleAuthProvider
    ,signInWithPopup
    ,signInWithRedirect
       } 
    from "firebase/auth";
import {auth} from '../api';
import { FcGoogle } from "react-icons/fc";
import { IoMdCheckmark } from "react-icons/io";
import { FaXmark } from "react-icons/fa6";


export default function SinglePageLog({title,login,description,navText,hidePassword}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [match, setMatch] = useState("");
    const navigate = useNavigate();
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState({
        minValueValidation: false,
        numberValidation: false,
        capitalLetterValidation: false,
        specialCharacterValidation: false,
      });
      const validatePassword = (password) => {
        setErrors({
          minValueValidation: password.length >= 8,
          numberValidation: /\d/.test(password),
          capitalLetterValidation: /[A-Z]/.test(password),
          specialCharacterValidation: /[^A-Za-z0-9]/.test(password),
        });
      }
      const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        validatePassword(newPassword);
      };
    async function googleLoginDeskTop() {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider).then(async () => {
         navigate("/host")  })
       
        }
    async  function googleLoginMobile() {
           const provider = new GoogleAuthProvider();
            signInWithRedirect(auth, provider).then(async () => {
            navigate("/host")  })
            }
         
    const handleSingUp= async (e) => {
        e.preventDefault();
        if(password!=match) {
            setError("Passwords are not matched")
            return
        } else setError("")
        try {
            setLoading(true)
            if(Object.values(errors)===true)
           {
                await createUserWithEmailAndPassword(auth, email, password);
                 navigate('/login')
                    
            }
        } catch (error) {
          setLoading(false)
          setError(error.message)
         
        }} 
    const handleLogIn = async (e) => {
            e.preventDefault();
            try {
              setLoading(true)
              await signInWithEmailAndPassword(auth, email, password);
              navigate("/host")
              
            } catch (error) {
              setLoading(false)
              setError(error.message)
            }
          };
    const togglePassword = document.querySelector("#togglePassword");
    const pass = document.querySelector("#password");
    
    useEffect(()=>{
            togglePassword?.addEventListener("click", function () {
                    const type = pass.getAttribute("type") === "password" ? "text" : "password";
                    pass.setAttribute("type", type);
                    this.classList.toggle("bi-eye");});
        },[togglePassword])        
   
    return (
        <div className="login-container">
            <h1>{title}</h1>
            {error && <h3 className="red" aria-live="assertive">{error}</h3>}

            <form className="login-form"  onSubmit={login?handleLogIn:handleSingUp}>
                <input
                    name="email"
                    type="email"
                    placeholder="Email address"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={handlePasswordChange}
                    required
                />
        
                {hidePassword&&<i className="bi bi-eye-slash" id="togglePassword"></i>}
                {!login&&
                 <input
                    name="match-password"
                    type="password"
                    placeholder="Confirm Your Password"
                    onChange={(e) => setMatch(e.target.value)}
                    required
                />}
                {!login&&Object.entries(errors).map(([key, value]) => (
                    <div key={key} className={`flex ${value?"green":" red"}`}>
                    {value ? (
                        <IoMdCheckmark />
                    ) : (
                        <FaXmark />
                    )}
                    <p >
                        {key === 'minValueValidation' && 'Password must be at least 8 Characters'}
                        {key === 'numberValidation' && 'Password must have at least one Number'}
                        {key === 'capitalLetterValidation' && 'Password must have at least one Capital Letter'}
                        {key === 'specialCharacterValidation' && 'Password must have at least one Special Character'}
                    </p>
                    </div>))
                }
                {login &&<button disabled={loading}>
                    {loading?"logging in":"Log In"}
                </button>}
                {!login&&
                <button disabled={loading}>
                    {loading?"Sumbitting":"Sumbit "}
                </button>
                }
                <p>{description}</p>
                <NavLink to={login?"/signup":"/login"}>{navText}</NavLink>
                {login &&<>
                <div>
                    or Contiune With
                    <button id="google-signin-desktop"
                    onClick={googleLoginDeskTop}> <FcGoogle />oogle
                    </button>
                    <button id="google-signin-mobile"
                    onClick={googleLoginMobile}> <FcGoogle />oogle
                    </button>
                </div>
                </>}
            </form>
        </div>
    )
}
