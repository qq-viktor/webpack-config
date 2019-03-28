import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    render() {
        console.log('test console.log');
        return (
            <div>
                <h1 className="testClass">Hello world, react !!111!</h1>
                <h3>custom component</h3>
            </div>
        );
    }
}

export default App;