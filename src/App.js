import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';

import NavigationBar from './components/partials/NavigationBar';
import SearchView from './components/partials/SearchView';

class App extends Component {
    render() {
        return (
            <div className="App">
                <NavigationBar/>
                <SearchView/>
            </div>
        );
    }
}

export default App;
