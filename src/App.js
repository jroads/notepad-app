import React, { Component } from 'react';
import './App.css';

import { Route } from 'react-router-dom';
import Header from './components/header';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Route />
            </div>
        );
    }
}

export default App;