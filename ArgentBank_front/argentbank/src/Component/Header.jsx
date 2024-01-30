import React from 'react'
import { Link } from 'react-router-dom';
import argentBankLogo from '../designs/img/argentBankLogo.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

function Header(){
    return(
    <nav className="main-nav">
        <Link to="/" className="main-nav-logo">
            <img className="main-nav-logo-image" src={argentBankLogo} alt="Argent Bank Logo"/>
            <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <Link to="/sign-in" class="main-nav-item">
        <FontAwesomeIcon icon={faUserCircle} />Sign In
        </Link>
    </nav>
    )
}

export default Header;