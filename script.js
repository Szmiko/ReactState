var Counter = React.createClass({
	getInitialState: function() {
		return {
			counter: 0
		};
	},

	increment: function() {
		this.setState({
			counter: this.state.counter + 1
		});
	},

	decrement: function() {
		this.setState({
			counter: this.state.counter - 1
		});
	},

	componentDidMount() {
    	console.log('Liczniki wystartowały!');
  	},

	render: function() {
		return React.createElement('div', {onClick: this.increment},
			React.createElement('span', {}, 'Licznik ' + this.state.counter),
		);
	},
});

var Counter2 = React.createClass({
	getInitialState: function() {
		return {
			counter: 0
		};
	},

	decrement: function() {
		this.setState({
			counter: this.state.counter - 1
		});
	},

	componentDidMount() {
    	console.log('Liczniki wystartowały!');
  	},

	render: function() {
		return React.createElement('div', {onClick: this.decrement},
			React.createElement('span', {}, 'Licznik ' + this.state.counter)
		)
	}
});

var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app'));

var element2 = React.createElement(Counter2);
ReactDOM.render(element2, document.getElementById('app2'));