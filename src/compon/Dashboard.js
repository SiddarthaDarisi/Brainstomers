
import React from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';
import Navbar2 from './Navbar2';
import CheckSignin from './CheckSignin';
async function signOut() {
    try {
        await Auth.signOut({ global: true });
    } catch (error) {
        console.log('error signing out: ', error);
    }
}


async function checkUser() {
    let user = await Auth.currentUserInfo();


}

function Dashboard({ logout }) {


    console.log()
    return (

        <div>


            <Navbar2 />
            <h1>hi</h1>
            <button onClick={signOut}>Signout</button>

        </div>
    );

}
export default (Dashboard);