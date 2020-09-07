import React from 'react';
import styles from './sidebar.scss';
import ActiveUsers from '../ActiveUsers/ActiveUsers.jsx';

const Sidebar = (props) => {
    return (
        <div className="sidebarContainer">
            <ActiveUsers
                activeUsers={props.activeUsers}
            />
        </div>
    )
};

export default Sidebar;