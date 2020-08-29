import React from 'react';
import MessageForm from '../../Message_Form/MessageForm.jsx';
import MessageList from '../../MessageList/MessageList.jsx';

const MessagesView = props => {
    return (
        <div>
            <MessageForm 
                getAllMessages={props.getAllMessages}
                handleMessageSubmit={props.handleMessageSubmit}
            />
            <MessageList 
                messages={props.messages} 
            />
        </div>
    )
};

export default MessagesView;