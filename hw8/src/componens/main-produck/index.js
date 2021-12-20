import React from "react";
import './produckt.css'
import Img1 from '../../img/graphic.png'

function Produckt(){
    return(
        <>
        <div className="produckt">
                <div className ='main-elem elem-product'>
                    <h4>Product Statistic</h4>
                    <p>Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam<br/> no suscipit quaerendum. At nam minimum ponderum. Est audiam<br/> animal molestiae te. Ex duo eripuit mentitum.</p>
                    <button className="btn-prod">Learn More</button>
                </div>
                <div className = 'main-item'>
                    <img src ={Img1}></img> 
                </div>
        </div>
        </>
    )
}
export default Produckt