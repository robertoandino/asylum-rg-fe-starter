import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const ProfilePage = () => {

  const { user } = useAuth0();

  return (
    <div style={{ textAlign: 'center', margin: '20px', marginTop: '80px', marginBottom: '510px'}}>
      <h1>Profile Page</h1>
      
      {user && user.picture && (
        <img 
          src={user.picture}
          alt="Profile"
          style={{ borderRadius: '50%', width: '200px', height: '200px', objectFit: 'cover'}}
        />
      )}
      
      {user ? (
        <>
          <h2>{user.nickname}</h2>
          <p>{user.email}</p>
        </>
      ) : (
        <p>No user information available</p>
      )}
  
    </div>
  );
};

export default ProfilePage;
