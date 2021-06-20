import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from './firebase.config';
import google from '../../icons/google.svg';
import './Login.css';
import { useHistory, useLocation } from 'react-router';
import GlobalContext from '../../context/GlobalContext';
import { setLoggedInUser, showLoggedInToast } from '../../context/actions';
import { toast } from 'react-toastify';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {

    const { dispatch } = useContext(GlobalContext);

    const notifyOnLogIn = () => toast('User successfully logged in');

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const handleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const user = result.user;
                const userInfo = {
                    name: user.displayName,
                    email: user.email,
                    img: user.photoURL
                }
                dispatch(setLoggedInUser(userInfo));
                dispatch(showLoggedInToast());
                notifyOnLogIn();
                history.replace(from);
            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }

    return (
        <section className='mx-auto padding-big text-center login'>
            <h2 className='py-4 px-2'>Sign in with your Google account</h2>
            <button className='btn btn-primary rounded rounded-pill py-2 px-3' onClick={handleSignIn}>
                <img style={{ width: '25px', height: '25px' }} className='mr-5' src={google} alt="google" />
                Sign in with Google
            </button>
        </section>
    );
};

export default Login;