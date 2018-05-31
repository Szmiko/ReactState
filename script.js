var Counter = React.createClass({
	getDefaultProps: function() { 
		console.log('Wartości początkowe liczników: ');
	},

	getInitialState: function() {
		return {
			counter: 0,
			counter2: 0 
		};
	},

	increment: function() {
		this.setState({
			counter: this.state.counter + 1
		});
	},

	decrement: function() {
		this.setState({
			counter2: this.state.counter2 - 1
		});
	},

	componentWillMount() {
    	console.log('Liczniki ładowane.');
  	},

  	componentWillReceiveProps() {
  		console.log('Nastąpiło kliknięcie, licznika.');
  	},

	render: function() {
		return React.createElement('div', {},
			React.createElement('button', {onClick: this.increment}, 'Licznik I ' + this.state.counter),
			React.createElement('button', {onClick: this.decrement}, 'Licznik II ' + this.state.counter2));
	},

	componentDidMount() {
		console.log('Liczniki gotowe!');
	},

	componentWillUnmount() {
		console.log('Zerowanie liczników.');
	},
});

var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app'));