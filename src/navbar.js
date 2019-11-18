import React, { Component } from 'react';

export default class Navbar extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<a className="navbar-brand" href="#"><span id="title" style={{fontSize: '2em'}}>®</span></a>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNar" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				    <span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNar">
				    <ul className="navbar-nav ml-auto">
					    <li className="nav-item">
					    	<a className="nav-link" href="#">Home</a>
					    </li>
					    <li className="nav-item">
					    	<a className="nav-link" href="#">Docs</a>
					    </li>
				    </ul>
				</div>
			</nav>
		)
	}
}