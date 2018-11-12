import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {login} from '../../actions'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'
class Login extends Component{
	constructor(props){
		super(props);
		this.state = {
			username: '',
			password: '',
			user: {},
			error: ''
		}
		this.usernameChange = this.usernameChange.bind(this);
		this.passwordChange = this.passwordChange.bind(this);
		this.submit = this.submit.bind(this);
		this.getUser = this.getUser.bind(this);
		console.log("Username is " + props.username);
	}
	usernameChange(event){
		this.setState({
			username: event.target.value
		});
	}
	passwordChange(event){
		this.setState({
			password: event.target.value
		});
	}
	async getUser(){
		await fetch('http://localhost:3000/login', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				username: this.state.username,
				password: this.state.password
			})
		})
			.then(res => res.json())
			.then(user => {
				this.setState({user: user})
			});
		console.log(this.state.user);
		if(!this.state.user){
			this.setState({error: 'Incorrect Password'})
		}
		else{
			this.props.dispatch(login(this.state.user));
			browserHistory.push('/dashboard');
		}
	}
	submit(event){
				
		/*
		fetch('http://localhost:3000/login', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				username: this.state.username,
				password: this.state.password
			})
		})
			.then(res => res.json())
			.then(user => {
				this.setState({user: user})
				console.log(this.state.user)
			});
		*/
		/*
		fetch('http://localhost:3000/users/assyrian7')
			.then(res => res.json())
			.then(user => {
				this.setState({user: user})
				console.log(this.state.user);
			});
		console.log(this.state.user);
		this.props.dispatch(login(this.state.user));
		*/
		this.getUser();
		//this.props.dispatch(changeText('There'))
	}
	render(){
		return (
			<div id="form">
				<h1>{this.state.error}</h1>
		        <div className="form-group">
		            <label>Username</label>
		            <input type="text" onChange={this.usernameChange} className="form-control" value={this.state.username} name="username"></input>
		        </div>
		        <div className="form-group">
		            <label>Password</label>
		            <input type="password" onChange={this.passwordChange} className="form-control" value={this.state.password} name="password"></input>
		        </div>
		        <h1>{this.props.username}</h1>
		        <button type="submit" onClick={this.submit} className="btn btn-warning btn-lg">Login</button>
		    </div>
		);
	}
}

var mapStateToProps = (state) => {
	return {
		username: state.user.username,
	}
}

export default connect(mapStateToProps)(Login);