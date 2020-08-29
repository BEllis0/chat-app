import React from 'react';
import {withRouter} from 'react-router-dom'; //access to history
import { Route } from 'react-router-dom';
import MessagesView from './components/Views/MessagesView/MessagesView.jsx';
import LoginView from './components/Views/LoginView/LoginView.jsx';

import styles from './master.scss';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: [],
            username: 'Guest',
            room: ''
        };

        //bindings
        this.getAllMessages = this.getAllMessages.bind(this);
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
        this.handleMessageSubmit = this.handleMessageSubmit.bind(this);
        this.handleLoginRoomChange = this.handleLoginRoomChange.bind(this);
        this.handleLoginUsernameChange = this.handleLoginUsernameChange.bind(this);
    }

    getAllMessages() {
        fetch('http://localhost:3000/api/v1/messages/')
        .then(response => {
            return response.json();
        })
        .then(messages => {
            this.setState({
                messages: messages.rows
            });
        })
        .catch(err => {
            console.log('Error getting all messages in client', err);
        });
    }

    handleLoginUsernameChange(e) {
        this.setState({
            username: e.target.value
        });
    }

    handleLoginRoomChange(e) {
        this.setState({
            room: e.target.value
        });
    }

    handleLoginSubmit(e) {
        e.preventDefault();

        // send connection message to server
        socket.emit('connectionMessage', `${this.state.username} has joined the chat`);
  
        // re-route to chat component view
        this.props.history.push('/chat');
    }

    handleMessageSubmit(message) {
        // send event with message object
        socket.emit('message', {
            message: message,
            username: this.state.username,
            room: this.state.room
        });
    }

    componentDidMount() {
        // socket init
        window.socket = io();

        // get all messages from db
        this.getAllMessages();

        // listen for user connection messages
        socket.on('connectionMessage', msg => {
            console.log('connection message: ', msg)
        });

        // listen for chat messages
        socket.on('message', messages => {
            this.setState({
                messages: messages
            });
        });
    }

    render() {
        return (
            <div className="appContainer">
                <Route 
                    exact 
                    path="/"
                    render={(props) => 
                        <LoginView
                            history={props}
                            room={this.state.room}
                            handleLoginRoomChange={this.handleLoginRoomChange}
                            handleLoginUsernameChange={this.handleLoginUsernameChange}
                            handleLoginSubmit={this.handleLoginSubmit}
                        />
                    }
                />
                <Route
                    path="/chat"
                    render={(props) => 
                        <MessagesView
                            getAllMessages={this.getAllMessages}
                            handleMessageSubmit={this.handleMessageSubmit}
                            messages={this.state.messages}
                        />
                    }
                />
            </div>
        )
    }
};

// withRouter allows for history access
export default withRouter(App);