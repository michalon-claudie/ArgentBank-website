import React, {useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux"
import Header from '../Component/Header'
import UserNameButton from '../Component/UserNameButton';
import Account from '../Component/Account'
import Footer from '../Component/Footer'
import { setGetProfile } from '../Redux/Reducers/ProfileSlice';

function User(){
    const profile = useSelector((state) => state.profile)
    const token = useSelector(state => state.auth.token);
    const dispatch = useDispatch()

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
            dispatch(setGetProfile({data}));
        } catch (error) {
            console.log(error);
        }
    }
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