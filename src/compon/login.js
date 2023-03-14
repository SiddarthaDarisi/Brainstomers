import React, { useState, useEffect } from 'react';
import { Auth, Hub } from "aws-amplify"
import { Navigate } from 'react-router';
import { Authenticator } from '@aws-amplify/ui-react';
function Login() {

  const [signedUser, setSignedUser] = useState(false);
  useEffect(() => {
    authListener()
  }, [])
  async function authListener() {
    Hub.listen("auth", (data) => {
      switch (data.payload.event) {
        case 'signIn':
          return setSignedUser(true);

        case 'signOut':
          return setSignedUser(false);


      }
    })

    try {
      await Auth.currentAuthenticatedUser()
      setSignedUser(true)
    } catch (err) { }
  }

  return (
    <div style={{ padding: 100 }}>

      <Authenticator>
        (<Navigate to="/Dashboard" />)
      </Authenticator>
    </div>// your login form code here
  );

}
export default (Login);