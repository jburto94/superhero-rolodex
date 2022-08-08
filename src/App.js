import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      superheroes: [
        {
          name: 'Superman',
          id: 'bn4792jk'
        },
        {
          name: 'Invincible',
          id: '47hgbbjk'
        },
        {
          name: 'Hulk',
          id: 'asdfjb884r'
        },
        {
          name: 'Thor',
          id: 'ad7878fh7'
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.superheroes.map(hero => 
          <h1 key={hero.id}>{hero.name}</h1>  
        )}
      </div>
    );
  }
}

export default App;
