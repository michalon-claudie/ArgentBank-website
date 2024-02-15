import React,{useState} from 'react'
import '../designs/css/main.css'
import Header from '../Component/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import TextArea from '../Component/TextArea'
import Button from '../Component/Button';
import Footer from '../Component/Footer'
import { FetchHandleLogin } from '../Redux/Api/userApi';

export default function SignIn(){

const dispatch = useDispatch();
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [checkBox, setCheckBox] = useState(false)

const navigate=useNavigate();

const handleSubmit = async (e) => {
    e.preventDefault();
    await FetchHandleLogin(email, password, dispatch, navigate);
}
    
    return(
        <>
        <Header/>
        <main className="main bg-dark">
            <section className="sign-in-content">
                <FontAwesomeIcon icon={faUserCircle} />
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                <TextArea
                    className="input-wrapper"
                    label="E-mail"
                    id="email"
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}/>
                <TextArea
                    className="input-wrapper"
                    label="Password"
                    id="password"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}/> 
                <TextArea
                    className="input-remember"
                    label="Remember me"
                    id="remember-me"
                    type="checkbox"
                    onChange={() => setCheckBox(!checkBox)} />   
                <Button
                    className="sign-in-button"
                    buttonText="Sign-in">
                </Button>
                </form>
            </section>
        </main>
        <Footer/>
        </>
    )
}
