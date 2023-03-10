import React, { useEffect } from 'react';
import Dashboard from './Dashboard';
import { withAuthenticator } from "@aws-amplify/ui-react";
import { Navigate } from 'react-router-dom';

const login = () => {

    return (
        <>

            <Dashboard />
        </>
    );

}
export default withAuthenticator(login);