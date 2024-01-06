
class Juego {
    constructor(titulo, categoria, anio){

    }
}

const cargarPerfilAsync = async ()=> {
    let response = await fetch(`9c7e04853c3848a9bbbcab4efa92b2bd`)
    let perfil = await response.json();

    console.log(perfil)
}


document.addEventListener("DOMContentLoaded", cargarPerfilAsync)
// document.addEventListener("DOMContentLoaded", cargarIDJuegosAsync)
// document.addEventListener("DOMContentLoaded", cargarJuegosAsync)

let IDsJuego = [];

// const cargarIDJuegosAsync = async ()=> {
//     let response = await fetch(`https://steam-api-project.onrender.com/game_recommendations/570`)
//     let juego = await response.json();

//     console.log(juego)
//     let idjuego = juego.response.games;

//     for (let i = 0; i < idjuego.length; i++) {
//         IDsJuego.push(idjuego[i].appid)
//     // cargarJuegosAsync(idjuego[i].appid);
//     }
//    // console.log(IDsJuego)
// }
// const cargarJuegosAsync = async ()=> {
//    // let response = await fetch(`https://api.steampowered.com/ISteamApps/GetAppDetails/v1/?appids=${idJuego}&key=${key}&format=json`)

//     let response = await fetch(`https://api.steampowered.com/ISteamApps/GetAppDetails/v1/?appids=202970&key=${key}`)
//     let juego = await response.json();
//     console.log(juego)
   
// }
