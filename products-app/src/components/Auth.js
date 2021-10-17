import React, { useState } from "react";
import {connect} from "react-redux";
import Button from '@mui/material/Button';
import { Input } from '@mui/material';

import { userLogin } from "../actions/login";

const Auth = ({ userLogin }) => {
    const [user, setUser] = useState({
        username: "",
        password: "",
    });

    const handleClick = async (e) => {
        userLogin(user);
    }

    const handleInput = async (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setUser({...user, [name]: value});
    }

    return (
        <div className="App-auth">
            <h2>Login</h2>
            <form className="login-form" autoComplete="off">
                <Input placeholder="User Name" name="username" value={user.username} onChange={handleInput} inputProps={{ 'aria-label': 'username' }} />
                <Input placeholder="Password" name="password" value={user.password} onChange={handleInput} inputProps={{ 'aria-label': 'password' }} />
                <Button variant="contained" color="primary" onClick={handleClick}>Enter</Button>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => ({
    username: state.user.username,
    password: state.user.password,
})

export default connect( mapStateToProps, { userLogin })(Auth);