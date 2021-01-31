import React from 'react';
import { NavLink } from 'react-router-dom'
import './Header.css'

export default () => {
    return (
        <header>
            <div className="header--left">
                <div>
                    <a href="/">
                        <img src="/logo.png" alt="logo" className="header--logo"/>
                    </a>
                </div>
            </div>
            <div className="header--right">
                <div className="header--home">
                    <NavLink to="/">HOME</NavLink>
                </div>
                <div className="header--directors">
                    <NavLink to="/directors">DIRETORES</NavLink>
                </div> 
                <div className="header--insta">
                    <a href="https://www.instagram.com/phonepicturesbrasil/" target="_blank" rel="noreferrer">INSTAGRAM</a>
                </div>
                <div className="header--face">
                    <a href="https://www.facebook.com/phonepicturesbrasil" target="_blank" rel="noreferrer">FACEBOOK</a>
                </div>
            </div>
        </header>
    );
}