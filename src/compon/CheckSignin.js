//write a simple page
import React, { useState, useEffect } from 'react';
import { Auth, Hub } from "aws-amplify"
import { Navigate } from 'react-router';
const CheckSignin = () => {

    const [signedUser, setSignedUser] = useState(true);
    useEffect(() => {
        async function authListener() {
            Hub.listen("auth", (data) => {
                if (data.payload.event === 'signIn')
                    setSignedUser(true);
                else if (data.payload.event === 'signOut')
                    setSignedUser(false);
            });
            try {
                await Auth.currentAuthenticatedUser();
                setSignedUser(true);
            } catch (err) { }
            return () => {
                Hub.remove("auth");
            };
        }
        authListener();
    }, [signedUser]);

    return (
        <>
            {!signedUser && (<Navigate to="/login" />)}
        </>
    )

}
export default CheckSignin;