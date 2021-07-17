import './App.css';
import React, {useEffect, useState} from "react";
import Nav from "./components/Nav";
import {BrowserRouter, Route} from "react-router-dom";
import AllParcels from "./pages/AllParcels";
import Login from "./pages/Login";
import Register from "./pages/Register";
import {host} from './Constants';
import FileUploader from "./pages/FileUploader";

function App() {

    const [authStatus, setAuthStatus] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [tableContent, setTableContent] = useState(null);
    const [isSuperAdmin, setIsSuperAdmin] = useState(false);

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
                <Nav isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setIsSuperAdmin={setIsSuperAdmin}/>
                <main className="form-signin">
                    <Route path="/" exact component={() => <AllParcels isLoggedIn={isLoggedIn} tableContent={tableContent} setTableContent={setTableContent} isSuperAdmin={isSuperAdmin}/>}/>
                    <Route path="/login" component={() => <Login setIsLoggedIn={setIsLoggedIn} setIsSuperAdmin={setIsSuperAdmin}/>}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/upload" component={FileUploader}/>
                </main>
            </BrowserRouter>
        </div>
    );
}

export default App;
