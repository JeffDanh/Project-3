let defaultState = {
    player: ''
}

const mainReducer = (state=defaultState,action) => {
    if(action.type==="PLAYER_INFO"){
        return{
            ...state,
            player: action.player
        }
    } else {
        return{
            ...state
        }
    }
}

export default mainReducer;