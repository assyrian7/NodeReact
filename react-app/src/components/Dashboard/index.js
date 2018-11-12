import React, {Component} from 'react'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'

class Dashboard extends Component{
	componentDidMount(){
		if(this.props.username.length === 0){
			browserHistory.push('/login')
		}
	}
	render(){
		return (
			<h1>{this.props.username}</h1>
		)
	}
}

var mapStateToProps = (state) => {
	return {
		username: state.user.username
	}
}

export default connect(mapStateToProps)(Dashboard)

