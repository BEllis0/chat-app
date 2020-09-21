import React from 'react';
import styles from './room.scss';

const Room = props => {
    return (
        <div className="roomContainer">
            <h3>Room</h3>
            <p className="room">{props.room}</p>
        </div>
    )
};

export default Room;