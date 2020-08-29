import React from 'react';

export default class MessageForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            messageText: '',
        };

        // this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            messageText: e.target.value
        });
    }

    render() {
        return (
            <div id="formContainer" onSubmit={ (e) => { e.preventDefault(); this.props.handleMessageSubmit(this.state.messageText)}}>
                <form id="messageForm">
                    <input onChange={ this.handleChange } className="formInput" id="formText" type="text" />
                    <input className="formInput" id="formSubmit" type="submit" max="140"/>
                </form>
            </div>
        )
    }
    
};