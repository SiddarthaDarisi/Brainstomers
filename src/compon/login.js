import { Authenticator } from '@aws-amplify/ui-react';
import { Navigate } from "react-router-dom";

function Login() {

  return (
    <div style={{ padding: 100 }}>

      <Authenticator>
        <Navigate to="/dashboard" />
      </Authenticator>
    </div>// your login form code here
  );

}
export default (Login);