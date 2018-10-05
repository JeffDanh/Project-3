// let defaultState = {
//     champion: ''
// }

// const mainReducer = (state=defaultState,action) => {
//     if(action.type==="CHAMPION_INFO"){
//         return{
//             ...state,
//             champion: action.champion
//         }
//     } else {
//         return{
//             ...state
//         }
//     }
// }

// export default mainReducer;

function mainReducer(state, action) {
    if(state === undefined) {
        return{
            apiInfo: [],

        }
    }
    switch(action.type){
        case "apiFetchData":
        {
            return{
                ...state,
                apiInfo: action.payload
            }
        }
        default: 
            return state;
    }
}

export default mainReducer;