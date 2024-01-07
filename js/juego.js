let key = "9c7e04853c3848a9bbbcab4efa92b2bd"
class Juego {
    constructor(titulo, anio, valoracion, numValoracion, genero, imagenJuego){
        this.titulo = titulo;
        this.anio = anio;
        this.valoracion = valoracion;
        this.numValoracion = numValoracion
        this.genero = genero;
        this.imagenJuego = imagenJuego
    }

    getTitulo() {
        return this.titulo;
    }

    setTitulo(titulo) {
        this.nombre = titulo;
    }
    getNumvaloracion() {
        return this.numValoracion;
    }

    setNumvaloracion(numValoracion) {
        this.nombre = numValoracion;
    }

    getAnio() {
        return this.anio;
    }

    setanio(anio) {
        this.anio = anio;
    }

    getvaloracion() {
        return this.valoracion;
    }

    setvaloracion(valoracion) {
        this.valoracion = valoracion;
    }

    getGenero() {
        return this.genero;
    }

    setgenero(genero) {
        this.genero = genero;
    }
    getImagen() {
        return this.imagenJuego;
    }

    setImagen(imagenJuego) {
        this.imagenJuego = imagenJuego;
    }
}


let containerJuegos = document.getElementById("main")
const cargarJuegosAsync = async ()=> {
    let response = await fetch(`https://api.rawg.io/api/games?key=${key}`)
    let perfil = await response.json();

    //console.log(perfil.results)
    let juegos = perfil.results
    let arJuegos = []
    for (let i = 0; i < juegos.length; i++) {
        let generosAr = ""
        for (let j = 0; j <  juegos[i].genres.length; j++) {
            generosAr +=  " "+juegos[i].genres[j].name
        }
       
        let juego = new Juego(
            juegos[i].name,
            juegos[i].released,
            juegos[i].rating,
            juegos[i].ratings_count,
            generosAr,
            juegos[i].background_image
        )
        arJuegos.push(juego)
        
        let articulo = document.createElement("ARTICLE")
            articulo.classList.add("article")
        let titulo = document.createElement("H2")
        titulo.textContent = juego.getTitulo()
        
        let fecha = document.createElement("P")
        fecha.textContent = "Lanzamiento: "+juego.getAnio()
        
        let rating = document.createElement("P")
        rating.textContent = juego.getvaloracion()+" / 5"

        let numValoracion = document.createElement("P")
        numValoracion.textContent = juego.getNumvaloracion()+" usuarios han valorado"

        let generos = document.createElement("FOOTER")
        generos.textContent = "Géneros: "+juego.getGenero()
            
        let imagen = document.createElement("IMG")
        imagen.src = juego.getImagen()
        imagen.classList.add("foto_juego")
        
        let botonlista = document.createElement("button")
        botonlista.textContent = "AÑADIR LISTA DE DESEADOS"
        botonlista.classList.add("botonLista")
        botonlista.id = "boton"
        botonlista.addEventListener("click", ()=> aniadirLista(event))

            containerJuegos.appendChild(articulo)
            articulo.appendChild(titulo)
            articulo.appendChild(imagen)
            articulo.appendChild(rating)
            articulo.appendChild(numValoracion)
            articulo.appendChild(generos)
            articulo.appendChild(fecha)
            articulo.appendChild(botonlista)


    }
}
const aniadirLista =(event)=> {
    console.log("click")
    event.preventDefault()

    const nombre = event.target.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent
    const foto = event.target.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.src;
    const anio = event.target.previousElementSibling.textContent
    

const listaJuegos = JSON.parse(localStorage.getItem('listadejuegos')) ?? [];

// Agrega un nuevo elemento al array
const juegonuevo = {
    fotojuego: foto,
    nombre: nombre,
    aniojuego: anio
}

const juegoExistente = listaJuegos.find(juego => juego.nombre == nombre);

// Si el juego no existe, agrégalo al array y guárdalo en localStorage
if (!juegoExistente) {
    listaJuegos.push(juegonuevo);
    localStorage.setItem("listadejuegos", JSON.stringify(listaJuegos));
}


}

document.addEventListener("DOMContentLoaded", cargarJuegosAsync)
// document.addEventListener("DOMContentLoaded", cargarIDJuegosAsync)
// document.addEventListener("DOMContentLoaded", cargarJuegosAsync)

// let IDsJuego = [];

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
