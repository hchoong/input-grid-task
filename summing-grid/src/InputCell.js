import React from 'react';
import PropTypes from 'prop-types'

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

export default InputCell