import React, { Component } from 'react';
import '../App.css';
import Navbar from '../components/Navbar';

class Main extends Component {
	render() {
        return <div>
        <Navbar />
        <h1>
            Here I AM!!!
        </h1>
        <button type="submit">click me</button>
        
        </div>;
	}
}

export default Main;