import React, { Component } from 'react';
// import Navbar from './components/navigationBar';
import NavigationBar from './components/navigationBar';
import Search from './components/search'
import Player from './components/player';
import PlayerCon from './container/playerContainer.js';
// import {createStore, applyMiddleware} from 'redux';
// import {Provider} from 'react-redux';
// import thunk from 'redux-thunk';
// import reducers from './reducers/index.js';

// let store = createStore(reducers, applyMiddleware(thunk))

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentWillMount(){
    
  }

  componentDidMount(){
    fetch('http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion/Aatrox.json')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,

        })
      })
  }
  
  render() {
    var {  isLoaded, items } = this.state;

    if(!isLoaded){
      return <div> Loading </div>;
    }

    return (
      <div className="App">
        {/* <Navbar /> */}
        <NavigationBar />

        <h1>Summoner</h1>
        {this.state.items.data.Aatrox.lore}

        <Search />
        <Player />
        <PlayerCon></PlayerCon>

        {/* <ul>
          {items.map(item => (
            <li key={item.id}>
              Name: {item.name}
            </li>
          ))}
        </ul> */}

        <div >
          <ul>
            {/* {this.state.items.map(item => (
              <li key={item.id}>
                Name: {item.name}
              </li>
            ))} */}
          </ul>
        </div>

      </div>
    );
  }
}

export default App;
