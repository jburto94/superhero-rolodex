import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const database = "https://my-json-server.typicode.com/jburto94/superhero-rolodex/superheroes";

class App extends Component {
  constructor() {
    super();

    this.state = {
      superheroes: [],
      filter: ''
    }
  }

  componentDidMount() {
    fetch(database)
      .then(response => response.json())
      .then(superheroes => this.setState({ superheroes: superheroes }))
  }

  onSearchChange = event => {
    this.setState({ filter: event.target.value.toLowerCase() })
  }

  render() {
    const { filter, superheroes } = this.state
    const { onSearchChange } = this

    const filteredHeroes = superheroes
      .filter(hero => hero.name.toLowerCase().includes(filter))

    return (
      <div className="App">
        <input 
          className='search-box'
          type='search'
          placeholder='search superheroes'
          onChange={onSearchChange}
        />
        {filteredHeroes
          .map(hero => <h1 key={hero.id}>{hero.name}</h1>)
        }
      </div>
    );
  }
}

export default App;
