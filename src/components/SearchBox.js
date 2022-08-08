import { Component } from "react";
import './SearchBox.css'

class SearchBox extends Component {
  render() {
    const { handleChange } = this.props
    return (
      <input 
        className='search-box'
        type='search'
        placeholder='search superheroes'
        onChange={handleChange}
      />
    )
  }
}

export default SearchBox