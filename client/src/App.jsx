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
        this.getAllMessages = this.getAllMessages.bind(this);
    }

    getAllMessages() {
        fetch('http://localhost:3000/api/v1/messages/')
        .then(response => {
            return response.json();
        })
        .then(messages => {
            console.log('Response of all messages in client', messages.rows);
            this.setState({
                messages: messages.rows
            });
        })
        .catch(err => {
            console.log('Error getting all messages in client', err);
        });
    }

    componentDidMount() {
        // socket init
        window.socket = io();

        // get all messages from db
        this.getAllMessages();

        socket.on('chatMessage', msg => {
            console.log('message in component did mount', msg)
            // this.getAllMessages();
        });

        socket.on('message', messages => {
            this.setState({
                messages: messages
            }, () => console.log('messages state', this.state.messages))
        });

    }


    render() {
        console.log('state in app comp', this.state.messages)
        return (
            <div className="appContainer">
                <MessagesView
                    getAllMessages={this.getAllMessages}
                    messages={this.state.messages}
                />
            </div>
        )
    }
};

export default App;