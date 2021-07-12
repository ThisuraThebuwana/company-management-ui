import './App.css';
import React, {useEffect, useState} from "react";
import Nav from "./components/Nav";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { host } from './Constants';

function App() {

    const [name, setName] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    useEffect(() => {
        (
            async () => {
                if(isLoggedIn){
                    const response = await fetch(host+'/parcel/parcels', {
                        headers: {'Content-Type': 'application/json'},
                        credentials: 'include',
                    });

                    const content = await response.json();
                    if(content.length === undefined){
                        setName('');
                    }else{
                        setName('Home Page');
                    }
                }
            }
        )();

    });

    return (
        <div className="App">
            <BrowserRouter>
                <Nav name={name} setName={setName} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
                <main className="form-signin">
                    <Route path="/" exact component={() => <Home name={name}/>}/>
                    <Route path="/login" component={() => <Login setIsLoggedIn={setIsLoggedIn}/>}/>
                    <Route path="/register" component={Register}/>
                </main>
            </BrowserRouter>
        </div>
    );
}

export default App;
