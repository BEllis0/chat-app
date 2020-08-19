import React from 'react';

export default class MessageForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };


    }

    render() {
        return (
            <div id="formContainer" class="formContainer">
                <form id="messageForm">
                    <input class="formInput" id="formText" type="text" />
                    <input class="formInput" id="formSubmit" type="submit" />
                </form>
            </div>
        )
    }
    
};