import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/Header.css'


class Header extends Component {
  render() {
    return (
      <div className='header'>
        <input className='searchBox' 
               type='search'
               autoFocus='autofocus'
               placeholder='Search by name'
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