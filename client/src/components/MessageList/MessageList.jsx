import React, { useEffect } from 'react';
import styles from './messageList.scss';
import dateConverter from '../../utils/dateConverter.js';

const MessageList = props => {

    useEffect(() => {
        // kepp scrollbar at bottom
        let messageList = document.getElementsByClassName('messageListContainer')[0];
        messageList.scrollTop = messageList.scrollHeight;
    });

    console.log(props)

    return (
        <div className="messageListContainer">
            {props.messages.length === 0 &&
                <div className="emptyMessageContainer">
                    <p className="emptyMessage">No messages to display</p>
                </div>
            }
            {props.messages.map(message => {
                if (message.room === props.room) {
                    return (
                        <div
                            className={props.username === message.username ? "currentUser message" : "otherUser message"} 
                            key={message.id}
                        >
                            <div className="flex">
                                <p className="messageUsername">{message.username}</p>
                                <p className="messageDate">{dateConverter(message._date, 'hourly')}</p>
                            </div>
                            <p className="rm-margin">{message.message}</p>
                        </div>
                    )
                }
            })}
        </div>
    )
};

export default MessageList;