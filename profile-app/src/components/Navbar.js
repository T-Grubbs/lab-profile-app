import React, { Component } from 'react';
import '../App.css';

class Navbar extends Component {
	render() {
		return (
			<ul className="nav nav-tabs">
				<li className="nav-item">
					<a className="nav-link active" href="#">
						Home
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#">
						About Me
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#">
						Resume
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">
						Projects
					</a>
				</li>
                <li className="nav-item">
					<a className="nav-link" href="#">
						Soon to change
					</a>
				</li>




			</ul>
		);
	}
}

export default Navbar;
