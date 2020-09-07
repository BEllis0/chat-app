import React, { useEffect } from 'react';
import styles from './messageList.scss';
import dateConverter from '../../utils/dateConverter.js';

const MessageList = props => {

    useEffect(() => {
        // kepp scrollbar at bottom
        let messageList = document.getElementsByClassName('messageListContainer')[0];
        messageList.scrollTop = messageList.scrollHeight;
    });

    return (
        <div className="messageListContainer">
            {props.messages.map(message => {
                return (
                    <div className="message" key={message.id}>
                        <div className="flex">
                            <p>{message.username}</p>
                            <p>{dateConverter(message._date, 'hourly')}</p>
                        </div>
                        <p className="rm-margin">{message.message}</p>
                    </div>
                )
            })}
        </div>
    )
};

export default MessageList;