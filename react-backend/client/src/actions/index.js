import axios from 'axios';

export function loadPlayer(){
    return(dispatch) => {
        return axios.get('https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/Jation?api_key=RGAPI-0439824a-549d-473f-a9e7-0e0c37a74385')
            .then((response) => {
                dispatch(p(response.data));
            })
    }
}

export function p(data){
    return{
        type: "PLAYER_INFO",
        player: data
    }
}