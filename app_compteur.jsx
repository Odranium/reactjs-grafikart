function WelcomeFunc({ name, children }) {
	return (
		<div>
			<h1>Bonjour {name}</h1>
			<p>{children}</p>
		</div>
	);
}

class Welcome extends React.Component {
	render() {
		return (
			<div>
				<h1>Bonjour {this.props.name}</h1>
				<p>{this.props.children}</p>
				< Increment />
			</div>
		);
	}
}

class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = { date: new Date() };
		this.timer = null;
	}

	componentDidMount() {
		this.timer = window.setInterval(this.tick.bind(this), 1000);
	}

	componentWillUnmount() {
		windows.clearInterval(this.timer);
	}

	tick() {
		this.setState({ date: new Date() });
	}

	render() {
		return <div>Il est {this.state.date.toLocaleTimeString()}</div>;
	}
}

class Increment extends React.Component {
	constructor(props) {
		super(props);
		this.state = { cpt: props.start, timer: null };
	}

	componentDidMount() {
		this.play();
	}

	componentWillUnmount() {
		window.clearInterval(this.state.timer);
	}

	increment() {
		// Mieux vaut utiliser une fonction ici pour éviter les problèmes d'état
		this.setState(function (state, props) {
			return { cpt: state.cpt + props.step };
		});
	}

	play() {
		window.clearInterval(this.state.timer);
		this.setState({ timer: window.setInterval(this.increment.bind(this), 1000) });
	}

	pause() {
		window.clearInterval(this.state.timer);
		this.setState({ timer: null });
	}

	reset() {
		this.setState({ cpt: 0 });
	}

	render() {
		return (
			<div>
				Compteur = {this.state.cpt}
				{this.state.timer ? <button onClick={this.pause.bind(this)}>Pause</button> : <button onClick={this.play.bind(this)}>Play</button>}
				<button onClick={this.reset.bind(this)}>Reset</button>
			</div>
		);
	}
}

Increment.defaultProps = {
	start: 0,
	step: 1,
};

class ManualIncrementer extends React.Component {
	constructor(props) {
		super(props);
		this.state = { n: 0 };
	}

	increment() {
		this.setState((state, props) => ({ n: state.n + 1 }));
	}

	render() {
		return (
			<div>
				Valeur: {this.state.n} <button onClick={this.increment.bind(this)}>Incrémenter</button>
			</div>
		);
	}
}

ReactDOM.render(<Welcome name="Jean">Bonjour tout le monde</Welcome>, document.querySelector("#app"));
