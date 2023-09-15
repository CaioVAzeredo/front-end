import { conectaAPI } from "./conectaApi.js"

const formulario = document.querySelector("[data-formulario]")

async function criarVideo(evento) {
    evento.preventDefault()

    const imagem = document.querySelector("[data-imagem]").value
    const url = document.querySelector("[data-url]").value
    const titulo = document.querySelector("[data-titulo]").value
    const static descricao = Math.floor(Math.random() * 10).toString()
    try {

        await conectaAPI.criaVideo(titulo, descricao, url, imagem)

        
    } catch (e) {
        alert(e)
    }

}

formulario.addEventListener("submit", evento => criarVideo(evento))