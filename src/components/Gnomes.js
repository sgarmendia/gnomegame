import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/Gnomes.css'


class Photos extends Component {
  render() {
    return (
      <div className='gnomeContainer'>
        {this.props.data && this.props.data.map(gnome => {
          return (
            <div key={gnome.id} className='imgContainer'>
                <img src={gnome.thumbnail} alt={gnome.name}
                     onClick={this.props.selected}
                     id={gnome.id}
                />
                <div className='gnomeInfo' >{gnome.name}</div> 
            </div>
          )
        })}
      </div>
    );
  }
}

Photos.propTypes = {
  data: PropTypes.array,
  selected: PropTypes.func,
};

export default Photos;