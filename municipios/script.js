function adicionarFavorito(municipio) {
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || []
    favoritos.push(municipio)
    localStorage.setItem('favoritos', JSON.stringify(favoritos))
}

async function carregarMunicipios() {

    try {
        let params = new URLSearchParams(document.location.search);
        let uf = params.get("nome")

        const response = await fetch(
            'https://servicodados.ibge.gov.br/api/v1/localidades/estados/' + uf + '/municipios'
        ).then(response => response.json());

        document.querySelector("#titulo").textContent = "Municípios de " + uf

        let lista = document.querySelector("#lista-de-municipios");

        let li;
        let button;

        response.forEach((municipio) => {

            li = document.createElement("li");
            li.textContent = municipio.nome
            button = document.createElement("button");
            button.textContent = "Favoritar"

            button.classList.add('favorito-button')
            button.addEventListener('click', () => {
                adicionarFavorito(municipio.nome + ', ' + uf)
            })

            lista.appendChild(li)
            lista.lastElementChild.appendChild(button)
        })
    } catch (error) {
        console.error('Erro ao carregar municípios:', error)
    }
}

document.addEventListener('DOMContentLoaded', () => {
    carregarMunicipios()
})