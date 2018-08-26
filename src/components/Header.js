import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Header extends Component {
  render() {
    return (
      <div className='header'>
        <input className='searchBox' 
               type='search'
               autoFocus='autofocus'
               placeholder='Explore the world...'
               onChange={this.props.search}
        />
      </div>
    );
  }
}

Header.propTypes = {
  search: PropTypes.func,
};

export default Header;