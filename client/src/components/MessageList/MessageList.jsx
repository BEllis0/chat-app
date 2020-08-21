import React from 'react';

const MessageList = props => {
    console.log('Message List props', props)
    
    return (
        <div>
            <h3>Messages</h3>
            {props.messages.map(message => {
                return (
                    <div>
                        {message.message}
                    </div>
                )
            })}
        </div>
    )
};

export default MessageList;