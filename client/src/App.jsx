import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };

        //bindings


    }

    componentDidMount() {
        console.log('Mounted');
    }

    render() {
        return (
            <div className="appContainer">
                <h1>Hello World</h1>
            </div>
        )
    }
};

export default App;