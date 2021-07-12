import React, {useState} from 'react';
import {Redirect} from "react-router-dom";
import { host } from '../Constants';

const Register = () => {
        const [user_id, setUserID] = useState('');
        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [redirect, setRedirect] = useState(false);

        const submit = async (e) => {
            e.preventDefault();

            await fetch(host+'/user/register', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    user_id,
                    name,
                    email,
                    password
                })
            });

            setRedirect(true);
        };

        if(redirect) {
            return <Redirect to="/login"/>;
        }

        return (
            <form onSubmit={submit}>
                <h1 className="h3 mb-3 fw-normal">Please register</h1>
                <input className="form-control"
                       placeholder="User ID" required
                       onChange={e => setUserID(e.target.value)}
                />
                <input className="form-control"
                       placeholder="Full name" required
                       onChange={e => setName(e.target.value)}
                />
                <input type="email" className="form-control"
                       placeholder="name@example.com" required
                       onChange={e => setEmail(e.target.value)}
                />
                <input type="password" className="form-control"
                       placeholder="Password" required
                       onChange={e => setPassword(e.target.value)}
                />

                <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
            </form>
        );
};

export default Register;
