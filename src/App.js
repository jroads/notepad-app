import React, { Component } from 'react';
import './App.css';

import { Route } from 'react-router-dom';
import Home from './components/home';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Route path="/" exact component={Home} />
            </div>
        );
    }
}

export default App;