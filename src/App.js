import React from 'react';
import logo from './logo.svg';
import './App.css';
import CharacterForm from './components/CharacterForm';
import FancyBorder from './components/FancyBorder';

function LeftSide(props)
{
  return(
    <div className="leftSide">
      {props.children}
    </div>
  )
}
function RightSide(props)
{
  return(
    <div className="rightSide">
      <h2>Right Side</h2>
      {props.children}
    </div>
  )
}
class Scoreboard extends React.Component {
  constructor()
  {
    super();
    this.state = {
      score: 0,
    }
  }
  myClickHandler = (event) =>
  {
    event.preventDefault();
    this.setState({
      score: this.state.score + 1,
    });
  }
  render()
  {
    return(
      <div className="scoreboard">
        <h3>Score</h3>
        <ScoreDisplay score={this.state.score} />
        <ScoreButton handleClick={this.myClickHandler} text="Click Me" />
      </div>
    )
  }
}
function ScoreButton(props)
{
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

function ScoreDisplay(props)
{
  return(
    <div className="scoreDisplay">{props.score}</div>
  )
}


function App() {
  return (
    <div className="App">
      <LeftSide>

            <CharacterForm color="green"/>
      </LeftSide>
      <RightSide>
        <Scoreboard />
      </RightSide>
    </div>
  );
}

export default App;
