import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Footer from '../Shared Pages/Footer/Footer';
import Header from '../Shared Pages/Header/Header';
import './Login.css'

const Login = () => {
    const google = <FontAwesomeIcon icon={faGoogle} />;
    const { user, handleGoogleSignIn, setError } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';
    const loginGoogle = () => {
        handleGoogleSignIn()
            .then((result) => {
                const user = result.user;
                console.log(user);
                history.push(redirect_uri);

            }).catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            });
    }
    return (
        <div className="login-container">
            <Header></Header>
            <div className="solo-container text-center">
                <div className="login-bar">
                    <h2 className="text-white mb-5">
                        Login with Your Gmail here..
                    </h2>
                    <button type="button" onClick={loginGoogle} className="btn btn-light">{google} Sign In With Google</button>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;