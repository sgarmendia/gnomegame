import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/Gnomes.css'
import orc from '../css/Assets/orc.png';


class Photos extends Component {
  render() {
    return (this.props.data && this.props.data.length === 0 
    ? <div className='emptygnomes'>
          <img src={orc} alt={'No gnomes'} />
      </div>
    : <div className='gnomeContainer'>
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