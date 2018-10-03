// import axios from 'axios';

// export function loadChampion(){
//     return(dispatch) => {
//         return axios.get('http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion/Aatrox.json')
//             .then((response) => {
//                 dispatch(champ(response.data));
//             })
//     }
// }

// export function champ(data){
//     return{
//         type: "CHAMPION_INFO",
//         champion: data
//     }
// }