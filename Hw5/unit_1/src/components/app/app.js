import React from "react";
import img from '../../img/Ramda.png';
import imgTop from '../../img/top.png';
import './app.css';


function App() {
    return (
        <>
        <div className ='wraper'>
        <div className = 'logo'>
            <img src ={img}></img>
        </div>
        <header>
            <ul className = 'menu'>
                <li className="main-menu"><a href='#'>Functional Programming</a></li>
                <li className="main-menu active"><a href='#'>Ramda</a></li>
                <li className="main-menu"><a href='#'>Fantasy Land Spec</a></li>
                <li className="main-menu"><a href='#'>Node.js for all</a></li>
            </ul>
        </header>
        <main>
            <div className='content'>
                <div className="content-tex">
                    <ul className = 'menu-info'>
                        <li className="main-info"><a href='#'>Ramda</a></li>
                        <li className="main-info main-info-active"><a href='#'>Why Ramda?</a></li>
                        <li className="main-info"><a href='#'>What's Different?</a></li>
                        <li className="main-info"><a href='#'>Introductions</a></li>
                        <li className="main-info"><a href='#'>Philosophy</a></li>
                    </ul>
                </div> 
                <div className= 'content-info'>
                    <div className='content-img'>
                        <img src ={imgTop}></img> 
                    </div>
                    <p>Lorem ipsum — классическая панграмма, условный, зачастую бессмысленный текст-заполнитель, вставляемый в макет страницы. Используется в качестве заполнителя по крайней мере с XVI века. Является искажённым отрывком из философского трактата Марка Туллия Цицерона «О пределах добра и зла», написанного в 45 году до н. э. на латинском языке, обнаружение сходства атрибутируется Ричарду МакКлинтоку.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div> 
            </div>
        </main>
        <footer>
        <ul className = 'menu foter'>
                <li className="foter-menu"><a href='#'>Ramda</a></li>
                <li className="foter-menu foter-menu-active"><a href='#'>Why Ramda?</a></li>
                <li className="foter-menu"><a href='#'>What's Different?</a></li>
                <li className="foter-menu"><a href='#'>Introductions</a></li>
                <li className="foter-menu"><a href='#'>Introductions</a></li>
                <li className="foter-menu foter-coper"><p>Copyright © 2018</p></li>
            </ul>
        </footer>

        </div>
        </>
    )
}
export default App;