import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import axios from 'axios';
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

    render(){
        return(

            <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                <Tab eventKey={1} title="Lore">
                    Tab 1 content
                </Tab>
                <Tab eventKey={2} title="Stats">
                    Tab 2 content
                </Tab>
                <Tab eventKey={3} title="Abilities">
                    Tab 3 content
                </Tab>
            </Tabs>
        )
    }
}

export default Champion;