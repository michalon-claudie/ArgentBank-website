import React, {useEffect} from 'react'
import {useState} from 'react'
import { useSelector } from 'react-redux';
import Header from '../Component/Header'
import UserNameButton from '../Component/UserNameButton';
import Account from '../Component/Account'
import Footer from '../Component/Footer'

function User(){
    const [userData, setUserData] = useState(null);
    const token = useSelector(state => state.auth.token);

    useEffect(() => {
        if (token) {
            fetchUserData(token);
        }
    }, []);
    const fetchUserData = async (token) => {
        try {
            const response = await fetch("http://localhost:3001/api/v1/user/profile", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });
            const data = await response.json();
            setUserData(data);
        } catch (error) {
            console.log(error);
        }
    }
    return(
        <>
        <Header/>
        <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back<br />{userData?.firstName} {userData?.lastName}!</h1>
                <UserNameButton/>
            </div>
            <h2 className="sr-only">Accounts</h2>
            <Account
            title={'Argent Bank Checking (x8349)'}
            amount={'$2,082.79'}
            description={'Available Balance'}/>
            <Account
            title={'Argent Bank Savings (x6712)'}
            amount={'$10,928.42'}
            description={'Available Balance'}/>
            <Account
            title={'Argent Bank Credit Card (x8349)'}
            amount={'$184.30'}
            description={'Available Balance'}/>
        </main>
        <Footer/>
        </>
    )
}

export default User;