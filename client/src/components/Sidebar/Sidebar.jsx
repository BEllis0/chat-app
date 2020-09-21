import React from 'react';
import styles from './sidebar.scss';
import ActiveUsers from '../ActiveUsers/ActiveUsers.jsx';
import Room from '../Room/Room.jsx';

const Sidebar = (props) => {
    return (
        <div className="sidebarContainer">
            <Room 
                room={props.room}
            />
            <ActiveUsers
                activeUsers={props.activeUsers}
            />
        </div>
    )
};

export default Sidebar;