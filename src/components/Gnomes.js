import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Photos extends Component {
  render() {
    return (
      <div className='gnomeContainer'>
        {this.props.data && this.props.data.map(gnome => {
          return (
            <div key={gnome.id} className='imgContainer'>
                <img src={gnome.thumbnail} alt='Gnome Image'
                     onClick={this.props.selected}
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