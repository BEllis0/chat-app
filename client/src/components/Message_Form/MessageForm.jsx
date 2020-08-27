import React from 'react';

export default class MessageForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            messageText: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            messageText: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let props = this.props;
        
        // send event with message
        socket.emit('message', this.state.messageText);
    }

    render() {
        return (
            <div id="formContainer" onSubmit={ this.handleSubmit }>
                <form id="messageForm">
                    <input onChange={ this.handleChange } className="formInput" id="formText" type="text" />
                    <input className="formInput" id="formSubmit" type="submit" />
                </form>
            </div>
        )
    }
    
};