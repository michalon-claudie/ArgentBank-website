import React from 'react'
import Header from '../Component/Header'
import Account from '../Component/Account'
import Footer from '../Component/Footer'

function User(){
    return(
        <>
        <Header/>
        <main class="main bg-dark">
            <div class="header">
                <h1>Welcome back<br />Tony Jarvis!</h1>
                <button class="edit-button">Edit Name</button>
            </div>
            <h2 class="sr-only">Accounts</h2>
            <Account
            title={'Argent Bank Checking (x8349)'}
            amount={'$2,082.79'}
            description={'Available Balance'}/>
        </main>
        <Footer/>
        </>
    )
}

export default User;