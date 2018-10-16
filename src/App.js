import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {
  state = {
    ninjas: [
      {name: 'Marcia', age: 31, color: 'Roxa', id: 1},
      {name: 'Nicollas', age: 27, color: 'Preto', id: 2},
      {name: 'Paulinho', age: 2, color: 'Cinza', id: 3},
    ]
  }

  addNinja = (ninja) => {
    ninja.id = Math.random();
    let newNinja = [...this.state.ninjas, ninja]
    this.setState({
      ninjas: newNinja
    })
  }

  render() {
    return ( 
      <div className="App">
        <h1>Olar</h1>
        <Ninjas ninjas={this.state.ninjas}/>
        <AddNinja addNinja={this.addNinja} />
      </div>
    )
  }
}

export default App;
