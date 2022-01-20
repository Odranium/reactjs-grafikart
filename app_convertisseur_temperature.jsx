const scaleNames = {
	c: "Celsius",
	f: "Fahrenheit",
};

class TemperatureInput extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.props.onTemperatureChange(e.target.value);
	}

	render() {
		const { temperature } = this.props;
		const name = "scale" + this.props.scale;
		const scaleName = scaleNames[this.props.scale];
		return (
			<div className="form-group mb-4">
				<label htmlFor={name}>Température en {scaleName}</label>
				<input type="text" value={temperature} onChange={this.handleChange} id={name} className="mt-2 form-control" />
			</div>
		);
	}
}

function toCelsius(fahrenheit) {
	// prettier-ignore
	return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
	// prettier-ignore
	return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
	const value = parseFloat(temperature);
	if (Number.isNaN(value)) {
		return "";
	} else {
		return (Math.round(convert(value) * 100) / 100).toString();
	}
}

function Column2({ left, right }) {
	return (
		<div className="row">
			<div className="col-md-6">{left}</div>
			<div className="col-md-6">{right}</div>
		</div>
	);
}

function BoilingVertict({ celsius }) {
	if (celsius >= 100) {
		return (
			<div className="alert alert-danger" role="alert">
				L'eau bout !
			</div>
		);
	} else {
		return (
			<div className="alert alert-success" role="alert">
				L'eau ne bout pas.
			</div>
		);
	}
}

class Calculator extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			temperature: "",
		};
		this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
		this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
	}

	handleCelsiusChange(temperature) {
		this.setState({ scale: "c", temperature });
	}

	handleFahrenheitChange(temperature) {
		this.setState({ scale: "f", temperature });
	}

	render() {
		const { temperature, scale } = this.state;
		const celsius = scale === "c" ? temperature : tryConvert(temperature, toCelsius);
		const fahrenheit = scale === "f" ? temperature : tryConvert(temperature, toFahrenheit);
		return (
			<div className="container">
				<Column2
					left={<TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleCelsiusChange} />}
					right={<TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange} />}
				/>
				<BoilingVertict celsius={celsius} />
			</div>
		);
	}
}

ReactDOM.render(<Calculator />, document.querySelector("#app"));
