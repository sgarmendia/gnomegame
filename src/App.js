import React, { Component } from 'react';
import BrastlewarkAPI from './Api/BrastlewarkAPI';
import Gnomes from './components/Gnomes';
import Header from './components/Header';


class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        brastlewarkData: [],
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
      const brastlewarkData = await BrastlewarkAPI.fetchData()
      if(this.mounted) { this.setState({ brastlewarkData }) }
    } catch (error) {
      if(this.mounted) { this.setState({ error }) }
    }
  }

  
  handleSearch = e => {
    const search = e.target.value
  }

  handleClick = e => {

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
              data={this.state.brastlewarkData}
              selected={this.handleClick}
            />
        }
      </div>
    )
  }
}

export default App;

