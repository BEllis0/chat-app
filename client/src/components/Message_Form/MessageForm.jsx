import React from 'react';
import styles from './messageForm.scss';

const MessageForm = props => {
        return (
            <div id="formContainer" onSubmit={ (e) => { 
                e.preventDefault(); 
                props.handleMessageSubmit();
                }}>
                <form id="messageForm">
                    <input onChange={ (e) => {props.handleMessageChange(e)} } className="formInput" id="formText" type="text" max="140" />
                    <input className="formInput" id="formSubmit" type="submit" />
                </form>
            </div>
        )
    
};

export default MessageForm;