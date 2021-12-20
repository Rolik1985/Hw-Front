import React from "react";
import "./main.css"
import Card from "../card/card";
 function Main (){
     return(
         <>
         <div className = 'main'>
             <div className ="main-menu">
                 <div className ="nav">
                    <ul className="menu-about">
                        <li><a href="#">Акції</a></li>
                        <li><a href="#">Бургери</a></li>
                        <li><a href="#">Курка</a></li>
                        <li><a href="#">Десерти</a></li>
                        <li><a href="#">Напої</a></li>
                        <li><a href="#">Соуси</a></li>
                    </ul>
                 </div>
                 <h2>Акції</h2>
                 {/* <Card/> */}
             </div>

         </div>
         </>
     )
 }
 export default Main