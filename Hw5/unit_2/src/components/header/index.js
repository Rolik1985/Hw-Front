import React from "react";
import './header.css';

function Header(){
    return (
        <>
        <div className = 'header-menu'>
            <ul className = 'menu'>
                <li className="main-menu"><a href='#'>О компании</a></li>
                <li className="main-menu "><a href='#'>История</a></li>
                <li className="main-menu"><a href='#'>Достижения</a></li>
                <li className="main-menu main-menu-active"><a href='#'>Сотрудники</a></li>
            </ul>
        </div>
        </>
    )
}
export default Header;