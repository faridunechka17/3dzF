import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Menu from "./components/Menu";
import MainPage from "./components/mainPage/MainPage";
import UsersPage from "./components/usersPage/UsersPage";


const App = () => {
    return (
            <BrowserRouter>
                <Menu/>
                <Routes>
                    <Route index element={<MainPage/>} />
                    <Route path='/users' element={<UsersPage/>} />
                </Routes>
            </BrowserRouter>
    );
};

export default App;