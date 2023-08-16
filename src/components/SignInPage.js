import React, { useEffect } from 'react';

import Dropdown from 'react-bootstrap/Dropdown';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { getAuth, EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';


import DEFAULT_USERS from '../data/users.json';

export default function SignInPage(props) {
    const firebaseUiConfig = {
        signInOptions: [
            {
                provider: EmailAuthProvider.PROVIDER_ID,
                requiredDisplayName: true
            },
            { provider: GoogleAuthProvider.PROVIDER_ID },
        ],
        signInFlow: 'popup', //don't redirect to authenticate
        credentialHelper: 'none', //don't show the email account chooser
        callbacks: { //"lifecycle" callbacks
            signInSuccessWithAuthResult: () => {
                return false; //don't redirect after authentication
            }
        }
    }

    useEffect(() => {

        const auth = getAuth();
        onAuthStateChanged(auth, (firebaseUserObj) => {
            console.log("auth state changed");
            const user = DEFAULT_USERS.filter((userObj) => {
                return userObj.userId === firebaseUserObj.displayName;
            })
            console.log(user);
            console.log(user[0].prescriptions);
            props.handleSetUserPrescriptions(user[0].prescriptions);
            const weeklyPills = { monday: [], tuesday: [], wednesday: [], thursday: [], friday: [], saturday: [], sunday: [] };
            user[0].prescriptions.forEach(pillObj => {
                pillObj.days.forEach(day => {
                    weeklyPills[day].push(pillObj)
                });
            });
            props.handleSetOrganizedPillbox(weeklyPills);
            props.handleSetUser(user[0]);
            if (user) {
                window.location = '/mypillbox'; //After successful login, user will be redirected to home.html
            }


        })


    }, [])





    return (
        <div className="card bg-light">
            <div className="container card-body">
                <p className="lead">Sign In</p>
                <StyledFirebaseAuth
                    firebaseAuth={getAuth()}
                    uiConfig={firebaseUiConfig}
                />
            </div>
        </div>
    )
}