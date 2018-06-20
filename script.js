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
		return React.createElement('div', {},
			React.createElement('button', {onClick: this.increment}, 'Licznik ' + this.state.counter),
			React.createElement('button', {onClick: this.decrement}, 'Licznik ' + this.state.counter))
	},
	
	componentDidMount() {
		console.log('Liczniki gotowe!');
	},

	componentWillUnmount() {
		console.log('Zerowanie liczników.');
	},
});

var element = React.createElement(Counter);
var element2 = React.createElement(Counter);
var element3 = React.createElement(
	"div", {}, element, element2);

ReactDOM.render(element3, document.getElementById('app'));