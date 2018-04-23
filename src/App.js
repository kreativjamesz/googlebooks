import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';
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
