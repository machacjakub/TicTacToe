import React from 'react';
import Board from './Board';
import circle from './img/circle.png'
import cross from './img/cross.png'
import {finnishIt, defend, decide} from './PvCLogic';

class PvC extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      stepNumber: 0,
      xIsNext: true,
      nextBegin: true,
      score:[0,0,0],
      i: 0,
    };
  }

  player(i) {
    let history = this.state.history.slice(0, this.state.stepNumber + 1);
    let current = history[history.length - 1];
    let squares = current.squares.slice();
    let scores = this.state.score;
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    if (calculateWinner(squares)=="X") {
      scores[0]++;
    }
    if (calculateWinner(squares)=="O") {
      scores[2]++;
    }
    if (calculateWinner(squares)==null && this.state.stepNumber==8) {
      scores[1]++;
    }
    this.setState({
      history: history.concat([
        {
          squares: squares,
        },
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
      score: scores,
      i: i,
    });
  }

  //--- This function basically handles the click and then executes player move and after that move of the computer
  async handleClick(i){
    let history = this.state.history.slice(0, this.state.stepNumber + 1);
    let current = history[history.length - 1];
    let squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    await this.player(i);  
    this.computer(i);
  }

  computer(i) {
    let history = this.state.history.slice(0, this.state.stepNumber + 1);
    let current = history[history.length - 1];
    let squares = current.squares.slice();
    let field = computerPlays(this.state.stepNumber, squares);
    i = field;
    let scores = this.state.score;
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    
    if (calculateWinner(squares)=="X") {
      scores[0]++;
    }
    if (calculateWinner(squares)=="O") {
      scores[2]++;
    }
    if (calculateWinner(squares)==null && this.state.stepNumber==8) {
      scores[1]++;
    }
    this.setState({
      history: history.concat([
        {
          squares: squares,
        },
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
      score: scores,
      i: i,
    });
  }

  //--- This function plays the first move when computer is on the move
  computerBegin() {
    let i = 4;
    let history = this.state.history.slice(0, this.state.stepNumber + 1);
    let current = history[history.length - 1];
    let squares = current.squares.slice();
    let field = computerPlays(this.state.stepNumber, squares);
    i = field;
    let scores = this.state.score;
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    //----------------------------------------------execution
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    
    if (calculateWinner(squares)=="X") {
      scores[0]++;
    }
    if (calculateWinner(squares)=="O") {
      scores[2]++;
    }
    if (calculateWinner(squares)==null && this.state.stepNumber==8) {
      scores[1]++;
    }
    this.setState({
      history: history.concat([
        {
          squares: squares,
        },
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
      score: scores,
      i: i,
    });
  }

  async newGameClick(step){
    await this.setState({
      stepNumber: step,
      xIsNext: !this.state.nextBegin,
      nextBegin: !this.state.nextBegin,
    });
    if(!this.state.nextBegin){
      this.computerBegin();
    }
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    let status;
    if (winner) {
      status = <p className="winner">Winner:{winner=="X" ?
        <img src={cross} className='icon' alt='cross'></img>
        : <img src={circle} className='icon' alt='circle'></img>}
        </p>;
      
    } else if(this.state.stepNumber==9){
        status = <p className="winner">Draw</p>;
    } else {
      status = <p className="winner">Next player: 
        {this.state.xIsNext ?
        <img src={cross} className='icon' alt='cross'></img>
        : <img src={circle} className='icon' alt='circle'></img>}
        </p>
    }

    return (
      <div className="game">
        <h1 className='heading'>Single player</h1>
        <div className="game-board"> 
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
            xIsNext={this.state.xIsNext}
            winner={winner}
            winSquares={calculateHighlight(current.squares)}
            draw={this.state.stepNumber==9 && !winner ? true : false}
          />
        </div>
        <div className="game-info">
          <div className='status'>{status}</div>
          <div className='center movesItem' onClick={() => this.newGameClick(0)}>New game</div>
          <table className='score'>
            <tr className='winner'>
              <td><img src={cross} className='iconScore' alt='cross'></img></td>
              <td>Draw</td>
              <td><img src={circle} className='iconScore' alt='circle'></img></td>
            </tr>
            <tr className='winner'>
              <td>{this.state.score[0]}</td>
              <td>{this.state.score[1]}</td>
              <td>{this.state.score[2]}</td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

//--- Computer play logic
function computerPlays(step, squares){
  if(squares[4]==null){
    return 4;
  }  else if (step == 1) {
    return 0;
  } else if (finnishIt(squares)) {
    return finnishIt(squares);
  } else if (step == 3 && squares[8] == 'X' && squares[4] == 'X') {
    return 2;
  } else if (step == 3 && ((squares[8] == 'X' && squares[0] == 'X') || (squares[2] == 'X' && squares[6] == 'X' ))){
    return 1;
  } else if (defend(squares)) {
    return defend(squares);
  } else {
    return decide(squares);
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function calculateHighlight(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return lines[i];
      }
    }
    return null;
  }

export default PvC;
