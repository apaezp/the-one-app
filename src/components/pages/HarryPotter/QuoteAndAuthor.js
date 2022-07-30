import "./QuoteAndAuthor.css";
import React from "react";

class QuoteAndAuthor extends React.Component {
  render() {
    const randomColor = this.props.displayColor();
    const html = document.documentElement;
    html.style.backgroundColor = randomColor;

    return (
      <div style={{ backgroundColor: "" }} className="quotebox">
        <div
          className="fadeIn"
          key={Math.random()}
          style={{ color: "black" }}
        >
          <h1 id="quote">"{this.props.quote}"</h1>
          <h5 id="author">
            --{this.props.author ? this.props.author : "Unknown"}.
          </h5>
        </div>
        <button
          style={{ backgroundColor: "white" }}
          id="newquote"
          onClick={this.props.handleClick}
        >
          New quote
        </button>
      </div>
    );
  }
}

export default QuoteAndAuthor;

