import { withAuthenticator } from '@aws-amplify/ui-react';
import { Navigate } from "react-router-dom";

function Login() {

  return (
    <>
      <Navigate to="/dashboard" />
    </>// your login form code here
  );

}
export default withAuthenticator(Login);