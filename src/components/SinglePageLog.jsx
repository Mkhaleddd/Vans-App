import React,{ useState } from "react"
import {
    NavLink,
    useNavigate
} from "react-router-dom";
import { createUserWithEmailAndPassword
    ,signInWithEmailAndPassword
    ,GoogleAuthProvider
    ,signInWithPopup
    ,signInWithRedirect } 
    from "firebase/auth";
import {auth} from '../api';
import { FcGoogle } from "react-icons/fc";

export default function SinglePageLog({title,login,description,navText}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [match, setMatch] = useState("");
    const navigate = useNavigate();
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    
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
        }
        try {
            setLoading(true)
          await createUserWithEmailAndPassword(auth, email, password);
          navigate('/login')
          ;
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
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />{!login&&
                 <input
                    name="match-password"
                    type="password"
                    placeholder="Confirm Your Password"
                    onChange={(e) => setMatch(e.target.value)}
                    required
                />}
                {login &&<button disabled={loading}>
                    {loading?"logging in":"Log In"}
                </button>}
                {!login&&
                <button disabled={loading}>
                    {loading?"Sumbitting":"Sumbit "}
                </button>
                }
                <p>{description}</p><NavLink to={login?"/signup":"/login"}>{navText}</NavLink>
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
