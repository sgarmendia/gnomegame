import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './../css/Overlay.css';

class Overlay extends Component {
  render() {
    const { display, unselect } = this.props
    return (
      <div className='overlay' 
           style={{ display: `${display ? 'block' : 'none'}` }}
           onClick={unselect}>
        <img src={this.props.data && this.props.data.thumbnail} alt='thumbnail'/>
        <div className='overlayTitle'>Name: {this.props.data ? this.props.data.name : 'N/A'}</div>
        <div className='overlayOwner'>Age: {this.props.data ? this.props.data.age : 'N/A'}</div>
        <div className='overlayInfo'>
          Weight & Height: {`${this.props.data ? this.props.data.weight : 'N/A'} ${this.props.data ? this.props.data.height : 'N/A'}`}
        </div>
        <div className='overlayDate'>Hair: {this.props.data ? this.props.data.hair_color : 'N/A'}</div>
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