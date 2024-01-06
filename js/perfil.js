let key = "48741277E48619CF91FC60E15AAA0047";
let steamid = "76561198841130785"

class Perfil {
    constructor(nombre, usuario, avatar){
        
    }
}

const cargarPerfilAsync = async ()=> {
    let response = await fetch(`https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=${key}&steamids=${steamid}`)
    let perfil = await response.json();

    console.log(perfil)
}

