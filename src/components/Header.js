import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import Range from 'rc-slider/lib/Range';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import '../css/Header.css'

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

class Header extends Component {
  state = {}

  getMax = (attr) => {
    const att = attr.toLowerCase()
    return Math.ceil(Math.max.apply(Math,this.props.data.map(g => +g[att])))
  }

  getMin = (attr) => {
    const att = attr.toLowerCase()
    return Math.round(Math.min.apply(Math,this.props.data.map(g => +g[att])))
  }

  onClickColor = e => {
    const color = e.target.id
    this.setState({ color: color },()=>{
      this.props.color(color)
    });
  }

  getColors = () => {
    return this.props.data.length > 0 && this.props.data
      .reduce((acc,cur) => acc.includes(cur.hair_color) ? acc : [...acc, cur.hair_color] , [])
      .map((color,i) => (
        <div key={i} onClick={this.onClickColor} id={color}
            style={{ color: `${color.toLowerCase()}`, 
                     cursor: 'pointer', 
                     backgroundColor: `${this.state.color === color ? color.toLowerCase() : 'transparent'}`}}>
          {color}
        </div>
      )
    )
  }

  onSlideAge = e => {
    this.props.slide(e,'age')
  }

  onSlideWeight = e => {
    this.props.slide(e,'weight')
  }

  onSlideHeight = e => {
    this.props.slide(e,'height')
  }

  onSearch = e => {
    const search = e.target.value
      this.props.search(search)
  }

  onClearColor = () => {
    this.setState({ color: undefined },()=>{
      this.props.color('')
    });
  }

  render() {
    return (
      <div className='header'>
        <div className='searchgroup'>
        <input className='searchBox' 
               type='search'
               autoFocus='autofocus'
               placeholder='Search gnomes by name'
               onChange={this.onSearch}
        />
        </div>
        <span className='slidevalue'>Filter by:</span>
        {this.props.data.length > 0 &&
        <div className='filtergroup'>
          <div className='range'>
            <div className='slide'>
              <span className='slidevalue'>Age:</span>
              <Range min={this.getMin('age')} max={this.getMax('age')} 
                defaultValue={[this.getMin('age'),this.getMax('age')]} 
                tipFormatter={value => `${value}`} allowCross={false}
                onChange={this.onSlideAge}
              />
            </div>
            <div className='slide'>
              <span className='slidevalue'>Weight:</span>
              <Range min={this.getMin('weight')} max={this.getMax('weight')} 
                defaultValue={[this.getMin('weight'),this.getMax('weight')]} 
                tipFormatter={value => `${value}`} allowCross={false}
                onChange={this.onSlideWeight}
              />
            </div>
            <div className='slide'>
              <span className='slidevalue'>Height:</span>
              <Range min={this.getMin('height')} max={this.getMax('height')} 
                defaultValue={[this.getMin('height'),this.getMax('height')]} 
                tipFormatter={value => `${value}`} allowCross={false}
                onChange={this.onSlideHeight}
              />
            </div>
          </div>
          <div className='hairColor'>
            <span className='slidevalue'>Hair color:</span>
            <div onClick={this.onClearColor}
              style={{ color: 'white', cursor: 'pointer'}}>
              None
            </div>
            {this.getColors()}
            <span className='slidevalue'>Results:   {this.props.results}</span>
          </div>
        </div>}
      </div>
    );
  }
}

Header.propTypes = {
  search: PropTypes.func,
  slide: PropTypes.func,
  data: PropTypes.array,
  results: PropTypes.number,
  color: PropTypes.func,
};

export default Header;