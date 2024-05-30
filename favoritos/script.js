function removerFavorito(municipio) {
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || []
    const index = favoritos.indexOf(municipio)
    if (index >= 0) {
        favoritos.splice(index, 1)
        localStorage.setItem('favoritos', JSON.stringify(favoritos))
        carregarFavoritos()
    }
}

function carregarFavoritos() {
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || []
    const lista = document.querySelector('#lista-de-municipios')
    lista.innerHTML = ''

    let li;
    let button;

    favoritos.sort()

    favoritos.forEach((municipio) => {
        li = document.createElement('li')
        li.textContent = municipio

        button = document.createElement("button");
        button.textContent = "Remover"
        button.classList.add('remover-button')

        button.addEventListener('click', () => {
            removerFavorito(municipio)
        })

        lista.appendChild(li)
        lista.lastElementChild.appendChild(button)
    })
}

document.addEventListener('DOMContentLoaded', () => {
    carregarFavoritos()
})