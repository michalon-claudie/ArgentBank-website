import React from 'react'
import Header from '../Component/Header'
import Account from '../Component/Account'
import Footer from '../Component/Footer'

function User(){
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            fetchUserData(token);
        }
    }, []);
    const fetchUserData = async (token) => {
        try {
            const response = await fetch("http://localhost:3001/api/v1/user/profile", {
                method: "Post",
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
        <main class="main bg-dark">
            <div class="header">
                <h1>Welcome back<br />{userData.firstName + userData.lastName + "!"}</h1>
                <button class="edit-button">Edit Name</button>
            </div>
            <h2 class="sr-only">Accounts</h2>
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