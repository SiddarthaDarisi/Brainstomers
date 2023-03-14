
import React from 'react';
import { Auth } from 'aws-amplify';
import Navbar2 from './Navbar2';
import { withAuthenticator } from "@aws-amplify/ui-react";
import CheckSignin from './CheckSignin';
async function signOut() {
    try {
        await Auth.signOut();
    } catch (error) {
        console.log('error signing out: ', error);
    }
}

async function checkUser() {
    let user = await Auth.currentUserInfo();
    alert(user)
    console.log(user, "hi")

}

function Dashboard({ logout }) {


    console.log()
    return (

        <div>

            <Navbar2 />
            <h1>hi</h1>
            <button onClick={signOut}>Signout</button>
            <CheckSignin />
        </div>
    );

}
export default Dashboard;