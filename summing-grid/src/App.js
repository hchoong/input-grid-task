import React from 'react';
import InputCell from './InputCell'

import { summing } from './func'

class App extends React.Component {
  constructor(props) {
    super(props)

    // func initiated from child to update the parent's state
    this.cellUpdated = this.cellUpdated.bind(this)

    // parent holds the cell value on the state
    this.state = {
      cellValues: Array(3).fill('')
    }
  }

  cellUpdated(index, value) {
    const { cellValues } = this.state

    // don't mutate the original array values directly
    const newArr = [
      ...cellValues.slice(0, index),
      value,
      ...cellValues.slice(index + 1)
    ]
    this.setState({
      cellValues: newArr
    })
  }

  render() {
    const { cellValues } = this.state
    const sum = summing(cellValues)

    return (
      <div className="App">
        <div className="grid">
          {cellValues.map((val, index) =>
            <InputCell key={index} index={index} value={val} cellUpdated={this.cellUpdated} />
          )}
          <div className="cell cell-total">
            {sum}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
