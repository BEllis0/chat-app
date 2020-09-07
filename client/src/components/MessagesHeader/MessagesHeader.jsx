import React from 'react';
import styles from './messagesHeader.scss';

const MessagesHeader = props => {
    return (
        <div className="messagesHeaderContainer">
            <div className="flex">
                <img className="headerIcon" src="https://image.flaticon.com/icons/svg/2950/2950648.svg" />
                <h1 className="rm-margin">Tele.gram</h1>
            </div>
            <button className="button">Leave Room</button>
        </div>
    )
};

export default MessagesHeader;