import React from 'react';

import './header.scss';

export default function Header(){
    return(
        <div class="header">
            <div class="header-container">
                <div class="left">
                    <div class="logo-box">
                        FODE 9
                    </div>
                    <div class="search-box">
                        <input type="text" placeholder="bate tua bronha aí..." class="search-input" />
                        <input type="submit" value="Pesquisar"/>
                    </div>
                </div>
                <div class="right">
                    <div class="account-box">
                        <p>Login</p>
                    </div>
                </div>
            </div>
        </div>
    )
}