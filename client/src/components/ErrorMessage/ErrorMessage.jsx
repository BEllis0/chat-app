import React from 'react';
import styles from './errorMessage.scss';

const ErrorMessage = (props) => {
    return (
        <div className="errorMessageContainer">
            <p className="errorMessage">{props.errorMessage}</p>
        </div>
    )
};

export default ErrorMessage;