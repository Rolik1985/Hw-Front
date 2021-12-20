import React from "react";
import logo1 from "../../img/logo.png"
import './header.css'

 function Header(){
     return(
         <>
         <div className = 'wraper'>
            <img src ={logo1} alt="logo"></img>
            <input className ="input_header" type="text" placeholder="Вкажіть Ваше місто..."></input>
            <button className ="btn_heder" type="button" aria-label="Увійти">Увійти</button>
            <button className ="btn_heder btn_grin" type="button" aria-label="Кошик">Кошик</button>
         </div>
         <hr/>
         <div className="header_title">
                <h1>Ситий Кум</h1>
            </div>
         </>
     )
 }
 export default Header;