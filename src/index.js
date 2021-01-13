import React from "react";
import ReactDOM from "react-dom";
import Counter from "./Counter";
import CounterForm from "./CounterForm";

import "./styles.css";

class App extends React.Component {
  state = {
    counter: 0
  };

  addClick = () => {
    this.setState({ counter: ++this.state.counter });
  };

  removeClick = () => {
    this.setState({ counter: --this.state.counter });
  };

  changeCounter = (number) => {
    this.setState({ counter: number });
  };

  render() {
    return (
      <div class="main">
        <h1>Incrémenter ou Décrémenter avec React</h1>
        <Counter
          number={this.state.counter}
          onAdd={this.addClick}
          onRemove={this.removeClick}
        />
        <CounterForm
          number={this.state.counter}
          onNumberChange={this.changeCounter}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
