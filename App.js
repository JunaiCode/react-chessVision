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