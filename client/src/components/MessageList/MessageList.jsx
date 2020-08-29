import React from 'react';

const MessageList = props => {
    console.log('message list props', props)
    return (
        <div>
            <h3>Messages</h3>
            {props.messages.map(message => {
                return (
                    <div key={message.id}>
                        {message.message}
                    </div>
                )
            })}
        </div>
    )
};

export default MessageList;