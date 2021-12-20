import React from "react";
import Header from "../header/index";
import Info from "../info";
import Main from "../main/main";
import Produckt from "../main-produck";
import ProducktInfo from "../main-info/produckt-info";
import Footer from "../footer/footer";




function App (){
    return(
        <>
        <Header/>
        <Info/>
        <Main/>
        <Produckt/>
        <ProducktInfo/>
        <Footer/>
        
        </>
    )
}
export default App;