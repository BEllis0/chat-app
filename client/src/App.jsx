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
            username: 'Guest', //default
            room: 'General', //default
            messageText: '',
            activeUsers: [],
            errorMessage: undefined,
        };

        //bindings
        this.getAllMessages = this.getAllMessages.bind(this);
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
        this.handleMessageSubmit = this.handleMessageSubmit.bind(this);
        this.handleLoginRoomChange = this.handleLoginRoomChange.bind(this);
        this.handleLoginUsernameChange = this.handleLoginUsernameChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.disconnectUser = this.disconnectUser.bind(this);
    }

    getAllMessages() {
        fetch('/api/v1/messages/')
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

    async handleLoginSubmit(e) {
        e.preventDefault();

        // send connection message to server with username
        await socket.emit('connectionMessage', this.state.activeUsers.concat(this.state.username));
  
        // re-route to chat component view
        this.props.history.push('/chat');
    }

    handleMessageChange(e) {
        let message = e.target.value;
        
        if (message.length >= 140) {
            this.setState({
                errorMessage: "Message more than 140 characters"
            });
        } else {
            this.setState({
                messageText: e.target.value,
                errorMessage: undefined // reset error 
            });
        }
    }

    handleMessageSubmit() {
        // send event with message object
        socket.emit('message', {
            message: this.state.messageText,
            username: this.state.username,
            room: this.state.room
        });

        this.setState({
            messageText: ''
        });
    }

    disconnectUser() {
        socket.emit('disconnect', this.state.username);
    }

    componentDidMount() {
        // socket init
        window.socket = io();

        // get all messages from db
        this.getAllMessages();

        // listen for user connection messages
        socket.on('connectionMessage', usernameArr => {
            
            // let activeUsers = this.state.activeUsers.concat(username);
            console.log('connection, user array', usernameArr)
            
            // add the new active user to state
            this.setState({ 
                activeUsers: usernameArr
            });
        });

        // listen for disconnection message
        socket.on('disconnectionMessage', username => {
            // filter disconnected user from active user arr
            let filteredUsers = this.state.activeUsers.filter(users => {
                return users !== username;
            });

            // set state to filtered array
            this.setState({
                activeUsers: filteredUsers
            }, () => console.log('user removed', this.state.activeUsers));
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
                            activeUsers={this.state.activeUsers}
                            getAllMessages={this.getAllMessages}
                            handleMessageChange={this.handleMessageChange}
                            handleMessageSubmit={this.handleMessageSubmit}
                            messages={this.state.messages}
                            errorMessage={this.state.errorMessage}
                            username={this.state.username}
                            room={this.state.room}
                            disconnectUser={this.disconnectUser}
                        />
                    }
                />
            </div>
        )
    }
};

// withRouter allows for history access
export default withRouter(App);