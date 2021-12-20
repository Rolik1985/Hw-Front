import React from "react";
import Img1 from '../../img/desktop.png';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import KeyIcon from '@mui/icons-material/Key';
import ViewCozyIcon from '@mui/icons-material/ViewCozy';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import "./main-info.css"


 function ProducktInfo(){
     return(
            <>
            <div className ="main-contes">
                    <div className = 'info-img'>
                        <img src ={Img1}></img> 
                    </div>
                    <div className ='content-info'>
                        <div className ='main-elem-info'>
                            <BusinessCenterIcon/>
                            <h4>Store Integration</h4>
                            <p>Et has minim elitr intellegat. Mea<br/> aeterno eleifend antiopam ad,<br/> nam no suscipit quaerendum.</p>
                        </div>
                        <div className ='main-elem-info'>
                            <KeyIcon/>
                            <h4>Data Protection</h4>
                            <p>At nam minimum ponderum. Est<br/> audiam animal molestiae te. Ex<br/> duo eripuit mentitum.</p>
                        </div>
                        <div className ='main-elem-info'>
                            <ViewCozyIcon/>
                            <h4>Invoice Generator</h4>
                            <p> Vidisse oblique ei has, eos eu<br/>  atomorum erroribus cotidieque,<br/>  mazim postea ne vel.</p>
                        </div>
                        <div className ='main-elem-info'>
                            <PriceChangeIcon/>
                            <h4>Auto Responder</h4>
                            <p>Ea aperiri ponderum ullamcorper <br/> sit, verear offendit imperdiet nam <br/> eu, liber delicata tractatos ad.</p>
                        </div>
                    </div>
                </div>
             </>
     )
 }
 export default ProducktInfo