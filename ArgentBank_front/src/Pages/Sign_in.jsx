import React from 'react'
import '../designs/css/main.css'
import Header from '../Component/Header'
import {Link} from 'react'
import Footer from '../Component/Footer'

function SignIn(){
    /*const signInFetch = */
    return(
        <>
        <Header/>
        <main className="main bg-dark">
            <section class="sign-in-content">
                <i class="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form>
                    <div class="input-wrapper">
                        <label for="username">Username</label>
                        <input type="text" id="username" />
                    </div>
                    <div class="input-wrapper">
                        <label for="password">Password</label>
                        <input type="password" id="password" />
                    </div>
                    <div class="input-remember">
                        <input type="checkbox" id="remember-me"/>
                        <label for="remember-me"> Remember me</label>
                    </div>
                    <Link to="/User" class="sign-in-button">Sign In</Link>
                </form>
            </section>
        </main>
        <Footer/>
        </>
    )
}

export default SignIn;