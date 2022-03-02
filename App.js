import "./styles.css"
import REACT from 'react'
/* Components */

class Square extends React.Component {
    render() {
      return (
        <button className="square">
          {this.props.value}
        </button>
      );
    }
  }
  
  class Board extends React.Component {
    renderSquare(i) {
      return <Square value={i} />;
    }
  
    render() {
      const status = 'Next player: X';
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  
  

function Square(isEven, props) {

    const class_ = isEven ? "square__colored" : "square";

    return (
        <button className={class_} onClick={props.onClick}>
            {props.value}
        </button>
    );
}

class Board extends React.Component {

    renderSquare(i) {
        return(
            <Square 
                value={this.props.squares[i]}
                onClick={props.onClick(i)}
            />
        );
    }

    render () {
        return(
            <div>

            </div>
        );
    }
}

/* -------------------------------------------- */

ReactDOM.render(<Square value={"Hi"}/>, document.getElementById("root"));