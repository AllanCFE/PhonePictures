import React from 'react';
import './Header.css'

export default () => {
    return (
        <header>
            <div className="header--left">
                <div>
                    <a href="/">
                        <img src="https://i.imgur.com/938Si3e.png" alt="logo" className="header--logo"/>
                    </a>
                </div>
            </div>
            <div className="header--right">
                <div className="header--spotlight">
                    <a href="/">Lancamentos</a>
                </div>
                <div className="header--last">
                    <a href="/">Filmes</a>
                </div>
                <div className="header--profiles">
                    <a href="/">Diretores</a>
                </div>
            </div>
        </header>
    );
}