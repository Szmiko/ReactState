var Counter = React.createClass({
	getDefaultProps: function() { 
		console.log('Wartości początkowe liczników: ');
	},

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

	componentWillMount() {
    	console.log('Liczniki ładowane.');
  	},

  	componentWillReceiveProps() {
  		console.log('Nastąpiło kliknięcie, licznika.');
  	},

	render: function() {
		return React.createElement('div', {onClick: this.increment},
			React.createElement('span', {}, 'Licznik nr 1 ' + this.state.counter),
		);
		React.createElement('div', {onClick: this.decrement},
			React.createElement('span', {}, 'Licznik nr 2 ' + this.state.counter),
		);
	},

//	shouldComponentUpdate(nextProps, nextState) {
//		return
//			true;
//		console.log('Zmiana wartości licznika.');
//	},

	componentDidMount() {
		console.log('Liczniki gotowe!');
	},

	componentWillUnmount() {
		console.log('Zerowanie liczników.');
	},
});

var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app'));
