import React, { Component } from "react";

class Counter extends Component {
  render() {
    const { number, onAdd, onRemove } = this.props;

    return (
      <div>
        <h3>
          Le compteur est à : <span class="important-text">{number}</span>
        </h3>
        <p>
          <button onClick={() => onAdd()}>Ajouter</button>
          <button onClick={() => onRemove()}>Diminuer</button>
        </p>
      </div>
    );
  }
}

export default Counter;
