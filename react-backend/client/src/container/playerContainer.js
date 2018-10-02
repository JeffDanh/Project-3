import React, { Component } from 'react';
import Player from '../components/player.js';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/index.js';
class PlayerCon extends Component{
    render(){
        return(
            <Player player={this.props.player}></Player>
        )
    }
}

const mapStateToProps = (state) => {
    return state
};

export default connect (mapStateToProps, actionCreators)(PlayerCon);
