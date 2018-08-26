import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/Radio.css'

class Radio extends Component {
  render() {
    return (
      <div>
      <label className='radiolabel'>
        {this.props.label}
        <input type='radio' 
          value={this.props.label}
          checked={this.props.checked}
          onChange={this.props.click}
        />
        <span className="checkmark"></span>
      </label>
      </div>
    );
  }
}

Radio.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool,
  handleClick: PropTypes.func,
};

export default Radio;