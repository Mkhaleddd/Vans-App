import React from "react";
import SinglePageLog from "../components/SinglePageLog"; 


export default function Login() {

    return (
       <SinglePageLog 
       title={"Create an Account"}
       login={true}
       description={"Don't have an account?"}
       navText={"Sing Up"}
       hidePassword={true}
       />
    )
}
