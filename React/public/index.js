var Main = React.createClass({
  render() {
    return (
      <div>
        <Par/>
      </div>
    )
  }
});

var Par = React.createClass({
  render() {
    return (
      <form action="/" method="POST">
        <button type="submit">Login</button>
      </form> 
    )
  }
});

ReactDOM.render(
  <Main/>,
  document.getElementById('greeting-div')
);