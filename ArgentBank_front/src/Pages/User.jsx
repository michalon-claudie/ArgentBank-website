import React, {useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux"
import {useNavigate} from 'react-router-dom'
import Header from '../Component/Header'
import UserNameButton from '../Component/UserNameButton';
import Account from '../Component/Account'
import Footer from '../Component/Footer'
import { fetchUserData } from '../Redux/Api/userApi';

function User(){
    const profile = useSelector((state) => state.profile)
    const token = useSelector(state => state.auth.token);
    const dispatch = useDispatch()
    const navigate = useNavigate();
    console.log(token) ; 

    useEffect(() => {
        if (token) {
            fetchUserData(token, dispatch, navigate); 
        } else {
            navigate('/sign-in');
        }
    }, [dispatch, navigate, token]);

    
    return(
        <>
        <Header/>
        <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back<br />{profile.firstName +""+ profile.lastName + "!"}</h1>
                <p>Username:{profile.userName}</p>
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