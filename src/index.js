import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import Bg1 from './components/bg1'
import Carts from './components/Carts';
import Nav from './components/Nav';
import Details from './components/Details';
import { data } from './data';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <>
 <App/>
 <Bg1/>
 <div id="bg3">
    {data.map((x,y)=>{
        return(
            <Carts key={y} src={x.src} h1={x.h1} p={x.p} a={x.a} btn={x.btn}/>
        )
    })}
 </div>
 <Nav/>
 <Details/>
 </>
    
);

