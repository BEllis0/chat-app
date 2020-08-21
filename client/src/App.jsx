import React from 'react';
import socketIOClient from "socket.io-client";
import MessagesView from './components/Views/MessagesView/MessagesView.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: [],
            username: 'testuser'
        };

        //bindings
        this.pushMessage = this.pushMessage.bind(this);
    }

    componentDidMount() {
        // socket init
        window.socket = io();
    }

    pushMessage(message) {
        this.setState(currentState => {
            const messages = currentState.messages.concat({
                username: this.state.username,
                message: message,
                date: new Date()
            });

            return {
                messages
            }
        }, () => console.log('state', this.state.messages))
    }

    render() {
        return (
            <div className="appContainer">
                <MessagesView
                    messages={this.state.messages}
                    pushMessage={this.pushMessage} 
                />
            </div>
        )
    }
};

export default App;