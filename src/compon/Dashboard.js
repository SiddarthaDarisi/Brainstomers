
import React from 'react';
import { Auth } from 'aws-amplify';
import { withAuthenticator } from "@aws-amplify/ui-react";
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
            <h1>hi</h1>
            <button onClick={checkUser}>click here</button>
            <button onClick={signOut}>Signout</button>
        </div>
    );

}
export default withAuthenticator(Dashboard);