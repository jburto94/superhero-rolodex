import { Component } from "react";
import Card from "./Card";
import './CardList.css'

class CardList extends Component {
  render() {
    const { superheroes } = this.props
    return (
      <div class='card-list'>
        {superheroes
          .map(hero => <Card key={hero.id} superhero={hero} />)
        }
      </div>
    )
  }
}

export default CardList