import React,{useState} from 'react'
import '../designs/css/main.css'
import Header from '../Component/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { loginSuccess } from '../Redux/Reducers/AuthReducers';
import Footer from '../Component/Footer'

export default function SignIn(){

const dispatch = useDispatch();
const [username, setUsername] = useState('')
const [password, setPassword] = useState('')

const navigate=useNavigate();

const FetchHandleLogin = async(e) => {
    e.preventDefault()
    try{
        const response = await fetch ("http://localhost:3001/api/v1/user/login",{
        method: "POST",
        headers:{"Content-type" :"application/json"},
        body: JSON.stringify({email:username, password})
    })
    const data = await response.json()
    const token = data.body.token
    if(token){
    dispatch(loginSuccess({token}))
    localStorage.setItem('token', token)
    navigate("/user")
}

    }catch(error) {
        console.log(error)}
    }
    
    return(
        <>
        <Header/>
        <main className="main bg-dark">
            <section className="sign-in-content">
                <FontAwesomeIcon icon={faUserCircle} />
                <h1>Sign In</h1>
                <form onSubmit={FetchHandleLogin}>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" onChange={(e)=>setUsername(e.target.value)}/>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me"/>
                        <label htmlFor="remember-me"> Remember me</label>
                    </div>
                    <button className="sign-in-button">Sign In</button>
                </form>
            </section>
        </main>
        <Footer/>
        </>
    )
}
