import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './../css/Overlay.css';

class Overlay extends Component {
  render() {
    const { display, unselect } = this.props
    const { thumbnail, name, age, weight, height, hair_color } = this.props.data
    return (
      <div className='overlay' 
           style={{ display: `${display ? 'block' : 'none'}` }}
           onClick={unselect}>
        <img src={thumbnail} alt='thumbnail'/>
        <div className='overlayTitle'>Name: {name ? name : 'N/A'}</div>
        <div className='overlayOwner'>Age: {age ? age : 'N/A'}</div>
        <div className='overlayInfo'>Weight & Height: {`${weight} ${height}`}</div>
        <div className='overlayDate'>Hair: {hair_color ? hair_color : 'N/A'}</div>
      </div>
    )
  }
}

Overlay.propTypes = {
  display: PropTypes.bool,
  data: PropTypes.object,
  src: PropTypes.string,
  unselect: PropTypes.func,
};

export default Overlay;