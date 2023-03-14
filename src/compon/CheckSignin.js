//write a simple page
import React, { useState, useEffect } from 'react';
import { Auth, Hub } from "aws-amplify"
import { Navigate } from 'react-router';
const CheckSignin = () => {

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
        <>
            {!signedUser && (<Navigate to="/login" />)}
        </>
    )

}
export default CheckSignin;