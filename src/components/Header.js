import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radio from '../components/Radio';
import '../css/Header.css'


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: 'Weight'
    }
  }
  
  handleRadioClick = e => {
    this.setState({ checked: e.target.value });
  }

  getMax = () => {
    const att = this.state.checked.toLowerCase()
    console.log(Math.max.apply(Math,this.props.data.map(g => +g[att])));
    return Math.max.apply(Math,this.props.data.map(g => +g[att]))
  }

  getMin = () => {
    const att = this.state.checked.toLowerCase()
    console.log(Math.min.apply(Math,this.props.data.map(g => +g[att])))
    return Math.min.apply(Math,this.props.data.map(g => +g[att]))
  }

  onSlide = e => {
    this.setState({ slide: e.target.valueAsNumber });
    this.props.slide(e.target.valueAsNumber,this.state.checked)
  }

  render() {
    return (
      <div className='header'>
        <input className='searchBox' 
               type='search'
               autoFocus='autofocus'
               placeholder='Search by name'
               onChange={this.props.search}
        />
        <div className='filtergroup'>
          <div className='radiogroup'>
            <Radio label={'Weight'} 
              checked={this.state.checked === 'Weight'}
              click={this.handleRadioClick}
            />
            <Radio label={'Height'} 
              checked={this.state.checked === 'Height'}
              click={this.handleRadioClick}
            />
            <Radio label={'Age'} 
              checked={this.state.checked === 'Age'}
              click={this.handleRadioClick}
            />
          </div>
          <span className='slidevalue'>{this.state.slide}</span>
          <div className='wsliderwrapper1'>
            <input type='range' 
              min={this.getMin()} 
              max={this.getMax()} 
              defaultValue={this.getMax()} 
              className="slider" id="wslider" 
              onChange={this.onSlide}/>
          </div>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  search: PropTypes.func,
};

export default Header;