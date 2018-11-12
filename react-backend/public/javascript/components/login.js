var Login = React.createClass({
	render() {
		return (
			<div>
			<h1>Login</h1>
			<form action="/login" method="post">
		        <div class="form-group">
		            <label>Username</label>
		            <input type="text" class="form-control" name="username"></input>
		        </div>
		        <div class="form-group">
		            <label>Password</label>
		            <input type="password" class="form-control" name="password"></input>
		        </div>

		        <button type="submit" class="btn btn-warning btn-lg">Login</button>
		    </form>

		    <hr />

		    <p>Need an account? <a href="/signup">Signup</a></p>
		    <p>Or go <a href="/">home</a>.</p>
		    </div>
		)
	}
});

ReactDOM.render(<Login />,  document.getElementById('root'));
