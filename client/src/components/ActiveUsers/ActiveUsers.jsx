import React from 'react';
import styles from './activeUsers.scss';

const ActiveUsers = props => {
    return (
        <div className="activeUsersContainer">
            <h3>Active Users</h3>
            {props.activeUsers.map(activeUser => {
                return (
                    <div key={props.activeUsers.indexOf(activeUser)}>
                        <p className="activeUsername">{activeUser}</p>
                    </div>
                )
            })}
        </div>
    )
};

export default ActiveUsers;