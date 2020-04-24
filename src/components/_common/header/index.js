import React from 'react';

import './style.scss';

export default function Header(){
    return(
        <div className="header">
            <div className="header-container">
                <div className="left">
                    <div className="logo-box">
                        FODE 9
                    </div>
                    <div className="search-box">
                        <input type="text" placeholder="bate tua bronha aí..." className="search-input" />
                        <input type="submit" value="Pesquisar"/>
                    </div>
                </div>
                <div className="right">
                    <div className="account-box">
                        <p>Login</p>
                    </div>
                </div>
            </div>
        </div>
    )
}