import React, { Component } from 'react';
import axios from 'axios';
import Champion from './champion';

class Search extends Component {
    constructor(props){
        super(props)
        this.state = {
            champion: '',
            items: [],
            id: '',
            lore: '',
            info: [],
            stats: [],
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
        // console.log("data: " + this.state.items);
        // window.location = `/champions/${this.state.champion}`
        // console.log("state: "+ this.state.items);
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
                    id: json.data[champion].id,
                    lore: json.data[champion].lore,
                    title: json.data[champion].title,
                    info: json.data[champion].info,
                    stats: json.data[champion].stats,
                    spells: json.data[champion].spells,
                    

                }, () => {
                    console.log("state: " + this.state.items.data[this.Capitalize(this.state.champion)].id)
                    console.log("id: " + this.state.id)
                    console.log("lore: " + this.state.lore)
                    console.log("spells" + this.state.spells)
                    
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

                <form style={{textAlign: 'center'}} className='search-form' onSubmit={this.handleSubmit}>
                    <input style={{padding: '5px', textAlign: 'center', border: '2px solid gold'}}
                    type='text'
                    onChange={this.handleChampionChange}
                    className='input-summoner'
                    placeholder='Search champion'
                    />

                    <button style={{color: '#666', background: 'gold', border: '2px solid gold', padding: '5px'}} className='search-button' type='submit' >
                    <i className='fa fa-search search-icon' aria-hidden='true' />
                    Search
                    </button>
                    
                </form>

                <h1 style={{margin: '20px'}}>Champion: {this.state.id} <i style={{fontSize: '16px'}}>{this.state.title}</i></h1>
                <h2 style={{margin: '20px'}}></h2>
                
                {/* {this.state.lore} */}
                <p>
                    {/* {this.state.items.type}
                    {this.state.champion}
                    {this.state.id}
                    {this.state.lore} */}
                </p>

                <Champion 
                id={this.state.id}
                championLore={this.state.lore}

                attack={this.state.info.attack} 
                defense={this.state.info.defense}
                magic={this.state.info.magic}
                difficulty={this.state.info.difficulty}

                hp={this.state.stats.hp}
                hpperlevel={this.state.stats.hpperlevel}
                mp={this.state.stats.mp}
                mpperlevel={this.state.stats.mpperlevel}
                movespeed={this.state.stats.movespeed}
                armor={this.state.stats.armor}
                armorperlevel={this.state.stats.armorperlevel}
                attackrange={this.state.stats.attackrange}


                {...this.props} />
            </div>
            
        )
    }
}

export default Search;