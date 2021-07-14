import './App.css';
import React, {Component, useEffect, useState} from "react";
import Nav from "./components/Nav";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import {host} from './Constants';
import FileUploader from "./components/FileUploader";

function App() {

    const [authStatus, setAuthStatus] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    useEffect(() => {
        (
            async () => {
                let authRes = await fetch(host + '/parcel/authenticate', {
                    headers: {'Content-Type': 'application/json'},
                    credentials: 'include',
                });
                let auth = authRes.json();
                auth.then((res)=>{setAuthStatus(res.statusCode)});
                if (authStatus === 200) {
                    setIsLoggedIn(true);
                }else{
                    setIsLoggedIn(false);
                }
            }
        )();

    });

    return (
        <div className="App">
            <BrowserRouter>
                <Nav isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
                <main className="form-signin">
                    <Route path="/" exact component={() => <Home isLoggedIn={isLoggedIn}/>}/>
                    <Route path="/login" component={() => <Login setIsLoggedIn={setIsLoggedIn}/>}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/upload" component={FileUploader}/>
                </main>
            </BrowserRouter>
        </div>
    );
}

export default App;
