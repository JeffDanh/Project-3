import React, { Component } from 'react';
import axios from 'axios';

class Search extends Component {
    constructor(props){
        super(props)
        this.state = {
            champion: '',
            items: [],
            id: '',
            lore: '',
            isLoaded: false
        }
        this.handleChampionChange = this.handleChampionChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleChampionChange(event) {
        //const champion = event.target.value.trim()
    
        this.setState({ champion: event.target.value })

        // this.props.changeName(this.state.champion);

        // var url = 'http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion/' + champion + '.json';
        // axios.get(url)
        //     .then(response => {
        //         this.setState({
        //             items: response,
        //             isLoaded: true
        //         })
        //     })
        // fetch(url)
        //     .then(res => res.json())
        //     .then(json => {
        //         this.setState({
        //             isLoaded: true,
        //             items: json
        
        //         })
        //     })
    }

    handleSubmit(event) {
        event.preventDefault();

        this.getURL();

        // console.log(this.state.items.data[this.state.champion]);
        //console.log("data: " + this.state.items);
        // window.location = `/champions/${this.state.champion}`

        //console.log("state: "+ this.state.items);
    }

    getURL(){
        this.setState({ isLoaded: true });

        var champion = this.Capitalize(this.state.champion);
        var url = 'http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion/' + champion + '.json';
        fetch(url)
            .then(res => res.json())
            .then(json => {
                console.log(json)
                this.setState({
                    isLoaded: true,
                    items: json,
                    id: json.data[this.Capitalize(this.state.champion)].id,
                    lore: json.data[this.Capitalize(this.state.champion)].lore
                }, () => {
                    console.log("state: " + this.state.items.data[this.Capitalize(this.state.champion)].id)
                    console.log("id: " + this.state.id)
                    console.log("lore: " + this.state.lore)
                })
            })
    }

    Capitalize(str){
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    //componentWillMount(){

        // fetch('http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion/Aatrox.json')
        // .then((response => response.json()))
        // .then(response => this.props.onFetch(response))
       
    //}

    // componentDidMount(){
    //     var name = this.state.champion;
    //     var url2 = 'http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion/' + name + '.json';
    //     var url = 'http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion/Aatrox.json'
    //     fetch(url)
    //     .then(res => res.json())
    //     .then(json => {
    //         this.setState({
    //         isLoaded: true,
    //         items: json,
    
    //         })
    //     })
    // }
    

    render(){
        var {  isLoaded, items } = this.state;

        // if(!isLoaded){
        //   return <div> Loading... </div>;
        // }
        return(
            <div>
                
                <form className='search-form' onSubmit={this.handleSubmit}>
                    <input
                    type='text'
                    onChange={this.handleChampionChange}
                    className='input-summoner'
                    placeholder='Enter a champion name'
                    />

                    <button className='search-button' type='submit' >
                    <i className='fa fa-search search-icon' aria-hidden='true' />
                    Search
                    </button>
                    
                </form>

                <h1>
                    {this.state.items.type}
                    {/* {this.state.items.data[this.state.champion].id} */}
                    {this.state.champion}
                </h1>

                {/* <h1>Champion: {this.state.items.data[this.state.champion].name}</h1> */}
            </div>
        )
    }
}

export default Search;