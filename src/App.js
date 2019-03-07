import React, { Component } from 'react';
import CharacterCard from "./Components/CharacterCard";
import Wrapper from "./Components/Wrapper";
import cardData from "./CharacterData.json";
import './App.css';



class App extends Component {

  state = {
    cardData: [...cardData],
    currentScore: 0,
    topScore: 0

  };

  handleCardClick = cardId => {
    let isCorrect = false;
    const cardData = [...this.state.cardData];

    cardData.forEach(card => {
      if (card.id === cardId) {
        if (!card.clicked) {
          isCorrect = true;
          card.clicked = true;
        }
      }
    });
    isCorrect ? this.handleCorrect(cardData) : this.handleIncorrect(cardData);

  };

  handleCorrect = cardData => {
    const shuffledCards = cardData.sort(() => .5 - Math.random());

    let topScore = this.state.topScore;
    const currentScore = this.state.currentScore + 1;

    if (currentScore > this.state.topScore) {
      topScore = currentScore;
    }
    this.setState({
      cardData: shuffledCards,
      currentScore: currentScore,
      topScore: topScore
    })

  }

  handleIncorrect = cardData => {
    const shuffledCards = cardData.sort(() => .5 - Math.random());

    shuffledCards.forEach(card => card.clicked = false);

    this.setState({
      cardData: shuffledCards,
      currentScore: 0
    })

  };

  render() {
    console.log(this.state.cardData);
    return (
      <React.Fragment>
        <nav className="navbar navbar-dark bg-dark d-flex justify-space-between">
          <span className="scoreInfo text-light">
            Current Score= {this.state.currentScore} || Top Score= {this.state.topScore}
          </span>
        </nav>
        <Wrapper>
          <h1 className="title">Click Memory Game with React!</h1>
          <hr />

          {this.state.cardData.map(character => (

            <CharacterCard
              key={character.id}
              name={character.name}
              image={character.ref}
              onClick={() => this.handleCardClick(character.id)}
            />

          ))}
        </Wrapper>
      </React.Fragment>

    );
  }
}

export default App;