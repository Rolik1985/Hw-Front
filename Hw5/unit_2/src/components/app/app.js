import React from "react";
import Header from '../header'
import Card from "../card/index"
import data from "../../data/data";

function App() {
    return(
    <>
    <Header/>
    <Card data={data}/>
        
    </>
    )
}
export default App