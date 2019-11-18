import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Login extends Component {
	constructor(props){
		super(props);
		this.state = {
			username:'',
			password:'',
			remember: false,
		}
		this.handleUsernameChange = this.handleUsernameChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.handleRememberChange = this.handleRememberChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleUsernameChange(e){
		this.setState({
			username: e.target.value
		});
	}
	handlePasswordChange(e){
		this.setState({
			password: e.target.value
		});
	}
	handleRememberChange(){
		this.setState({
			remember: !this.state.remember
		});
	}
	handleSubmit(e){
		e.preventDefault();

	}
	render() {
		return (
		<div id='eve-login'>
			<h1>ModelChimp <span id="title">®</span></h1>
			<div id="online">ONLINE</div>
			<div class="container">
				<p id="header">Log in to your account</p>
				<form>
					<div class="field">
						<label for="username">Username</label>
						<input type="text" value={this.state.username} onChange={this.handleUsernameChange} name="username" id="username"/>
					</div>	
					<div class="field">
						<label for="password">Password</label> 
						<input type="password" value={this.state.password} onChange={this.handlePasswordChange} name="password" id="password"/>
					</div>
					<div class="remember">
						<input type="checkbox" name="RememberMe"/>
						<input type="hidden" value={this.state.remember} onChange={this.handleRememberChange} name="RemberMe"/>Remember me?
					</div>
					<Link to='/dashboard'><button id="success">LOG IN</button></Link>
					<a id="forget" href="#">Forgot password?</a>
					<div class="thirdparty">
						<p>Other sign-in services</p>
						<div><a href="https://gmail.com/login/"><i class="fab fa-google"></i></a></div>
						<div><a href="https://www.facebook.com/"><i class="fab fa-facebook"></i></a></div>
					</div>
				</form>		
			</div>
			<p>New to ModelChimp online? <a id="new" href="#">Create Account</a></p>
		</div>)
	}
}