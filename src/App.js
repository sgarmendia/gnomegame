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
      if(this.mounted) { this.setState({ data, gnomes: data }) }
    } catch (error) {
      if(this.mounted) { this.setState({ error }) }
    }
  }

  
  handleSearch = e => {
    const gnomes = this.state.data.filter(g => g.name.toLowerCase().includes(e.target.value.toLowerCase()))
    this.setState({ gnomes });

  }

  handleClick = e => {
    const selectedGnome = this.state.gnomes.find(g => g.id === +e.target.id)
    this.setState({ selectedGnome },() => {
      this.setState({ overlay: true });
    });
  }

  handleHide = e => {
    this.setState({ overlay: false, selectedGnome: {} });
  }

  componentWillUnmount() {
    this.mounted = false
  }
  

  render() {
    return (
      <div className='container'>
        <Header search={this.handleSearch} />
        {this.state.error
          ? <h2>Oops, something went wrong!</h2>
          : <Gnomes 
              data={this.state.gnomes}
              selected={this.handleClick}
            />
        }
        <Overlay 
          data={this.state.selectedGnome}
          display={this.state.overlay}
          unselect={this.handleHide}
        />
      </div>
    )
  }
}

export default App;

