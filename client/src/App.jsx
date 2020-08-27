import React from 'react';
import { Route } from 'react-router-dom';
import MessagesView from './components/Views/MessagesView/MessagesView.jsx';
import LoginView from './components/Views/LoginView/LoginView.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: [],
            username: 'testuser',
            room: ''
        };

        //bindings
        this.getAllMessages = this.getAllMessages.bind(this);
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
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
        console.log('submited')
    }

    componentDidMount() {
        // socket init
        window.socket = io();

        // get all messages from db
        this.getAllMessages();

        socket.on('connectionMessage', msg => {
            console.log('message in component did mount', msg)
        });

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
                            messages={this.state.messages}
                        />
                    }
                />
            </div>
        )
    }
};

export default App;