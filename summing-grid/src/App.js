import React from 'react';
import PropTypes from 'prop-types'

const summing = (arr) => arr.reduce((sum, ele) => sum + Number.parseFloat(ele || 0), 0)

class InputCell extends React.Component {
  constructor(props) {
    super(props)
    this.onInputChange = this.onInputChange.bind(this)
  }
  onInputChange(e) {
    const value = e.target.value
    this.props.cellUpdated(this.props.index, value)
  }

  render() {
    const { value } = this.props
    return (
      <div className="cell">
        <input type="text" value={value} onChange={this.onInputChange} placeholder="number" />
      </div>
    )
  }
}

InputCell.propTypes = {
  index: PropTypes.number.isRequired,
  cellUpdated: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
}

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
