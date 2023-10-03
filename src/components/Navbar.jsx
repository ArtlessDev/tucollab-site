import React from 'react';
import '../stylesheets/header.css'
import Navlist from './Navlist';
import Dropdown from './Dropdown';

function Navbar() {

    let scr = window.innerWidth;
    
    console.log(scr)
    if(scr < 1000){
        return (
            <div>
                <nav className="navbar navbar-expand-lg bg-dark" id="nav">
                    <a href="https://tucollaborative.org/" id="logo">
                        <img src="https://tucollaborative.org/wp-content/uploads/2023/03/logo_header.png" alt="Home" />
                    </a>
                    <Dropdown/>
                </nav>
            </div>
        );
    }

    return (
        <div>
            
            <nav className="navbar navbar-expand-lg bg-dark" id="nav">
                <a href="https://tucollaborative.org/" id="logo">
                    <img src="https://tucollaborative.org/wp-content/uploads/2023/03/logo_header.png" alt="Home" />
                </a>
                <Navlist/>
            </nav>
        </div>
    );
}

export default Navbar