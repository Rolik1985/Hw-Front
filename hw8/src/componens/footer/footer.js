import React from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './footer.css'

function Footer(){
    return(
        <>
        <div className = 'footer-item'>
                <h1>Ready to get started?</h1>
                <p>Take control of your Business Data.<br/>Try saas to make your business better</p>
                <Stack spacing={2} direction="row" className ='main-btn'>
                    <Button variant="contained">Get Started</Button>
                </Stack>
            </div>
            <div className="coppee">
                <p>© BrandName. All rights reserved.</p>
            </div>
        </>
    )
}
export default Footer