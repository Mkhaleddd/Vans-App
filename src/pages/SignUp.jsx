import React from "react";
import SinglePageLog from "../components/SinglePageLog"; 

export default function SignUp() {
  
    return (
        <SinglePageLog  
        title={"Create an Account"}
        login={false}
        description={"Have an Account already?"}
        navText={"Log In"}
        />
    )
}
