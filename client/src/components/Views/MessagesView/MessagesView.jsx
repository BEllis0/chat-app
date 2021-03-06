import React from 'react';
import MessageForm from '../../Message_Form/MessageForm.jsx';
import MessageList from '../../MessageList/MessageList.jsx';
import Sidebar from '../../Sidebar/Sidebar.jsx';
import MessagesHeader from '../../MessagesHeader/MessagesHeader.jsx';
import ErrorMessage from '../../ErrorMessage/ErrorMessage.jsx';

import styles from './messagesView.scss';

const MessagesView = props => {
    return (
        <div className="messagesViewContainer">
            
            <MessagesHeader
                disconnectUser={props.disconnectUser}
            />
            
            <div className="flex">
                <Sidebar
                    activeUsers={props.activeUsers}
                    room={props.room}
                />
                <div className="messagesModule">
                    <MessageList 
                        messages={props.messages}
                        username={props.username}
                        room={props.room}
                    />
                    {props.errorMessage !== undefined &&
                        <ErrorMessage 
                            errorMessage={props.errorMessage} 
                        />
                    }
                    <MessageForm 
                        getAllMessages={props.getAllMessages}
                        handleMessageChange={props.handleMessageChange}
                        handleMessageSubmit={props.handleMessageSubmit}
                        errorMessage={props.errorMessage}
                    />
                </div>
            </div>
        </div>
    )
};

export default MessagesView;