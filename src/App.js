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
    window.location.reload();
  }

  changeScore = () => {
    if (this.state.score < 12) {
      this.setState({ score: this.state.score + 1 });
    } else {
      // put up winning message
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
      <Wrapper>
        <Title></Title>
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
          />
        ))}
      </Wrapper>
      </Container>
    );
  }
}

export default App;
