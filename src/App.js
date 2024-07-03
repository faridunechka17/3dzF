import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage";

const App = () => {
    return (
           <div>
               <MainPage/>
           </div>
    );
};

export default App;