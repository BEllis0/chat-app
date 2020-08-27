import React from 'react';
import { Link } from 'react-router-dom'

const LoginView = props => {
    return (
        <div className="loginViewContainer">
            <header className="header">
                <h1>Chat App</h1>
            </header>
            <div className="loginForm">
                <form onSubmit={props.handleLoginSubmit}>
                    <label>Username</label>
                    <input onChange={props.handleLoginUsernameChange} className="usernameInput" type="text" />
                    <br />
                    <label>Chat Room</label>
                    <select value={props.room} onChange={props.handleLoginRoomChange} className="roomSelect">
                        <option className="selectOption" value="general">General</option>
                    </select>
                    <br />
                    <input type="submit" className="loginSubmit" />
                </form>
            </div>
        </div>
    )
};

export default LoginView;