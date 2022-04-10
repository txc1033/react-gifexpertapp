import React from 'react';
import ReactDOM from "react-dom/client"; //Nueva import version < 18 
import GifExpertApp from './GifExpertApp';
import './index.css';

//Inicialización v18
const divRoot = document.getElementById("root");
const root = ReactDOM.createRoot(divRoot)


root.render(
    <GifExpertApp />
);

