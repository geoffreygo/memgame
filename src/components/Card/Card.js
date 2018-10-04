import React from "react";
import "./Card.css";

const Card = props => {

  const clickPic = () => {
    console.log("in clickPic");
    let element = document.getElementById(props.id);
    if (element.className === "card clicked") {
      props.updateTopScore(props.score);
      props.updateAlert("You lost :-( Go for 12 this time!");
      props.restartGame();
    } else {
      element.classList.add("clicked");
      props.changeScore();
    }
    props.rearrange();
  }

  return (    
    <div className="card" id={props.id} onClick={clickPic}>
      <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
  )
};

export default Card;