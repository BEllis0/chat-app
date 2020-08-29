import React from 'react';
import { Link } from 'react-router-dom'
import styles from './loginView.scss';

const LoginView = props => {
    return (
        <div className="loginViewContainer">
            <header className="header">
                <div>
                    <span className="flex">
                        <img className="headerIcon" src="https://image.flaticon.com/icons/svg/2950/2950648.svg" />
                        <h1>Tele.gram</h1>
                    </span>
                    <h3>Login to chat</h3>
                </div>
            </header>
            <div className="loginFormSection">
                <form className="loginForm" onSubmit={props.handleLoginSubmit}>
                    <label>Username</label>
                    <input onChange={props.handleLoginUsernameChange} className="input usernameInput" type="text" required/>
                    <br />
                    <label>Chat Room</label>
                    <select value={props.room} onChange={props.handleLoginRoomChange} className=" input roomSelect">
                        <option className="selectOption" value="general">General</option>
                    </select>
                    <br />
                    <input type="submit" className="loginSubmit button" value="Join Chat Room" />
                </form>
            </div>
        </div>
    )
};

export default LoginView;