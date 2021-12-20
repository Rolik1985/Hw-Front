import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Img1 from '../../img/desktop.png'
import './main.css'


function Info(){
    return(
        <>
        <div className ="main-wraper">
        <div className ="main-content">
            <div className = 'item-main'>
                <h1>We help you find the<br/> best solution</h1>
                <p>Et has minim elitr intellegat. Mea aeterno eleifend<br/> 
                antiopam ad, nam no suscipit quaerendum. At nam<br/> 
                minimum ponderum. Est audiam animal molestiae te. Ex<br/>
                 duo eripuit mentitum.</p>
                <Stack spacing={2} direction="row" className ='main-btn'>
                    <Button variant="contained">Start free trial</Button>
                </Stack>
            </div>
            <div className = 'item-main'>
            <img src ={Img1}></img> 
            </div>
        </div>
        </div>
        </>
    )
}
export default Info