import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import DEFAULT_USERS from '../data/users.json';

export function Login() {
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');

    const usenavigate = useNavigate;

    const ProceedLogin = (e) => {
        e.preventDefault();
        if(validate()){
        // implementation
            fetch(DEFAULT_USERS + username).then((res) => {
                return res.json();
            }) .then((response) => {
                //console.log(response)
                if(Object.kets(response).length === 0) {
                    toast.error('Please Enter valid username');
                } else {
                    if(response.password === password) {
                        toast.success('Login Successful');
                        usenavigate('/');
                    } else {
                        toast.error('Please Enter valid information');
                    }
                }
            }) .catch((error) => {
                toast.error('Failed to Login due to : ' + error.message)
            });

        }
    }

    const validate=()=>{
    let result = true;
        if (username === '' || username === null) {
            result = false;
            toast.warning('Please Enter Your Username');
        }
        if (password === '' || password === null) {
            result = false;
            toast.warning('Please Enter Your Password');
        }
        return result;
    }

    return (
        <div className='row'>
            <div className='offset-lg-3 col-lg-6'>
                <form onSubmit={ProceedLogin} className='container'>
                    <div className='card'>
                        <div className='card-header'>
                            <h2>User Login</h2>
                        </div>
                        <div className='card-body'>
                            <div className='form-group'>
                                <label>User name <span className='errormsg'>*</span></label>
                                <input className='form-group' value={username} onChange={e => setUsername(e.target.value)}></input>
                            </div>
                            <div className='form-group'>
                                <label>Password <span className='errormsg'>*</span></label>
                                <input className='form-group' type='password' value={password} onChange={e => setPassword(e.target.value)}></input>
                            </div>
                        </div>
                        <div className='card-footer'>
                            <button type='submit' className='btn btn-primary'>Login</button>
                            <Link className='btn btn-success' to='/register'>New User</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
