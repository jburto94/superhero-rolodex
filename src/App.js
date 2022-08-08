import { Component } from 'react';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
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
        <h1>Superhero Rolodex</h1>
        <SearchBox handleChange={onSearchChange} />
        <CardList superheroes={filteredHeroes} />
      </div>
    );
  }
}

export default App;
