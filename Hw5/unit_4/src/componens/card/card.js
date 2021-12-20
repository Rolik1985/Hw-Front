import React from "react";
import './card.css'
import data from "..//../data/menu.js"


function Card() {
    console.log(data);
   return(<>
   <div className ="bloc-info">
   {data.map((elem )=>{
       return(
        <article className = 'card'>
           <img className ="card-img" src = {elem.productImageUrl}></img>
           <p className ="card-text">{elem.productName}</p>
           <p>{elem.ingredients}</p>
        </article> )

   })}
   </div>
        
   </>) 
}

export default Card