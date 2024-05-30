function removerFavorito(municipio) {
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || []
    const index = favoritos.indexOf(municipio)
    if (index >= 0) {
        favoritos.splice(index, 1)
        localStorage.setItem('favoritos', JSON.stringify(favoritos))
    }
}

function adicionarOuRemoverFavorito(municipio, imgId) {
    console.log(imgId)
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || []
    if (favoritos.includes(municipio)) {
        removerFavorito(municipio)
        document.getElementById(imgId).src = "./estrelinha.png"
    }
    else {
        favoritos.push(municipio)
        localStorage.setItem('favoritos', JSON.stringify(favoritos))
        document.getElementById(imgId).src = "./estrelinha-amarela.png"
    }
}

async function carregarMunicipios() {

    try {
        let params = new URLSearchParams(document.location.search);
        let uf = params.get("nome")
        let estado = params.get("estado")

        const response = await fetch(
            'https://servicodados.ibge.gov.br/api/v1/localidades/estados/' + uf + '/municipios'
        ).then(response => response.json());

        if (uf == 'GO' || uf == 'MG' || uf == 'RO' || uf == 'RR' || uf == 'SC' || uf == 'SE' || uf == 'SP' || uf == 'TO') {
            doDeDa = "de "
        }
        else if (uf == 'BA' || uf == 'PB') {
            doDeDa = "da "
        }
        else {
            doDeDa = "do "
        }

        document.title = "Municípios " + doDeDa + uf

        document.querySelector("#titulo").textContent = "Municípios " + doDeDa + estado

        let lista = document.querySelector("#lista-de-municipios");

        let li;
        let img;

        response.forEach((municipio) => {

            li = document.createElement("li");
            li.textContent = municipio.nome
            img = document.createElement("img");
            const favoritos = JSON.parse(localStorage.getItem('favoritos')) || []
            if (favoritos.includes(municipio.nome + ', ' + uf)) {
                img.src = "./estrelinha-amarela.png"
            }
            else {
                img.src = "./estrelinha.png" 
            }
            img.alt = "Favoritar"
            img.title = "Favoritar"
            img.classList.add('favorito-button')
            img.id = municipio.nome + ', ' + uf
            let id = img.id
            img.addEventListener('click', () => {
                adicionarOuRemoverFavorito(municipio.nome + ', ' + uf, id)
            })
            lista.appendChild(li)
            lista.lastElementChild.appendChild(img)
        })
    } catch (error) {
        console.error('Erro ao carregar municípios:', error)
    }
}

document.addEventListener('DOMContentLoaded', () => {
    carregarMunicipios()
})