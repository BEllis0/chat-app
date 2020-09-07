import React from 'react';
import MessageForm from '../../Message_Form/MessageForm.jsx';
import MessageList from '../../MessageList/MessageList.jsx';
import Sidebar from '../../Sidebar/Sidebar.jsx';
import MessagesHeader from '../../MessagesHeader/MessagesHeader.jsx';

import styles from './messagesView.scss';

const MessagesView = props => {
    return (
        <div className="messagesViewContainer">
            
            <MessagesHeader />
            
            <div className="flex">
                <Sidebar
                    activeUsers={props.activeUsers}
                />
                <div className="messagesModule">
                    <MessageList 
                        messages={props.messages} 
                    />
                    <MessageForm 
                        getAllMessages={props.getAllMessages}
                        handleMessageSubmit={props.handleMessageSubmit}
                    />
                </div>
            </div>
        </div>
    )
};

export default MessagesView;