import React from 'react';
import Board from './Board';
import circle from './img/circle.png'
import cross from './img/cross.png'

class Explore extends React.Component {
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
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([
        {
          squares: squares,
        },
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ? 'Go to move #' + move : 'Go to game start';
      return (
        <li key={move} className="movesItem" onClick={() => this.jumpTo(move)}>
          <div>{desc}</div>
        </li>
      );
    });

    let status;
    if (winner) {
      status = <p className="winner">Winner:{winner=="X" ?
        <img src={cross} className='icon' alt='cross'></img>
        : <img src={circle} className='icon' alt='circle'></img>}
        </p>
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
        <h1 className='heading'>Explore mode</h1>
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
          <ul className='moves'>{moves}</ul>
        </div>
      </div>
    );
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

export default Explore;
