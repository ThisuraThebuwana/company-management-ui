import React, {useState} from 'react';
import {Redirect} from "react-router-dom";
import { host } from '../Constants';

const Login = (props) => {
    const [user_id, setUserID] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const submit = async (e) => {
        e.preventDefault();

        const response = await fetch(host+'/user/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({
                user_id,
                password
            })
        });

        const content = await response.json();

        setRedirect(true);

        props.setName(content.message);

    };

    if (redirect) {
        return <Redirect to="/"/>;
    }

    return (
        <form onSubmit={submit}>
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
            <input className="form-control"
                   placeholder="User ID" required
                   onChange={e => setUserID(e.target.value)}
            />
            <input type="password" className="form-control"
                   placeholder="Password" required
                   onChange={e => setPassword(e.target.value)}
            />

            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        </form>
    );
};

export default Login;
