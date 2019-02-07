import React, { Component } from 'react';
import '../App.css';

class Navbar extends Component {
	render() {
		return (
			<ul className="nav nav-tabs">
				<li className="nav-item">
					<a className="nav-link active" href="#">
						Active
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#">
						Link
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#">
						Link
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">
						Disabled
					</a>
				</li>
			</ul>
		);
	}
}

export default Navbar;