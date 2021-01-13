import React, { Component } from "react";

class CounterForm extends Component {
  chooseNumber = (event) => {
    const value = event.currentTarget.value;
    this.props.onNumberChange(value);
  };

  render() {
    return (
      <form>
        <label>Choisir de régler le compteur à : </label>
        <input onChange={this.chooseNumber} type="number" />
      </form>
    );
  }
}

export default CounterForm;
