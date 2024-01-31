import React from 'react'
import '../designs/css/main.css'
import Header from '../Component/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import Footer from '../Component/Footer'

export default function SignIn(){

const LoginButton = () => {
    const dispatch = useDispatch();

    const handleLogin = () => {
        dispatch(loginRequest());
    };
    return(
        <>
        <Header/>
        <main className="main bg-dark">
            <section className="sign-in-content">
                <FontAwesomeIcon icon={faUserCircle} />
                <h1>Sign In</h1>
                <form>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me"/>
                        <label htmlFor="remember-me"> Remember me</label>
                    </div>
                    <button onClick={handleLogin} className="sign-in-button">Sign In</button>
                </form>
            </section>
        </main>
        <Footer/>
        </>
    )
}}
