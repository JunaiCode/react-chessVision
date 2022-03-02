import "./styles.css"

/* Components */

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