import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Header from "./components/Header";
import Container from "./components/Container";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score: 0,
    topScore: 0
  };
  
  restartGame = () => {
    let cardDivs = document.getElementsByClassName("card");
    console.log(cardDivs);
    for (let div of cardDivs) {
      div.classList.remove("clicked");
    };
    console.log(cardDivs); 
    this.setState({ score: 0 });
    // this.updateAlert("12 is your goal!");
  }

  updateAlert = text => {
    console.log("in updateAlert", text);
    let newAlert = document.getElementById("alert");
    newAlert.innerHTML = text;
  }

  updateTopScore = score => {
    if (score > this.state.topScore) {
      this.setState({ topScore: score });
      this.updateAlert("You have a new high score!");
    }
  }

  changeScore = () => {
    console.log(this.state.score);
    if (this.state.score === 11) {
      this.setState({ score: this.state.score + 1 });
      console.log(this.state.score);
      this.updateAlert("You won!! Maximum high score achieved!!");
      this.updateTopScore(12);
      this.restartGame();
    } else {      
      this.setState({ score: this.state.score + 1 });
    }
  }

  rearrange = () => {
    const newFriends = this.state.friends.sort(function(a, b){return 0.5 - Math.random()});
    this.setState({ friends: newFriends });
    };

  


  render() {
    return (
      <Container>
      <Header 
          score={this.state.score}
          topScore={this.state.topScore}
          />
          <Title>Try to click every hero without clicking the same hero twice!</Title>
      <Wrapper>
        {this.state.friends.map(friend => (
          <Card
            id={friend.id}
            key={friend.id}
            image={friend.image}
            name={friend.name}
            restartGame={this.restartGame}
            changeScore={this.changeScore}
            rearrange={this.rearrange}
            clickPic={this.clickPic}
            updateTopScore={this.updateTopScore}
            score={this.state.score}
            updateAlert={this.updateAlert}
          />
        ))}
      </Wrapper>
      </Container>
    );
  }
}

export default App;
