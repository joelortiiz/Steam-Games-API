const juegosDeseados = JSON.parse(localStorage.getItem("listadejuegos"));

const containerLista = document.getElementById("container__lista")


const cargarLista =()=> {
    let section = document.createElement("section")
    juegosDeseados.forEach(element => {

        console.log(element.fotojuego)
        let article = document.createElement("article")
        article.classList.add("article")

        let fotolista = document.createElement("img")
        fotolista.src = element.fotojuego
        fotolista.classList.add("fotojuegolista")
        article.appendChild(fotolista)


        let titulo = document.createElement("h2")
        titulo.textContent=element.nombre
        article.appendChild(titulo)

        let aniolista = document.createElement("p")
        aniolista.textContent = element.aniojuego
        aniolista.classList.add("fechajuego")
        article.appendChild(aniolista)

        let precio = document.createElement("p")
        precio.textContent= Math.floor(Math.random()*99)+1+" €"
        precio.classList.add("precio")
        article.appendChild(precio)

        section.appendChild(article)
    });
    section.classList.add("section")
    containerLista.appendChild(section)
}
document.addEventListener("DOMContentLoaded", cargarLista)