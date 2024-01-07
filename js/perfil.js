let keySteam = "48741277E48619CF91FC60E15AAA0047";
let steamid = "76561198841130785"

class Perfil {
    constructor(nombre, usuario, avatar, pais) {
        this.nombre = nombre
        this.usuario = usuario
        this.avatar = avatar
        this.pais = pais
    }
    getNombre() {
        return this.nombre;
    }

    setNombre(nombre) {
        this.nombre = nombre;
    }
    getUsuario() {
        return this.usuario;
    }
    setUsuario(usuario) {
        this.usuario = usuario
    }
    getAvatar() {
        return this.avatar
    }
    setAvatar(avatar) {
        this.avatar = avatar
    }
    getPais() {
        return this.pais
    }
    setPais(pais) {
        this.pais = pais
    }
}
let containerPerfil = document.getElementById("perfil")

const cargarPerfilAsync = async () => {
    let response = await fetch(`https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=${keySteam}&steamids=${steamid}`)
    let perfil = await response.json();
    console.log(perfil.response.players[0])
    let perfilCargado = perfil.response.players[0]
    let perfilObj = new Perfil(perfilCargado.realname, perfilCargado.personaname, perfilCargado.avatarfull, perfilCargado.loccountrycode)

    let avatar = document.createElement("img")
    avatar.id = "avatar"
    avatar.src = perfilObj.getAvatar()
    containerPerfil.appendChild(avatar)
    
    let titulo = document.createElement("h2")
    titulo.textContent = "STEAM"

    let logo = document.createElement("img")
    logo.src = "./assets/images/Steam_logo.png"
    logo.classList.add("logo")

    let nombre = document.createElement("p")
    nombre.classList.add("nombre")
    nombre.textContent = "Nombre: "+perfilObj.getNombre()

    let username = document.createElement("p")
    username.classList.add("nombre")
    username.textContent = "Usuario: "+perfilObj.getUsuario()

    let pais = document.createElement("p")
    pais.textContent= "País: "+perfilObj.getPais()
    


    let menu = document.createElement("div") 
    menu.classList.add("menu")
    menu.style.display="none"

    menu.appendChild(titulo)
    titulo.appendChild(logo)
    menu.appendChild(nombre)
    menu.appendChild(username)
    menu.appendChild(pais)

    containerPerfil.appendChild(menu)
    
    const imagen = document.getElementById("avatar");
    imagen.addEventListener("click",()=> desplegarMenu(menu))

}
const desplegarMenu = (menu) => {
    console.log("click")
    if (menu.style.display == "block") {
        menu.style.display = "none"
    } else {
        menu.style.display = "block";
    }
}
document.addEventListener("DOMContentLoaded", cargarPerfilAsync)

