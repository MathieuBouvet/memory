import React, { Component } from "react";
import "./App.css";
import GuessCount from "./GuessCount";
import Card from "./Card.js";

class App extends Component {
	handleCardClick(card){
		console.log(card, "clicked");
	}
	render() {
		return (
			<div className="memory">
				<GuessCount guesses={0} />
				<Card card="😀" feedback="hidden" />
				<Card card="🎉" feedback="justMatched" />
				<Card card="💖" feedback="justMismatched" />
				<Card card="🎩" feedback="visible" />
				<Card card="🐶" feedback="hidden" />
				<Card card="🐱" feedback="justMatched" />
			</div>
		);
	}
}

export default App;