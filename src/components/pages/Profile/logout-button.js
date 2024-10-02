import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
//import { Button } from "react-bootstrap";

const LogoutButton = () => {
    const { logout } = useAuth0();
    return(
        <button
         onClick={() => logout()}
         //id="qsLogoutBtn"
         //variant="danger"
         //className="btn-margin"
         style={{ 
            backgroundColor: 'Red',
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
         LogOut
        </button>
    );
};

export default LogoutButton;