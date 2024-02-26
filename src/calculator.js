import React from "react";

export class Calculator extends React.Component {
	constructor() {
		super();
		this.state = {
			screenText: " ",
		};
	}

	handleButtonClick = (text) => {
		this.setState((prevState) => ({
			screenText: prevState.screenText + text,
		}));
	};

	render() {
		return (
			<div className="calculator">
				<div className="screen">{this.state.screenText}</div>
				<div>
					<button onClick={() => this.handleButtonClick("+")}>+</button>
					<button onClick={() => this.handleButtonClick("-")}>-</button>
					<button onClick={() => this.handleButtonClick("/")}>/</button>
					<button onClick={() => this.handleButtonClick("*")}>*</button>
				</div>
				<div>
					<button onClick={() => this.handleButtonClick("1")}>1</button>
					<button onClick={() => this.handleButtonClick("2")}>2</button>
					<button onClick={() => this.handleButtonClick("3")}>3</button>
					<button onClick={() => this.handleButtonClick("sin")}>sin</button>
				</div>
				<div>
					<button onClick={() => this.handleButtonClick("4")}>4</button>
					<button onClick={() => this.handleButtonClick("5")}>5</button>
					<button onClick={() => this.handleButtonClick("6")}>6</button>
					<button onClick={() => this.handleButtonClick("cos")}>cos</button>
				</div>
				<div>
					<button onClick={() => this.handleButtonClick("7")}>7</button>
					<button onClick={() => this.handleButtonClick("8")}>8</button>
					<button onClick={() => this.handleButtonClick("9")}>9</button>
					<button onClick={() => this.handleButtonClick("tan")}>tan</button>
				</div>
			</div>
		);
	}
}
