import { Component } from "react";
import './Card.css';

class Card extends Component {
  render() {
    const { image, name, alternateIdentity } = this.props.superhero

    return (
      <div className='card-container'>
        <img src={image} alt='superhero'/>
        <h2>{name}</h2>
        <h3 className='secret-identity'>{alternateIdentity}</h3>
      </div>
    )
  }
}

export default Card