import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
//import { Button } from "react-bootstrap";

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
    return(
        <button
         onClick={() => loginWithRedirect()}
         //id="qsLoginBtn"
         //variant="primary"
         //className="btn-margin"
         style={{ 
            backgroundColor: 'RoyalBlue',
            color: 'white',
            padding: '0px 10px 0px',
            borderRadius: '30px',
            border: 'none',
            boxShadow: 'none',
            cursor: 'pointer',
            fontSize: '16px',
            fontWegiht: 'bold',
        }}
        >
         Login
        </button>
    );
};

export default LoginButton;