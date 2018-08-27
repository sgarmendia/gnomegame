import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import Range from 'rc-slider/lib/Range';
import Slider from 'rc-slider';
import Tooltip from 'rc-tooltip';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import '../css/Header.css'

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;

/* const handle = (props) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
}; */


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: '',
      weight: '',
      height: '',
    }
  }

  componentDidMount() {

    this.setState({  });
  }
  

  handleRadioClick = e => {
    this.setState({ checked: e.target.value });
  }

  getMax = (attr) => {
    const att = attr.toLowerCase()
    return Math.ceil(Math.max.apply(Math,this.props.data.map(g => +g[att])))
  }

  getMin = (attr) => {
    const att = attr.toLowerCase()
    return Math.round(Math.min.apply(Math,this.props.data.map(g => +g[att])))
  }

  onClickColor = e => {
    console.log(e.target.id);
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

  onClear = () => {
    this.props.clear()
    this.setState({ color: undefined });
  }

  render() {
    return (
      <div className='header'>
        <div className='searchgroup'>
        <input className='searchBox' 
               type='search'
               autoFocus='autofocus'
               placeholder='Search by name'
               onChange={this.props.search}
        />
        <button className='clearbutton' onClick={this.onClear}>CLEAR</button>
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
            {this.getColors()}
          </div>
        </div>}
      </div>
    );
  }
}

Header.propTypes = {
  search: PropTypes.func,
};

export default Header;