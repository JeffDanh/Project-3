import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';

class Player extends Component{
    // constructor(props) {
    //     super(props);
        
    // }

    // componentWillReceiveProps(nextProps){
    //     console.log(nextProps)
    // }

    // componentWillMount(){
    //     fetch('https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/Jation?api_key=RGAPI-0439824a-549d-473f-a9e7-0e0c37a74385')
    //     .then((response => response.json()))
    //     .then(response => this.props.onFetch(response))
    // }

    render(){
        return(
            // <div className="player">
            //     {this.props.player}

            // </div>
            <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                <Tab eventKey={1} title="Tab 1">
                    Tab 1 content
                </Tab>
                <Tab eventKey={2} title="Tab 2">
                    Tab 2 content
                </Tab>
                <Tab eventKey={3} title="Tab 3">
                    Tab 3 content
                </Tab>
            </Tabs>
        )
    }
}

export default Player;