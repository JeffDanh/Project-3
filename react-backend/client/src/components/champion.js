import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import Search from './search';

class Champion extends Component{
    constructor(props){
        super(props);
        this.state = {
            champion: '',
            items: [],
            isLoading: false
        }
    }

    // componentWillReceiveProps(nextProps){
    //     console.log(nextProps)
    // }

    render(){
        var id = this.props.id;
        return(

            <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                <Tab eventKey={1} title="Lore" style={{color: '', margin: '20px'}}>
                    
                    {this.props.championLore}
                    
                    {console.log(this.props.championLore)}

                </Tab>
                <Tab eventKey={2} title="Stats" style={{margin: '20px'}}>

                    <p> 
                        Attack: {this.props.attack} <br />
                        Defense: {this.props.defense} <br />
                        Magic: {this.props.magic} <br />
                        Difficulty: {this.props.difficulty} <br />
                        <br />
                        HP: {this.props.hp} <br />
                        HP per level: {this.props.hpperlevel} <br />
                        Mana: {this.props.mp} <br />
                        Mana per level: {this.props.mpperlevel} <br />
                        Movement speed: {this.props.movespeed} <br />
                        Armor: {this.props.armor} <br />
                        Armor per level: {this.props.armorperlevel} <br />
                        Attack range: {this.props.attackrange} <br />
                    </p>

                </Tab>
                <Tab eventKey={3} title="Abilities" style={{margin: '20px'}}>
                    
                </Tab>
                <Tab eventKey={4} title="Skins" >
                    Name: {this.props.id} <br />

                    <div style={{backgroundImage: 'url(http://ddragon.leagueoflegends.com/cdn/img/champion/loading/' + id +'_0.jpg)', height: '600px', backgroundRepeat: 'no-repeat'}}/>
                    <div style={{backgroundImage: 'url(http://ddragon.leagueoflegends.com/cdn/img/champion/loading/' + id +'_1.jpg)', height: '600px', backgroundRepeat: 'no-repeat'}}/>
                    <div style={{backgroundImage: 'url(http://ddragon.leagueoflegends.com/cdn/img/champion/loading/' + id +'_2.jpg)', height: '600px', backgroundRepeat: 'no-repeat'}}/>
                    <div style={{backgroundImage: 'url(http://ddragon.leagueoflegends.com/cdn/img/champion/loading/' + id +'_3.jpg)', height: '600px', backgroundRepeat: 'no-repeat'}}/>
                    <div style={{backgroundImage: 'url(http://ddragon.leagueoflegends.com/cdn/img/champion/loading/' + id +'_4.jpg)', height: '600px', backgroundRepeat: 'no-repeat'}}/>
                    <div style={{backgroundImage: 'url(http://ddragon.leagueoflegends.com/cdn/img/champion/loading/' + id +'_5.jpg)', height: '600px', backgroundRepeat: 'no-repeat'}}/>
                    <div style={{backgroundImage: 'url(http://ddragon.leagueoflegends.com/cdn/img/champion/loading/' + id +'_6.jpg)', height: '600px', backgroundRepeat: 'no-repeat'}}/>
                    <div style={{backgroundImage: 'url(http://ddragon.leagueoflegends.com/cdn/img/champion/loading/' + id +'_7.jpg)', height: '600px', backgroundRepeat: 'no-repeat'}}/>
                    <div style={{backgroundImage: 'url(http://ddragon.leagueoflegends.com/cdn/img/champion/loading/' + id +'_8.jpg)', height: '600px', backgroundRepeat: 'no-repeat'}}/>
                    <div style={{backgroundImage: 'url(http://ddragon.leagueoflegends.com/cdn/img/champion/loading/' + id +'_9.jpg)', height: '600px', backgroundRepeat: 'no-repeat'}}/>
                    <div style={{backgroundImage: 'url(http://ddragon.leagueoflegends.com/cdn/img/champion/loading/' + id +'_10.jpg)', height: '600px', backgroundRepeat: 'no-repeat'}}/>
                </Tab>
            </Tabs>
        )
    }
}

export default Champion;