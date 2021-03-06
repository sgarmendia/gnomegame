import React, { Component } from 'react';
import BrastlewarkAPI from './Api/BrastlewarkAPI';
import Gnomes from './components/Gnomes';
import Header from './components/Header';
import Overlay from './components/Overlay';


class App extends Component {
  constructor(props) {
  super(props);
    this.state = {
      data: [],
      gnomes: [],
      age: [],
      weight: [],
      height: [],
      hairColor: [],
      profession: [],
      search: [],
      selectedGnome: {},
      overlay: false,
      error: null,
    }
  }

  componentDidMount() {
    this.mounted = true
    this.getData()
  }

  getData = async () => {
    try {
      const data = await BrastlewarkAPI.fetchData()
      if(this.mounted) { this.setState({ data, gnomes: data, search: data }) }
    } catch (error) {
      if(this.mounted) { this.setState({ error }) }
    }
  }

  handleClick = e => {
    const selectedGnome = this.state.data.find(g => g.id === +e.target.id)
    this.setState({ selectedGnome },() => {
      this.setState({ overlay: true });
    });
  }

  handleHide = e => {
    this.setState({ overlay: false, selectedGnome: {} });
  }

  handleSearch = e => {
    const search = this.state.data.filter(g => g.name.toLowerCase().includes(e.toLowerCase()))
    this.setState({ search },() => {
      this.globalFilter()
    });
  }

  handleSlide = ([ min, max ],att) => {
    switch (att) {
      case 'age':
        const age = this.state.data.filter(g => +g[att] >= min && +g[att] <= max)
        this.setState({ age });
        break;
      case 'weight':
        const weight = this.state.data.filter(g => +g[att] >= min && +g[att] <= max)
        this.setState({ weight });
        break;
      case 'height':
        const height = this.state.data.filter(g => +g[att] >= min && +g[att] <= max)
        this.setState({ height });
        break;
      default:
        break;
    }
    this.globalFilter()
  } 

  colorFilter = (color) => {
    const hairColor = this.state.data.filter(g => g.hair_color === color)
    this.setState({ hairColor },() => {
      this.globalFilter()
    });
  }

  profFilter = (prof) => {
    const profession = this.state.data.filter(g => g.professions.includes(prof))
    this.setState({ profession },() => {
      this.globalFilter()
    });
  }

  globalFilter = () => {
    const searchSet = new Set(this.state.search)
    const ageSet = new Set(this.state.age.length === 0 ? this.state.data : this.state.age)
    const weightSet = new Set(this.state.weight.length === 0 ? this.state.data : this.state.weight)
    const heightSet = new Set(this.state.height.length === 0 ? this.state.data : this.state.height)
    const hairSet = new Set(this.state.hairColor.length === 0 ? this.state.data : this.state.hairColor)
    const professionSet = new Set(this.state.profession.length === 0 ? this.state.data : this.state.profession)
    const intersection = new Set(
      [...searchSet]
        .filter(g => ageSet.has(g))
        .filter(g => weightSet.has(g))
        .filter(g => heightSet.has(g))
        .filter(g => hairSet.has(g))
        .filter(g => professionSet.has(g))
    )
    const gnomes = [...intersection]
    this.setState({ gnomes });
  }

  componentWillUnmount() {
    this.mounted = false
  }
  

  render() {
    return (
      <div className='container'>
        <Header 
          data={this.state.data}
          results={this.state.gnomes.length}
          search={this.handleSearch}
          slide={this.handleSlide}
          color={this.colorFilter}
          prof={this.profFilter}
        />
        {this.state.error
          ? <h2>Oops, something went wrong!</h2>
          : <Gnomes 
              data={this.state.gnomes}
              selected={this.handleClick}
            />
        }
        <Overlay 
          data={this.state.data}
          selected={this.state.selectedGnome}
          display={this.state.overlay}
          unselect={this.handleHide}
        />
      </div>
    )
  }
}

export default App;

