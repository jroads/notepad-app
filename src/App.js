import React, { Component } from 'react';
import './App.css';

import Routes from './components/routes';
import Header from './components/header';
import {
    keys,
    removeLocalItem
} from './services/storage';

class App extends Component {
    clearAllButton() {
        removeLocalItem(keys.notes);
        window.location = "/";
    }

    render() {
        return (
            <div className="App">
                <Header
                    clearAllButton={this.clearAllButton.bind(this)}
                />
                <Routes />
            </div>
        );
    }
}

export default App;