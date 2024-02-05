import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux"
import argentBankLogo from '../designs/img/argentBankLogo.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import {logout} from '../Redux/Reducers/AuthReducers'

function Header(){
    const token= useSelector(state=>state.auth.token)
    const dispatch= useDispatch()

    const handleLogout = () => {
        dispatch(logout());
    };
    return(
    <nav className="main-nav">
        <Link to="/" className="main-nav-logo">
            <img className="main-nav-logo-image" src={argentBankLogo} alt="Argent Bank Logo"/>
            <h1 className="sr-only">Argent Bank</h1>
        </Link>
        {token ?(
        <Link to="/sign-in" className="main-nav-item" onClick={handleLogout}>
        <FontAwesomeIcon icon={faUserCircle} />Sign Out
        </Link>) : (
            <Link to="/sign-in" className="main-nav-item">
            <FontAwesomeIcon icon={faUserCircle} />Sign In
        </Link>
        )}
    </nav>
    )
}

export default Header;