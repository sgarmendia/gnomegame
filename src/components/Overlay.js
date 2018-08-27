import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Friends from './Friends';
import './../css/Overlay.css';

class Overlay extends Component {
  render() {
    const { display, unselect } = this.props
    return (
      <div className='overlay' 
           style={{ display: `${display ? 'block' : 'none'}` }}
           onClick={unselect}>
        <img className='overlayimg' src={this.props.selected && this.props.selected.thumbnail} alt='thumbnail'/>
        <div className='friendsdata'>
          <div className='overlayTitle'>Name: {this.props.selected ? this.props.selected.name : 'N/A'}</div>
          <div className='overlayInfo'>
            Weight & Height: {`${this.props.selected ? this.props.selected.weight : 'N/A'} - ${this.props.selected ? this.props.selected.height : 'N/A'}`}
          </div>
          <div className='overlayOwner'>Age: {this.props.selected ? this.props.selected.age : 'N/A'}</div>
          <div className='overlayDate'>Hair: {this.props.selected ? this.props.selected.hair_color : 'N/A'}</div>
          <Friends friends={this.props.selected && this.props.selected.friends} data={this.props.data} />
        </div>
      </div>
    )
  }
}

Overlay.propTypes = {
  display: PropTypes.bool,
  data: PropTypes.array,
  unselect: PropTypes.func,
  selected: PropTypes.object,
};

export default Overlay;