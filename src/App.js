import './App.css';
import React, { Component } from "react";

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
class App extends Component{
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(res => this.setState({ monsters: res }))
      // .then(() => console.log(this.state));
    
  }

  render() {

    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter(monster => (
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    ))

    return (
      <div className="App">
        <h1> Monsters Rolodex </h1>
        <SearchBox placeholder="Search Monsters" handleChange={ e => (this.setState({searchField: e.target.value}))}/>
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App;
  