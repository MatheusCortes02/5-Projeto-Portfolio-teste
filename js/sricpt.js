// MODO CLARO / ESCURO

const botao = document.getElementById("modo")
const body = document.body

if(localStorage.getItem("tema") === "claro"){
body.classList.add("light")
botao.innerHTML = "🌞"
}else{
botao.innerHTML = "🌙"
}

botao.onclick = () => {

body.classList.toggle("light")

if(body.classList.contains("light")){
botao.innerHTML = "🌞"
localStorage.setItem("tema","claro")
}else{
botao.innerHTML = "🌙"
localStorage.setItem("tema","escuro")
}

}


// PROJETOS

function mostrar(num){

let conteudos = document.querySelectorAll(".conte")

conteudos.forEach(div => {
div.style.display = "none"
})

let selecionado = document.getElementById("conteudo" + num)

selecionado.style.display = "grid"

}

mostrar(1)