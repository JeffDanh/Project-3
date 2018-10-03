import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Navbar from './components/navigationBar';
import NavigationBar from './components/navigationBar';
import Search from './components/search'
import Champion from './components/champion';
// import PlayerCon from './container/playerContainer.js';
import apiData from './actions/apiData';
// import {createStore, applyMiddleware} from 'redux';
// import {Provider} from 'react-redux';
// import thunk from 'redux-thunk';
// import reducers from './reducers/index.js';

// let store = createStore(reducers, applyMiddleware(thunk))

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      champion: '',
      items: [],
      isLoaded: false,
    }
  }

  onChangeChampionName(newName){
    this.setState({
      champion: newName
    });
  }

  // componentDidMount(){
  //   var url2 = 'http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion/' + {...this.props.champion} + '.json';
  //   var url = 'http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion/Aatrox.json'
  //   fetch(url)
  //     .then(res => res.json())
  //     .then(json => {
  //       this.setState({
  //         isLoaded: true,
  //         items: json,

  //       })
  //     })
  // }

  
  
  render() {
    // var {  isLoaded, items } = this.state;

    // if(!isLoaded){
    //   return <div> Loading </div>;
    // }

    return (
      <div className="App">
        {/* <Navbar /> */}
        <NavigationBar />
        <Search changeName={this.onChangeChampionName.bind(this)}/>
        
        {/* <h1>Champion: {this.state.items.data.Aatrox.name}</h1>
        
        {this.state.items.data.Aatrox.lore} */}
        
        <Champion />
        {/* <PlayerCon></PlayerCon> */}

      </div>
    );
  }
}

function mapStateToProps(state){

  return{
    champion: state.champion
  }
}

function mapDispatchToProps(dispatch){

  return{
    onFetch: (response) => dispatch(apiData(response))
  }
}

var connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default connectedComponent;

// export default App;
